import React from 'react';
import ReactDom from 'react-dom';

import {AboutPage} from './pages/AboutPage';
import {ContactsPage} from './pages/ContactsPage';
import {PageNotFound} from './pages/PageNotFound';
import {HomePage} from './pages/HomePage';
import {General} from './pages/General';
/// todo Добовлять чаты
class AppRouting extends React.Component {
    state = {
        route: window.location.hash.substr(1),
    };

    componentDidMount(){
        window.addEventListener('hashchange', ()=> {
            this.setState({route: window.location.hash.substr(1)});
        });
    }

    render(){
        let Child;
        switch(this.state.route){
            case '':
            case '/':
                Child = HomePage;
                break;
            case '/General':
                Child = General;
                break;
            case '/about':
                Child = AboutPage;
                break;
                case '/contacts':
                    Child = ContactsPage;
                    break;
            default:
                Child = PageNotFound;
        }

        return (<div>
            <ul>
                <li><a href="#/">Home</a></li>
                <li><a href="#/General">Profile</a></li>
                <li><a href="#/about">About</a></li>
                <li><a href="#/contacts">Contacts</a></li>
                <li><a href="#/dsfdsfsd">Error</a></li>
            </ul>
            <hr/>
            <div>
                <Child />
            </div>
        </div>);
    }
}


ReactDom.render(
    
    <AppRouting />,
    document.getElementById('root'),
);