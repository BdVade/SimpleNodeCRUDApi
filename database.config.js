// const username = process.argv[2].split('=')[1]
// console.log(`Hello, ${username}`)
require('dotenv').config()
module.exports = {
    url: `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.nruun.mongodb.net/Fixbot?retryWrites=true&w=majority`,
    serverport: 3000
}