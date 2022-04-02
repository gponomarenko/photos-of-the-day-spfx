import { WebPartContext } from '@microsoft/sp-webpart-base';

export interface IPhotosProps {
  description: string;
  context: WebPartContext;
  photosUrlsArray: string[];
  itemsNumber: number;
  numberPerViewValue: number;
  buttonsPerView: number;
}
