/* jshint esversion: 8 */

import AppController from '../controllers/AppController';
import StudentsController from '../controllers/StudentsController';

const linkRoutes = (app) => {
  app.get('/', AppController.getHomepage);
  app.get('/students', StudentsController.getAllStudents);
  app.get('/students/:major', StudentsController.getAllStudentsByMajor);
};

module.exports = linkRoutes;
export default linkRoutes;
