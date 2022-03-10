import faker from '@faker-js/faker/locale/pt_BR'
import { writeFileSync } from 'fs'
import { generate } from 'gerador-validador-cpf'
import { join } from 'path'


const NUMBER_OF_CLIENTS = 500
const clients = []


for (let i = 0; i < NUMBER_OF_CLIENTS; i++) {
    const seed1 =  Math.floor(Math.random() * 100) % 2
    const seed2 =  Math.floor(Math.random() * 100) % 2
    const seed3 = Math.floor(Math.random() * 100) % 2

    const name = faker.name.firstName()
    const lastname = faker.name.lastName()
    const streetName = faker.address.streetName()
    const secundaryAddress = faker.address.secondaryAddress()
    const city = faker.address.cityName()
    

    
    const client = {
        name: `${name} ${lastname}`,
        address: `${streetName}, ${secundaryAddress}, ${city}`,
        phone: faker.phone.phoneNumber(seed1 ? '(##) ####-####' : '#####-#####'),
        email: faker.internet.email(name, lastname),
        cpf: generate({ format: seed2 ? true : false}),
        code: faker.phone.phoneNumber(seed3 ? '####-##' : '#####-##'),
    }
    clients.push(client)
}

const clientsJson = JSON.stringify({ clients })
const path = join (__dirname, 'data', 'clients.json')
writeFileSync(path, clientsJson)
console.log('Done!')
