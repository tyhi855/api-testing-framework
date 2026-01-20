const processENV = process.env.TEST_ENV
const env = processENV || 'dev'
console.log('Test environment is: ' + env)

const config = {
    apiUrl: 'https://conduit-api.bondaracademy.com/api',
    userEmail: 'hu.quiet.seven@mycloaked.id',
    userPassword: 'Slum%sonic!aegis6'
}

if(env === 'qa'){
    config.userEmail = '',
    config.userPassword = ''
}
if(env === 'prod'){
    config.userEmail = '',
    config.userPassword = ''
}


export {config}