import * as React from 'react';
import * as ReactDom from 'react-dom';

import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
  PropertyPaneSlider,
  PropertyPaneButton,
  PropertyPaneButtonType
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'PhotosWebPartStrings';
import Photos from './components/Photos';
import { IPhotosProps } from './components/IPhotosProps';

interface IPhotosUrlsJSON {
  urls: string[];
}

export interface IPhotosWebPartProps {
  photosUrlsJSON: IPhotosUrlsJSON;
  description: string;
  numberPerView: number;
  photosUrls: string;
  photoUrl: string;
}

export default class PhotosWebPart extends BaseClientSideWebPart<IPhotosWebPartProps> {
  public render(): void {
    const element: React.ReactElement<IPhotosProps> = React.createElement(
      Photos,
      {
        description: this.properties.description,
        context: this.context,
        inputUrl: this.properties.photoUrl,
        itemsPerView: this.properties.numberPerView,
        getButtonsNumber: this.getButtonsNumberPerView(),
        addUrl: this.buttonAddUrl(),
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected get disableReactivePropertyChanges(): boolean {
    return true;
  }

  private getButtonsNumberPerView(itemsNumber?: number, itemsPerView?: number): number {
    return Math.ceil(itemsNumber / itemsPerView);
  }

  private buttonAddUrl(oldVal?: any): string {
    // console.log("buttonAddUrl was triggered");

    return this.properties.photoUrl;
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
                PropertyPaneSlider('numberPerView',{
                  label:"Number of photos per view",
                  min: 1,
                  max: 4,
                  step: 1
                })
              ]
            },
            {
              groupName : "Datas",
              groupFields:
              [
                PropertyPaneTextField('photosUrls', {
                  label:"URLs of photos"
                }),
                PropertyPaneTextField('photoUrl', {
                  label:"Url of photo"
                }),
                PropertyPaneButton('addUrl', {
                  text: "addUrl",
                  buttonType: PropertyPaneButtonType.Normal,
                  icon: 'Add',
                  onClick: this.buttonAddUrl.bind(this)
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
