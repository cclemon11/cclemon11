/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
const { programme } = require("grunt");
module.exports = {

    login: async function (req, res) {

        if (req.method == "GET") return res.view('user/login');

        if (!req.body.username) return res.status(401).json("Please enter the username");
        if (!req.body.password) return res.status(401).json("Please enter the password");

        var user = await User.findOne({ username: req.body.username });

        if (!user) return res.status(401).json("User not found");

        await sails.helpers.passwords.checkPassword(req.body.password, user.password)
            .tolerate('incorrect', function (error) {
                req.body.password = false
            });

        if (!req.body.password) return res.status(401).json("Wrong Password");

        if (!req.session.username) {
            req.session.uId = user.id;
            req.session.username = user.username;
            req.session.role = user.role;
            return res.json(user);
        }

        // Start a new session for the new login user
        req.session.regenerate(function (err) {

            if (err) return res.serverError(err);
            req.session.uId = user.id;
            req.session.username = user.username;
            req.session.role = user.role;
            return res.json(user);
        });
    },

    logout: async function (req, res) {

        req.session.destroy(function (err) {

            if (err) return res.serverError(err);

            return res.redirect("/");
        });
    },


};
