const pool = require('../db.js')

module.exports =
  (answer_id) => {
    return new Promise((resolve, reject) => {

      let sql = `UPDATE answer SET helpfulness = helpfulness + 1 WHERE answer_id = ${answer_id};`

      pool.query(sql, (err, results) => {
        if (err) {
          return reject(err);
        }
        resolve(results);
      });
    });
  }