const { data } = require('../mock-data')

const { cart } = data.objects

// #1
function get(object, path, defaultValue = {}) {
    const keys = Array.isArray(path) ? path : path.split('.')

    const result = keys.reduce((res, key) => {
        if (!res[key]) {
            return defaultValue
        }

        return res[key]
    }, object)

    return result
}

// #2
function getProp(object, keys, defaultVal) {
    keys = Array.isArray(keys) ? keys : keys.split('.')
    object = object[keys[0]]
    if (object && keys.length > 1) {
        return getProp(object, keys.slice(1))
    }
    return object === undefined ? defaultVal : object
}

// console.log(get(cart, ['mobile', 'memory', 'max'], 'default'))
// console.log(getProp(cart, 'mobile.memory.max'))
