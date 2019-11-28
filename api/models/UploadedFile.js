/**
 * UploadedFile.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
    attributes: {
        filename: {
            type: 'string',
        },
        type: {
            type: 'string',
            enum: ['profile', 'vehicle'],
        },
    },
};
