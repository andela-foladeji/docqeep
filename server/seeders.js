const db = require('./models');

db.role.bulkCreate([{
  title: 'Admin'
},
{
  title: 'Regular'
}]);
