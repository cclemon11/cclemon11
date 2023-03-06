/**
 * FeedbackController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

// const Feedback = require("../models/Feedback");

// const { feedback} = require("grunt");
module.exports = {

    create: async function (req, res) {

        if (req.method == "GET") return res.view('feedback/create');

        console.log("in feedback create")

        var feedback = await Feedback.create(req.body).fetch();
        await Programme.addToCollection(req.params.id, 'programmes').members(feedback.id);
        return res.redirect("/");
    },

    json: async function (req, res) {

        
        var feedbacks = await Feedback.find();

        return res.json(feedbacks);
    },



    // action - read
    read: async function (req, res) {


        var thatFeedback = await Feedback.findOne(req.params.id).populate("feedback");

        if (!thatFeedback) return res.notFound();

        // var thatProgramme = await Programme.findOne(req.params.id);

        // if (!thatProgramme) return res.notFound();

        console.log(thatFeedback)

        return res.view('programme/result', { programme: thatFeedback.feedback, feedback: thatFeedback });
    },

    getQ1: async function (req, res) {

        var result = await Programme.findOne(req.params.id).populate("programmes");

        var sum1 = 0;
        var sum2 = 0;
        var sum3 = 0;
        var sum4 = 0;
        var sum5 = 0;
        var sum6 = 0;
        var sum7 = 0;
        var sum8 = 0;
        var sum9 = 0;
        var sum10 = 0;
        var count = 0;

        result.programmes.forEach(element => {
            sum1 = sum1 + parseInt(element.q1love)
            sum2 = sum2 + parseInt(element.q2progress)
            sum3 = sum3 + parseInt(element.q3instructions)
            sum4 = sum4 + parseInt(element.q4reallife)
            sum5 = sum5 + parseInt(element.q5enjoy)
            sum6 = sum6 + parseInt(element.q6pressured)
            sum7 = sum7 + parseInt(element.q7curriculum)
            sum8 = sum8 + parseInt(element.q8difficulty)
            sum9 = sum9 + parseInt(element.q9structure)
            sum10 = sum10 + parseInt(element.q10overall)
            count++
        });

        var final = [
            {country: "q1", value: sum1/count},
            {country: "q2",  value: sum2/count},
            {country: "q3",  value: sum3/count},
            {country: "q4", value: sum4/count},
            {country: "q5", value: sum5/count},
            {country: "q6", value: sum6/count},
            {country: "q7", value: sum7/count},
            {country: "q8", value: sum8/count},
            {country: "q9", value: sum9/count},
            {country: "q10", value: sum10/count},

        ]

        return res.json(final);



    }



}