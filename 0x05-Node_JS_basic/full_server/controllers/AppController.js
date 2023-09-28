/* jshint esversion: 8 */

class AppController {
  static getHomepage(req, res) {
    res.status(200).send('Hello Holeberton school');
  }
}

module.exports = AppController;
export default AppController;
