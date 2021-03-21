const validate  = values => {
    
    let errors = {}
    if(!values.message) {
        errors.message = 'Required!'
    }
    else if (values.message.length < 2) {
        errors.message = 'Too short!'
    }
    else if (values.message.length > 15) {
        errors.message = 'Too long!'
    }

    return errors
} 

export default validate