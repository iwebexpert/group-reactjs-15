//TODO - вызвать action PROFILE_LOAD и передать полученные данные в компонент Profile или Header

//Добавить экран ожидания и сообщение об ошибке (в случае неуспеха получения данных)


import React from 'react';
import {connect} from 'react-redux';
import {push} from 'connected-react-router';

import {Messenger} from 'components/Messenger';
import {PROFILE_LOAD} from 'actions/profile';




class profileContainer extends React.Component {

    componentDidMount(){
        const {profile} = this.props;

        if(!this.props.profile.length){
            
           
            profile();
        }
    }

   

   

    
    render(){
        const {profile, messages, isLoading, isError} = this.props;

        return (
            <Messenger isError={isError} isLoading={isLoading} handleRedirect={this.handleRedirect} messages={messages} />
        );
    }
}

function mapStateToProps2(state, ownProps){
    const profile = state.profile.entries;
    const {match} = ownProps;

    let messages = null;

    if(match && profile[match.params.id]){
        messages = profile[match.params.id].messages;
    }

    let profileArrayForShow = [];
    for(let key in profile){
        if(profile.hasOwnProperty(key)){
            chatsArrayForShow.push({name: profile[key].name, link: `/profile/${key}`});
        }
    }

    const lastId = Object.keys(profile).length ? Object.keys(profile).length : 0;
  
    return {
        profile: profileArrayForShow,
        messages,
        isLoading: state.profile.loading,
        isError: state.profile.error,
    };
}

function mapDispatchToProps2(dispatch){
    return {
        profile: () => dispatch(profile()),
       
    }
}

export const MessengerRedux = connect(mapStateToProps2, mapDispatchToProps2)(MessengerContainer);
