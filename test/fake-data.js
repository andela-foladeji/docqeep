const faker = require('faker');

const fakeData = {
  accurateUser: {
    firstname: faker.name.firstName(),
    
    username: faker.internet.userName(),
    email: faker.internet.email(),
    password: faker.internet.password()
  },
  noFirstName: {
    lastname: faker.name.lastName(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    password: faker.internet.password()
  },
  noLastName: {
    firstName: faker.name.lastName(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    password: faker.internet.password()
  }
};

module.exports = fakeData;
