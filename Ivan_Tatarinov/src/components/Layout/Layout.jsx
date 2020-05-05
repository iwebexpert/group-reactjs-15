import React from 'react';

import {Messenger} from "components/Messenger";
import {Header} from "components/Header";
import './Layout.scss'

export class Layout extends React.Component {

  render() {
    return (
      <div className={'layout'}>
        <Header/>
        <div>
          <Messenger match={this.props.match}/>
        </div>
      </div>
    );
  }
}