export const required = value => {
    if (value) return null
    return 'Required'
}

export const minLength = limit => value => {
    if (value.length < limit ) return `Min length ${limit} symbols`
    return null
}

export const maxLength = limit => value => {
    if (value.length > limit) return `Max length ${limit} symbols`
    return null
}