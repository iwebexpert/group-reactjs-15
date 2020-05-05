import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';


import { profile } from "../actions/profile" ;
constructor(props){
        super(props);

            this.state = {
               profile: [    /// Тестовая заглушка \|/
                           {
                               chatName:'Работа',
                               author: 'Начальник',
                               text: 'Когда тебя ждать?',
                           },
                           {
                               chatName:'Семья',
                               author: 'Родитель',
                               text: 'Перезвони я волнуюсь',
                           },
                           {
                               chatName:'Жена',
                               author: 'Вы',
                               text: 'Я к обеду!',
                           },
                           {
                               chatName:'Муж',
                               author: 'Вы',
                               text: 'Я к ужину!',
                           },
                           {
                               chatName:'Дети',
                               author: 'Сын',
                               text: 'Завтра на рыбалку',
                           },

                     ],
                         };
    }
    actions.profile()

return store ;

// 5 методичка 14 страница