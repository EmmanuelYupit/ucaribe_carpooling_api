/**
 * Vehicle.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
    attributes: {
        licensePlate: {
            type: 'string',
            required: true,
            unique: true,
        },
        model: {
            type: 'string',
        },
        color: {
            type: 'string',
        },
        user: {
            model: 'User',
        },
        file: {
            model: 'UploadedFile',
        },
    },
};
