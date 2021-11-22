function temParam(param) {
    return process.argv.indexOf(param) !== -1
}

if (temParam('--producao')) {
    console.log('producao foi passado')
} else {
    console.log('nada foi passado')
}