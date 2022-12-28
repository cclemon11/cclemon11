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

module.exports.bootstrap = async function () {

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
      {
        facultyname: "School of Business",
        programmename: "Bachelor of Business Administration (Hons)",
        enrollment: 100,
        imageurl: "https://presspay.ng/news/wp-content/uploads/2022/08/Business-la-gi-e1623418238104.jpeg"



      }
    ]);
  }

  return generateUsers();

  async function generateUsers() {

    if (await User.count() > 0) {
      return;
    }

    var hashedPassword = await sails.helpers.passwords.hashPassword('123456');

    await User.createEach([
      { username: "admin", password: hashedPassword, role: "admin" },
      { username: "admin2", password: hashedPassword, role: "admin" },
      { username: "facutlymember", password: hashedPassword, role: "facultymember" },
      { username: "facutlymember2", password: hashedPassword, role: "facultymember" },
      { username: "executivemanager", password: hashedPassword, role: "executivemanager" },
      { username: "student1", password: hashedPassword, role: "student" },
      { username: "student2", password: hashedPassword, role: "student" },
      { username: "non-member", password: hashedPassword, role: "nonMember" },
      // etc.
    ]);


  }
};
