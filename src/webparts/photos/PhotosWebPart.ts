import * as React from 'react';
import * as ReactDom from 'react-dom';

import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
  PropertyPaneSlider
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'PhotosWebPartStrings';
import Photos from './components/Photos';
import { IPhotosProps } from './components/IPhotosProps';

export interface IPhotosWebPartProps {
  description: string;
  numberPerView: number;
  photoUrl: string;
}

export default class PhotosWebPart extends BaseClientSideWebPart<IPhotosWebPartProps> {
  public render(): void {
    const element: React.ReactElement<IPhotosProps> = React.createElement(
      Photos,
      {
        context: this.context,
        description: this.properties.description,
        itemsPerView: this.properties.numberPerView,
        inputUrl: this.properties.photoUrl,
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected get disableReactivePropertyChanges(): boolean {
    return true;
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
                  label: "Title",
                  value: "Photos of the Day"
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
                PropertyPaneTextField('photoUrl', {
                  label:"add Url of photo and press 'APPLY'"
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
