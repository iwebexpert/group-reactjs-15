import React from 'react'
import { Field, reduxForm } from 'redux-form'

import Input from 'common/form/Input'
import { required, minLength, maxLength } from 'common/validators'

import style from './Message.module.scss'

const minLength3 = minLength(3)
const maxLength50 = maxLength(50)

const SendMessageForm = props => {
    return (
        <form onSubmit={props.handleSubmit} className={style.form}>
            <Field
                name='message'
                component={Input}
                type='text'
                label='Enter message'
                validate={[required, minLength3, maxLength50]}
            />  
            <button type='submit' className={style.button}>Send</button>
        </form>
    )
}

export default reduxForm({form: 'sendMessage'})(SendMessageForm)