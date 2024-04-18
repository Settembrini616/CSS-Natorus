'use strict'

const capitalize = (str)=>{

    return str.split('').map((element, index, array)=>{
        return element.toUpperCase()
    }).join('');
}
console.log(capitalize('Hello'));