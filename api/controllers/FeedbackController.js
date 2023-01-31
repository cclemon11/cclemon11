/**
 * FeedbackController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
const { feedback} = require("grunt");
module.exports = {

    create: async function (req, res) {

        if (req.method == "GET") return res.view('feedback/create');

        var feedback = await Feedback.create(req.body).fetch();

        return res.redirect("/");
    },

}