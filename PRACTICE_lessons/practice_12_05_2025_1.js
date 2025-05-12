const fnWithErrror = () => {
    throw new Error('Some error')
}

try {
    fnWithErrror
}
catch (error) {
    console.error(error)
    console.log(error.message)
}

console.log('Continue...');