import { WebPartContext } from '@microsoft/sp-webpart-base';

export interface IPhotosProps {
  description: string;
  context: WebPartContext;
  inputUrl: string;
  itemsPerView: number;
}
