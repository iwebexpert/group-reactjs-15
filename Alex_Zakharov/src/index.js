import React from 'react';
import ReactDom from 'react-dom';

import { Messenger } from 'components/Messenger';
import { AppRouting } from './AppRouting';

const render = () => {
    ReactDom.render(
        <AppRouting />,
        document.getElementById('root'),
    );
};

render();