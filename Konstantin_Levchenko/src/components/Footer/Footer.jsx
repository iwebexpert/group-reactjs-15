import React from 'react';

import './Footer.css';

export class Footer extends React.Component {

    render() {
        const date = new Date;
        return (
            <div className='footer'> Copyright © {date.getFullYear()}</div>
        );
    }
}