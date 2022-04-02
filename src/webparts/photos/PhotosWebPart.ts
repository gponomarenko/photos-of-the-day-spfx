import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
  PropertyPaneDropdown
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'PhotosWebPartStrings';
import Photos from './components/Photos';
import { IPhotosProps } from './components/IPhotosProps';

interface IPhotosUrlsJSON {
  urls?: string[];
}

export interface IPhotosWebPartProps {
  photosUrlsJSON: IPhotosUrlsJSON;
  description: string;
  numberPerView: number;
  photosUrls: string;
}

export default class PhotosWebPart extends BaseClientSideWebPart<IPhotosWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IPhotosProps> = React.createElement(
      Photos,
      {
        description: this.properties.description,
        context: this.context,
        photosUrlsArray: this.getArrayOfUrls() || null,
        itemsNumber: this.getUrlsNumber() || null,
        numberPerViewValue: this.properties.numberPerView,
        buttonsPerView: this.getButtonsPerView() || null,
      }
    );

    ReactDom.render(element, this.domElement);
  }
  private getArrayOfUrls(): string[] {
    if (this.properties.photosUrls && this.properties.photosUrls != undefined) return JSON.parse(this.properties.photosUrls)?.urls;
  }

  private getUrlsNumber(): number {
    if (this.properties.photosUrls && this.properties.photosUrls != undefined) return JSON.parse(this.properties.photosUrls)?.urls.length;
  }

  private getButtonsPerView(): number {
    if (this.properties.photosUrls && this.properties.photosUrls != undefined) return Math.ceil(JSON.parse(this.properties.photosUrls)?.urls.length/this.properties.numberPerView);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: "Photos properties"
          },
          groups: [
            {
              groupName: "Settings",
              groupFields: [
                PropertyPaneTextField('description', {
                  label: "Title"
                }),
                PropertyPaneDropdown('numberPerView',{
                  label:"Number of photos per view",
                  options:
                  [
                    {key:1,text:"1 photo"},
                    {key:2,text:"2 photos"},
                    {key:3,text:"3 photos"},
                    {key:4,text:"4 photos"}
                  ]
                  })
              ]
            },
            {
              groupName : "Datas",
              groupFields:
              [
                PropertyPaneTextField('photosUrls', {
                  label:"URLs of photos"
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
function photosUrls(photosUrls: any): IPhotosUrlsJSON {
  throw new Error('Function not implemented.');
}

