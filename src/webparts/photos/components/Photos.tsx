import * as React from 'react';
import styles from './Photos.module.scss';
import { IPhotosProps } from './IPhotosProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { MultiTiles } from './MultiTiles';

export interface IPhotosState {
  items: string[];
}

export default class Photos extends React.Component<IPhotosProps, IPhotosState> {
  constructor(props: IPhotosProps, state: IPhotosState) {
    super(props);

    this.state = {
      items: [],
    };
  }

  public componentDidMount(): void {
    if (this.props.inputUrl && !this.state.items.length) this.pushUrlToState(this.props.inputUrl);
  }

  public componentDidUpdate(prevProps: Readonly<IPhotosProps>, prevState: Readonly<IPhotosState>, snapshot?: any): void {
    if (this.props.inputUrl !== prevProps.inputUrl && this.props.inputUrl) {
      this.pushUrlToState(this.props.inputUrl);
    }
  }

  private pushUrlToState(url: string): void {
    this.setState({
      items: [...this.state.items, url]
    });
  }

  public render(): React.ReactElement<IPhotosProps> {
    return (
      <div className={ styles.photos }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>Photos of the Day</span>
            </div>
          </div>
        </div>
        <div className={ styles.container }>
              <MultiTiles
                items={this.state.items}
                itemsPerView={this.props.itemsPerView}
              />
        </div>
      </div>
    );
  }
}
