/**
 * Feedback.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

    attributes: {

        //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
        //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
        //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝
        name: {
            type: "string"
        },

        email: {
            type: "string"
        },
        q1love: {
            type: "number"
        },
        q2progress: {
            type: "number"
        },
        q3instructions: {
            type: "number"
        },
        q4reallife: {
            type: "number"
        },
        q5enjoy: {
            type: "number"
        },
        q6pressured: {
            type: "number"
        },
        q7curriculum: {
            type: "number"
        },
        q8difficulty: {
            type: "number"
        },
        q9structure: {
            type: "number"
        },
        q10overall: {
            type: "number"
        },

        rate: {
            type: "number"
        },

        satisfied: {
            type: "string"
        },

        career: {
            type: "string"
        },

        difficulty: {
            type: "string"
        },

        support: {
            type: "string"
        },

        recommend: {
            type: "string"
        },

        feel: {
            type: "string"
        },

        share: {
            type: "string"
        },

        comments: {
            type: "string"
        },
        //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
        //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
        //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


        //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
        //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
        //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝
        feedback: {
            model: 'Programme'
        }


    },

};
