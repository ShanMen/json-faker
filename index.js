import { faker } from '@faker-js/faker';

  let database = { users: []};
  const threshold = 1000;

  for (let i = 1; i<= threshold; i++) {
  database.users.push({
    id: i,
    name: faker.name.firstName() + " " + faker.name.lastName(),
    job: faker.name.jobTitle(),
    about: faker.lorem.paragraph(),
    phone: faker.phone.number(),
    userName: faker.internet.userName(),
    email: faker.internet.email(),
    salary: "$" + faker.finance.amount() + "M",
    // You can also use faker.image.people() for image
    image: "https://source.unsplash.com/1600x900/?user", 
    country: faker.address.country()
  });
 }

  console.log(JSON.stringify(database));

