/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  //'/': { view: 'pages/homepage' },


  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/

   'GET /programme/create': 'ProgrammeController.create',
   'POST /programme/create': 'ProgrammeController.create',

   'GET /': 'ProgrammeController.list',
   'GET /programme':  'ProgrammeController.list',
   'GET /programme/list': 'ProgrammeController.list',
   'GET /programme/json': 'ProgrammeController.json',

   'GET /programme/search': 'ProgrammeController.search',
   'GET /programme/read/:id': 'ProgrammeController.read',
   'GET /programme/feedback/:id': 'ProgrammeController.feedback',
   'GET /programme/visualAnalysis': 'ProgrammeController.visualAnalysis',
   'GET /programme/:id/worldcloud': 'ProgrammeController.worldcloud',
   'GET /programme/worldcloudApi/:id': 'ProgrammeController.worldcloudApi',
   'GET /programme/wholeAnalysis': 'ProgrammeController.wholeAnalysis',
   'GET /programme/:id/visualAnalysisPerProg': 'ProgrammeController.visualAnalysisPerProg',
   'GET /programme/:id/feelingBarChart': 'ProgrammeController.feelingBarChart',
   'GET /programme/:id/curriculumBarChart': 'ProgrammeController.curriculumBarChart',
   'GET /programme/:id/careerBarChart': 'ProgrammeController.careerBarChart',
   'DELETE /programme/:id': 'ProgrammeController.delete',

   'GET /programme/update/:id': 'ProgrammeController.update',
   'POST /programme/update/:id': 'ProgrammeController.update',

   'GET /programme/evaluation/:id': 'FeedbackController.create',
   'POST /programme/evaluation/:id': 'FeedbackController.create',

   'GET /programme/partitionedBarChart': 'ProgrammeController.partitionedBarChart',
   'GET /programme/partitionedBarChartBusiness': 'ProgrammeController.partitionedBarChartBusiness',

   'GET /feedbacks': 'FeedbackController.json',
   'GET /feedback/:id': 'FeedbackController.read',

   'GET /programme': 'ProgrammeController.adminlist',
   'GET /programme/admin': 'ProgrammeController.adminlist',
   'GET /programme/:id/feedbacks': 'ProgrammeController.populate',

   'GET /feedback/getQ1/:id' : 'FeedbackController.getQ1',

   'GET /feedback/getQ1Q10/:id' : 'FeedbackController.getQ1Q10',
   'GET /feedback/getQ11Q18/:id' : 'FeedbackController.getQ11Q18',
   'GET /feedback/getQ19Q24/:id' : 'FeedbackController.getQ19Q24',

   'GET /programme/json': 'ProgrammeController.populate',

   'GET /user': 'UserController.login',
   'GET /user/login': 'UserController.login',
   'POST /user/login': 'UserController.login',
   'POST /user/logout': 'UserController.logout',

   'GET /data/BarChart' : 'ProgrammeController.newChart',
   'GET /data/BarChartBusiness' : 'ProgrammeController.newChartBusiness',
  //  'GET /programme/wholeAnalysis' : 'ProgrammeController.chartdataBarProgramme'

  'GET /data/chartforsnsd' : 'ProgrammeController.charforsnsd',
   'GET /data/chart' : 'ProgrammeController.chartdata',
   'GET /data/:id/chartPerProg' : 'ProgrammeController.chartdataPerProgramme',

}
