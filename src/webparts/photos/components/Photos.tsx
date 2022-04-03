import * as React from 'react';
import styles from './Photos.module.scss';
import { IPhotosProps } from './IPhotosProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { ReactSlickDemo } from './MultiTiles';

export interface IPhotosState {
  items: any[];
}

export default class Photos extends React.Component<IPhotosProps, IPhotosState> {
  constructor(props: IPhotosProps, state: IPhotosState) {
    super(props);

    this.state = {
      items: [],
    }
  }

  public componentDidMount(): void {
    if (this.props.addUrl && !this.state.items.length) this.pushUrlToState(this.props.addUrl);
  }

  public componentDidUpdate(prevProps: Readonly<IPhotosProps>, prevState: Readonly<IPhotosState>, snapshot?: any): void {
    if (this.props.addUrl !== prevProps.addUrl && this.props.addUrl) {
      this.pushUrlToState(this.props.addUrl);
    }
  }

  private pushUrlToState(url: string): void {
    this.setState({
      items: [...this.state.items, url]
    })
  }

  public render(): React.ReactElement<IPhotosProps> {
    return (
      <div className={ styles.photos }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>Title: {escape(this.props.description)}</span>
              <p className={ styles.subTitle }>items number: {this.state.items.length} </p>
              <p className={ styles.description }>Description: {escape(this.props.description)}</p>
              <p className={ styles.description }>Number per view: {this.props.itemsPerView}</p>
              <p className={ styles.description }>Buttons per view: {this.props.getButtonsNumber}</p>
              <p className={ styles.description }>URLs: {this.state.items.length ? this.state.items.join(" ") : "none"}</p>
            </div>
          </div>
        </div>
        <div className={ styles.container }>
              <ReactSlickDemo
              />
        </div>
      </div>
    );
  }
}
