import { Client, Account} from 'appwrite';

export const client = new Client();

const client = new Client();

client
    .setEndpoint(import.meta.env.ENDPOINT)
    .setProject(import.meta.env.PROJECT_ID);



export const account = new Account(client);

export { client, databases };