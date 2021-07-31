import {
    Capitalize
} from "./string-manipulator"

export function ValidateValueObject(object) {
    let dataNull = {
        isNull: false,
        key: "",
        message: ""
    }

    for (const [key, value] of Object.entries(object)) {
        if (value === null || value === '' && key !== 'id') {
            dataNull.isNull = true
            dataNull.key = key
            dataNull.message = Capitalize(key.replace(/_/g, " ")) +" tidak boleh kosong"
            break
        }
    };
    return dataNull
}


export function ValidateValueObjectForm(fields,object) {
    let dataNull = {
        isNull: false,
        key: "",
        message: ""
    }
    var isNull = false
    fields.map(field =>{
        for (const [key, value] of Object.entries(object)) {
            if (key !== 'id' && field.keyOfObject === key && field.mandatory && value === "") {
                dataNull.isNull = true
                dataNull.key = key
                dataNull.message = Capitalize(key.replace(/_/g, " ")) +" tidak boleh kosong"
                isNull = true
                break
            }
            if (isNull){
                break
            }
        };
    })
    
    return dataNull
}