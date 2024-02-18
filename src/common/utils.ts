export function copyProperties(source, dest) {
    for (let property in source) {
        if (source.hasOwnProperty(property)) {
            dest[property] = source[property];
        }
    }
}

export function propsToLowerCase(obj, exceptionList: string[] = []) {
    for (let property in obj){
        if(obj.hasOwnProperty(property) && typeof obj[property] === 'string' && !exceptionList.includes(property)){
            obj[property] = obj[property].toLowerCase().trim();
        }
    }
}