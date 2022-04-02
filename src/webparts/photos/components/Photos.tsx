import * as React from 'react';
import styles from './Photos.module.scss';
import { IPhotosProps } from './IPhotosProps';
import { escape } from '@microsoft/sp-lodash-subset';
import MultiTiles from './MultiTiles'

export default class Photos extends React.Component<IPhotosProps, {}> {
  public render(): React.ReactElement<IPhotosProps> {
    return (
      <div className={ styles.photos }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>Title: {escape(this.props.description)}</span>
              <p className={ styles.subTitle }>items number: {this.props.itemsNumber} </p>

              <p className={ styles.description }>Description: {escape(this.props.description)}</p>
              <p className={ styles.description }>Number per view: {this.props.numberPerViewValue}</p>
              <p className={ styles.description }>Buttons per view: {this.props.buttonsPerView}</p>
            </div>
          </div>
        </div>
        <div className={ styles.container }>
              <MultiTiles
                slidesToShow={this.props.numberPerViewValue}
              />
        </div>
      </div>
    );
  }
}
