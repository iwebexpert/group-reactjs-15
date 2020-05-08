import React from 'react';
import {MessengerRedux} from "containers/MessengerContainer";
import {ProfileRedux} from "containers/ProfileContainer";

import './Layout.scss'

export class Layout extends React.Component {

  render() {
    return (
      <div className={'layout'}>
        <ProfileRedux/>
        <div className={'container'}>
          <MessengerRedux match={this.props.match}/>
        </div>
      </div>
    );
  }
}
