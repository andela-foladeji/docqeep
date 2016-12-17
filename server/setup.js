import db from './models';

db.sequelize.sync({ force: true })
  .then(() => {
    console.log('synced');
  }).catch((error) => {
    console.log(error);
  });
