import { writeFileSync } from 'fs'
import { join } from 'path'

import { clients } from './data/clients.json'
import { Client, getClient } from './models/Client'
import { isClientValid } from './utils/client_utils'


const validClient: Client[] = []

clients.forEach(c => { 
    const client = getClient(c)
 
    if (isClientValid(client)) {
        validClient.push(client)

    }
})

const clientsJson = JSON.stringify({ clients: validClient })

const path = join(__dirname, 'data', 'valid_clients.json') 
writeFileSync(path, clientsJson)
console.log(`${validClient.length} Clientes Validos`)
console.log('mal feito desfeito')