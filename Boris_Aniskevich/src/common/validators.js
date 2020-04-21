export const required = value => {
    if (value) return undefined
    return 'Required'
}

export const minLength = limit => value => {
    if (value.length < limit ) return `Min length ${limit} symbols`
    return undefined
}

export const maxLength = limit => value => {
    if (value.length > limit) return `Max length ${limit} symbols`
    return undefined
}