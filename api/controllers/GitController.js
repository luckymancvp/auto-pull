/**
 * GitController
 *
 * @description :: Server-side logic for managing gits
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {



  /**
   * `GitController.pull()`
   */
  pull: function (req, res) {
    /* Script path */
    var path = '/root/pull.sh';
    var exec = require('child_process').exec;
    exec(path, res.json({
      status: 'Done'
    }));
  }
};

