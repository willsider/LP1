import { Client } from "../models/Client";
import  EmailValidator  from 'email-validator';

export const isClientValid = (client: Client) => {
    const {name, address, cpf, email, phone, code } = client

    if(!name) {
        return false
    }

    if(!address){
        return false
    }

    if(!EmailValidator.validate(email)){
        return false
    }

   if(!cpf.match(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/)) {
       return false
   }

   if(!phone.match(/^\(\d{2}\)\s\d{4}-\d{4}$/)){
       return false
   }

   if(!code.match(/^(\d{4}|\d{5})-\d{2}$/)){
    return false
}

    return true
}