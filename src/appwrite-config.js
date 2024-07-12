import { Client, Account } from 'appwrite';

const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('6690f52b002f84a069f3');

export const account = new Account(client);

export default client