import React from 'react';
import ReactDom from 'react-dom';

import profile from 'containers/profile';

class General extends React.Component {
    constructor(props){
        super(props);

            this.state = {
               User: [    
                           {
                               Name:'Антон',
                               SubName: 'Иванов',
                               NikName: 'WMW',
                               Age: 40001,
                           }
                     ],
                         };
    }

    
    

    render(){
        return(
            <profile/>
            <div className = "General">
            <h2>You Profile</h2>
            <Box component="div" display="inline">
            <div>
                <ul><h2>Ваше прозвище</h2>
                    {state.User.NikName}
                </ul>
                 <ul><h2>Ваша фамилия</h2>
                    {state.User.SubName}
                </ul>
                 <ul><h2>Ваша имя</h2>
                    {state.User.Name}
                </ul>
                 <ul><h2>Ваш возраст</h2>
                    {state.User.Age}
                </ul>
                 
            </div>
            );
    }
}