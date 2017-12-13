const connect = require('./dbconnections');

const getDataLength = (cb) => {
  connect.query('SELECT * FROM mockTesting', (err, res) => {
    if (err) {
      cb(err);
    }
    cb(null, res.rows);
  });
};

const getFirstRow = (cb) => {
  connect.query('SELECT * FROM mockTesting LIMIT 1', (err, res) => {
    if (err) {
      cb(err);
    }
    cb(null, res.rows);
  });
}

const getLastRow = (cb) => {
  connect.query('SELECT * FROM mockTesting ORDER BY id DESC LIMIT 1', (err, res) => {
    if (err) {
      cb(err);
    }
    cb(null, res.rows);
  });
};

module.exports = {
  getDataLength,
  getLastRow,
  getFirstRow
};
