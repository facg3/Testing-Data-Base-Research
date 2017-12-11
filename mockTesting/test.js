const getData = require('./getData');
const test = require('tape');

test('Check Row Length:', (t) => {
  getData.getDataLength((err, res) => {
    if (err) {
      t.notOk(err);
    } else {
      t.equal(res.length, 2, 'Data Size Should Be 2.');
      t.end();
    }
  });
});


test('First Row Data:', (t) => {
  getData.getFirstRow((err, res) => {
    if (err) {
      t.notOk(err);
    } else {
      t.deepEqual(res[0], { id: 1, name: 'Matt', location: 'Gaza' },'First Row Should Equal Test.');
      t.end();
    }
  });
});

test('Last Row Data:', (t) => {
  getData.getLastRow((err, res) => {
    if (err) {
      t.notOk(err);
    } else {
      t.deepEqual(res[0], { id: 2, name: 'Eoin', location: 'London' },'Last Row Should Equal Test.');
      t.end();
    }
  });
});
