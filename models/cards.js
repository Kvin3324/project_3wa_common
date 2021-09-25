const { Schema, Types } = require('mongoose');
const mongoose = require('mongoose');
const deepPopulate = require('mongoose-deep-populate')(mongoose);

const macros = require('../macros/index');

const cardsSchemas = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true,
        maxlength: 250
    },
    startAt: {
        type: Date,
        required: true,
    },
    mood: {
        type: [
            {
                type: Number,
                enum() {
                    return macros.common.moods.keys()
                }
            }
        ],
        required: true
    },
    author: {
        type: Types.ObjectId,
        ref: 'Users',
        required: true
    },
    members: {
        type: [
            {
                type: Types.ObjectId,
                ref: 'Users'
            }
        ],
        required: true
    },
    position: {
        type: {
            lat: {
                type: Number,
                required: true
            },
            long: {
                type: Number,
                required: true
            }
        },
        required: true
    }
});

cardsSchemas.plugin(deepPopulate);

module.exports = cardsSchemas;