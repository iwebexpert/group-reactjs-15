import React from 'react'
import { Field, reduxForm } from 'redux-form'

import Input from 'common/form/Input'
import { required } from 'common/validators'

import style from './User.module.scss'

const LoginForm = props => {
    return (
        <div className={style.formContainer}>
        <form onSubmit={props.handleSubmit} className={style.form}>
            <Field 
                name='username'
                component={Input}
                type='text'
                label='Username'
                validate={[required]}
            />
            <Field 
                name='password'
                component={Input}
                type='password'
                label='Password'
                validate={[required]}
            />
            <span>{props.error && <strong>{props.error}</strong>}</span>
            <button type='submit' className={style.button}>Login</button>
        </form>
        <button onClick={props.handleToggleForm} className={style.buttonToggle}>To registartion</button>
        </div>
    )
}

export default reduxForm({form: 'login'})(LoginForm)