import React from 'react';
import {connect} from 'react-redux';


import {profile} from 'actions/profile';

class profile extends React.Component {
		constructor(props){
        super(props);

            this.state = {
               User: [    
                           {  // Не уверен что такой подход вообще разумен
                               Name:profile.name,
                               SubName: profile.subname,
                               Age: profile.age,
                           }
                     ],
                         };
    }

render(){
        const {Name:profile.name,SubName: profile.subname,Age: profile.age,} = this.props;

        //const style={marginLeft: '2em', color: 'red'};

        return (
            // <div style={style}>
            <div className="profile">
                <List>
                    {User.map((chat, index) => <ListItem key={index}>
                        <Link to={User.link}>
                            <ListItemText primary={User.name} />
                            <ListItemText primary={User.subname} />
                            <ListItemText primary={User.age} />
                        </Link>
                    </ListItem>)}
                </List>
               
            </div>
        );
    }
    }