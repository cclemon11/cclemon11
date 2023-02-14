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
        programmeobjectives: "The Bachelor of Business Administration (Hons) Programme is an integrated combination of general education and high quality business studies",
        programmewebsite: "https://admissions.hkbu.edu.hk/en/programme-detail.html?id=13",
        credits: 244,
        duration: 4,
        imageurl: "https://presspay.ng/news/wp-content/uploads/2022/08/Business-la-gi-e1623418238104.jpeg"

      },
      {
        facultyname: "School of Chinese Medicine",
        programmename: "Bachelor of Pharmacy (Hons) in Chinese Medicine",
        enrollment: 80,
        programmeobjectives: "Cultivate and enhance students’ competence in applying Chinese medicine theories and methods in clinical practice as well as in the research and development of Chinese medicine",
        programmewebsite: "https://admissions.hkbu.edu.hk/en/programme-detail.html?id=243",
        credits: 244,
        duration: 6,
        imageurl: "https://images.chinahighlights.com/allpicture/2020/02/a85b1cd2578e48a8b46b6ef5_cut_800x500_61.jpg"

      },
      {
        facultyname: "Faculty of Science",
        programmename: "Bachelor of Science(Hons) in Business Computing and Data Analytics",
        enrollment: 15,
        programmeobjectives: "Provide good data-driven problem-solving skills and an analytical and creative mind for data analytics solution design, management and planning in business organizations",
        programmewebsite: "https://bcda.comp.hkbu.edu.hk/",
        credits: 128,
        duration: 4,
        imageurl: "https://www.simplilearn.com/ice9/free_resources_article_thumb/Data-Science-vs.-Big-Data-vs.jpg"

      },
      {
        facultyname: "Faculty of Arts",
        programmename: "Bachelor of Arts (Hons) / Bachelor of Music (Hons) (Music / Creative Industries)",
        enrollment: 43,
        programmeobjectives: "Nurture aspiring musicians who will acquire the general knowledge and practical skills needed for a variety of careers, and to provide students with opportunities to personal and intellectual development",
        programmewebsite: "https://mus.hkbu.edu.hk/web/",
        credits: 128,
        duration: 4,
        imageurl: "https://www.hkco.org/uploads/images/source/55e003ff34d841.jpg"

      },
      {
        facultyname: "Faculty of Arts",
        programmename: "Bachelor of Arts (Hons) (Chinese Language and Literature / Creative and Professional Writing / English Language and Literature / Humanities / Translation)",
        enrollment: 35,
        programmeobjectives: "To provide students with a vigorous curriculum to develop creative and professional writing skills in Chinese and English;",
        programmewebsite: "https://artsbu.hkbu.edu.hk/study/prospective/scholarships/faculty-wide",
        credits: 128,
        duration: 4,
        imageurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBoKKajccYnR4Bib0Nb0I3R_7jm-uNdOwZYQ&usqp=CAU"

      },
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
