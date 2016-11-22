const faker = require('faker');

const fakeData = {
  accurateUser: {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    password: faker.internet.password()
  },
  noFirstName: {
    lastName: faker.name.lastName(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    password: faker.internet.password()
  },
  noLastName: {
    firstName: faker.name.lastName(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    password: faker.internet.password()
  },
  newRole: {
    title: faker.lorem.words()
  },
  document: {
    title: faker.lorem.words(),
    content: faker.lorem.paragraph()
  }
};

module.exports = fakeData;
