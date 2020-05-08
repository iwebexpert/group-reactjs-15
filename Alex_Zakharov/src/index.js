import React from 'react';
import ReactDom from 'react-dom';

import { AppRouting } from './AppRouting';

const render = () => {
    ReactDom.render(
        <AppRouting />,
        document.getElementById('root'),
    );
};

render();