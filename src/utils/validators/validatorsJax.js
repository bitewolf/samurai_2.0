const validate  =  (object) => {
    
    let msgKeys = ['postText', 'message'];
    
    let value = null;
    let key = 'defaultKey';

    msgKeys.forEach(function(_key){
        if (object.hasOwnProperty(_key) && typeof(object[_key]) === 'string') {
            value = object[_key];
            key = _key;
        }
    });

    let errors = {}

    if (value === null) {
        errors[key] = 'Field not found!';
        return errors;
    }
    
    else if(value === '') {
        errors[key] = 'Required!'
    }
    else if (value.length < 10) {
        errors[key] = 'Too short!'
    }
    else if (value.length > 105) {
        errors[key] = 'Too long!'
    }

    return errors
} 

export default validate