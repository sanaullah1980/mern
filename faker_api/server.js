const express = require('express');
const dotenv = require('dotenv');
const faker = require('faker');

//load env vars
dotenv.config({path: './config/config.env'});

const createRandomUser = () => {
    return {
      userId: faker.datatype.uuid(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      phoneNumber: faker.phone.phoneNumber()
    };
}  

const createRandomCompany = () => {
    return {
      userId: faker.datatype.uuid(),
      name: faker.company.companyName(),
      address: {
        street: faker.address.streetName(),
        city: faker.address.city(),
        state: faker.address.state(),
        county: faker.address.county(),
        zipcode: faker.address.zipCode()
      }
    };
} 

const app = express();
const PORT = process.env.PORT || 5000;

app.get('/api/users/new', (req, res) =>{
    res.json(createRandomUser());
})

app.get('/api/companies/new', (req, res) =>{
    res.json(createRandomCompany());
})

app.get('/api/user/company', (req, res) =>{
    res.json({user: createRandomUser(), company: createRandomCompany()});
})

app.listen(PORT, 
    console.log(`Server running in ${process.env.NODE_ENV} mode in port ${PORT} `));
