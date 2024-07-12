import { Client, Account } from 'appwrite';

const client = new Client()
    .setEndpoint(import.meta.env.ENDPOINT) 
    .setProject(import.meta.env.PROJECT_ID);    

export const account = new Account(client);

export default client;