'use strict'
const Factory = use('Factory')
const Hash = use('Hash')

Factory.blueprint('App/Models/User', async (faker) => {
  return {
    username: faker.username(),
    email: faker.email(),
    password: await Hash.make(faker.password())
  }
})

Factory.blueprint('App/Models/Post', (faker) => {
  return {
    title: faker.sentence(),
    description: faker.paragraph()
  }
})