import { Client, Account } from 'appwrite';

const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('66918924003c3b9b2c43');

export const account = new Account(client);
export { ID } from 'appwrite'