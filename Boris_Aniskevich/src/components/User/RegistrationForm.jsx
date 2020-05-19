import React from 'react'
import { Field, reduxForm } from 'redux-form'

import Input from 'common/form/Input'
import { required } from 'common/validators'

import style from './User.module.scss'

const RegistrationForm = props => {
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
            <Field 
                name='repeatPassword'
                component={Input}
                type='password'
                label='Repeat Password'
                validate={[required]}
            />
            <span>{props.error && <strong>{props.error}</strong>}</span>
            <button type='submit' className={style.button}>Registration</button>
        </form>
        <button onClick={props.handleToggleForm} className={style.buttonToggle}>To login</button>
        </div>
    )
}

export default reduxForm({form: 'registration'})(RegistrationForm)