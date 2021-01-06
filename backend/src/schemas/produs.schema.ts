import * as mongoose from 'mongoose';

export const ProdusSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    code: {
        type: String,
        required: true
    },

    weight: {
        type: Number,
        required: true
    },

    price: {
        type: Number,
        required: true
    },

    color: {
        type: String,
        enum : ['red', 'blue', 'green', 'yellow', 'orange', 'purple', 'black', 'white', 'other'],
        default: 'other',
        required: true
    },

    isDeleted: {
        type: Boolean,
        default: false,
        required: false
    },
});