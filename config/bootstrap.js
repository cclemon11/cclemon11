/**
 * Seed Function
 * (sails.config.bootstrap)
 *
 * A function that runs just before your Sails app gets lifted.
 * > Need more flexibility?  You can also create a hook.
 *
 * For more information on seeding your app with fake data, check out:
 * https://sailsjs.com/config/bootstrap
 */


const { programme } = require("grunt");
module.exports.bootstrap = async function() {

  // By convention, this is a good place to set up fake data during development.
  //
  // For example:
  // ```
  // // Set up fake development data (or if we already have some, avast)
  // if (await User.count() > 0) {
  //   return;
  // }
  //
  // await User.createEach([
  //   { emailAddress: 'ry@example.com', fullName: 'Ryan Dahl', },
  //   { emailAddress: 'rachael@example.com', fullName: 'Rachael Shaw', },
  //   // etc.
  // ]);
  // ```

  if (await Programme.count() == 0) {
    await Programme.createEach([
      { facultyname: "Faculty of Arts", programmename: "Bachelor of Arts (Hons) (Chinese Language and Literature / Creative and Professional Writing / English Language and Literature / Humanities / Translation)", enrollment: "50", imageurl:"https://lh6.ggpht.com/HlgucZ0ylJAfZgusynnUwxNIgIp5htNhShF559x3dRXiuy_UdP3UQVLYW6c=s1200",id: 1 },
      { facultyname: "Faculty of Science", programmename: "Bachelor of Science (Hons)", enrollment: "30", imageurl:"",id: 2 }

    ]);

 }

};
