const express = require('express');
const faker = require('faker');

const app = express();
const port = 3000;

// Clase Usuario
class Usuario {
  constructor() {
    this._id = faker.datatype.uuid();
    this.firstName = faker.name.firstName();
    this.lastName = faker.name.lastName();
    this.phoneNumber = faker.phone.phoneNumber();
    this.email = faker.internet.email();
    this.password = faker.internet.password();
  }
}

// Clase Empresa
class Empresa {
  constructor() {
    this._id = faker.datatype.uuid();
    this.name = faker.company.companyName();
    this.address = {
      street: faker.address.streetAddress(),
      city: faker.address.city(),
      state: faker.address.state(),
      zipCode: faker.address.zipCode(),
      country: faker.address.country()
    };
  }
}

// Ruta para generar un nuevo usuario
app.get('/api/users/new', (req, res) => {
  const newUser = new Usuario();
  res.json(newUser);
});

// Ruta para generar una nueva empresa
app.get('/api/companies/new', (req, res) => {
  const newCompany = new Empresa();
  res.json(newCompany);
});

// Ruta para generar un nuevo usuario y una nueva empresa
app.get('/api/user/company', (req, res) => {
  const newUser = new Usuario();
  const newCompany = new Empresa();
  res.json({ user: newUser, company: newCompany });
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor ejecutándose en http://localhost:${port}`);
});
