const { model } = require('mongoose');

const sessionsSchema = require('./sessions');
const usersSchema = require('./users')
const cardsSchemas = require('./cards');

module.exports = {
    Sessions: model('Sessions', sessionsSchema),
    Users: model('Users', usersSchema),
    Cards: model('Cards', cardsSchemas)
}