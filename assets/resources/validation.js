'use strict'

const validateEmail = email => {
    if (email !== null & email !== '' && email.match(/^[\W\w]+@{1}\w+(\.[\w]+((\.[\w+]+)+)?)$/)) {
        return true
    }
    return false
}

export default validateEmail