const { faker } = require('@faker-js/faker');


const createUser = () => {
    const newUser = {
    password:faker.internet.password(),
    email:faker.internet.email(),
    phoneNumber:faker.phone.number(),
    lastName: faker.person.lastName(),
    firstName:faker.person.firstName(),
    _id:faker.string.uuid(),

    };
    return newUser
};
    
const newFakeUser = createUser();
// console.log(newFakeUser);


module.exports = newFakeUser;
_id:faker.string.uuid()
name:faker.company.name()
address:{
street:faker.location.street()
city:faker.location.city()
state:faker.location.state()
zipCode:faker.location.zipCode()
country:faker.location.country()
}