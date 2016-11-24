const faker = require('faker');

const fakeData = {
  user: {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    password: faker.internet.password()
  },
  user2: {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    password: faker.internet.password()
  },
  role1: {
    title: 'Admin'
  },
  role2: {
    title: 'User'
  },
  document: {
    title: faker.lorem.words(),
    content: faker.lorem.paragraph()
  }
};

module.exports = fakeData;
