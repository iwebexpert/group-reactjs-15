import React from 'react'

import Header from '../components/Header/Header'

import style from './App.module.scss'

const App = () => {
    return (
        <div className={style.appWrapper}>
            <Header />
            <div className={style.sidebar}>

            </div>
            <div className={style.content}>

            </div>
        </div>
    )
}

export default App