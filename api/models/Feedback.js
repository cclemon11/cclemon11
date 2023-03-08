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
        studentID:{
            type: "string"
        },
        q1love: {
            type: "number"
        },
        q2related: {
            type: "number"
        },
        q3catchup: {
            type: "number"
        },
        q4progress: {
            type: "number"
        },
        q5enjoy: {
            type: "number"
        },
        q6pressured: {
            type: "number"
        },
        q7recommend: {
            type: "number"
        },
        q8wholeperson: {
            type: "number"
        },
        q9choose: {
            type: "number"
        },
        q10joyful: {
            type: "number"
        },

        q11instructions: {
            type: "number"
        },

        q12difficulty: {
            type: "number"
        },
        q13adapt: {
            type: "number"
        },
        q14wellstructured: {
            type: "number"
        },

        q15resources: {
            type: "number"
        },
        q16support: {
            type: "number"
        },
        q16support: {
            type: "number"
        },
        q17facilities: {
            type: "number"
        },
        q18overall: {
            type: "number"
        },
        q19connect: {
            type: "number"
        },
        q20internship: {
            type: "number"
        },
        q21help: {
            type: "number"
        },
        q22knowledge: {
            type: "number"
        },
        q23career: {
            type: "number"
        },
        q24useful: {
            type: "number"
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
