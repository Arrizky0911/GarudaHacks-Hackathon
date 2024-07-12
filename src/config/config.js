import { Client, Account} from 'appwrite';

export const client = new Client();

const client = new Client();

client
    .setEndpoint(import.meta.env.ENDPOINT)
    .setProject(import.meta.env.PROJECT_ID);

const databases = new sdk.Databases(client);

export const account = new Account(client);
export { ID } from 'appwrite';

export { client, databases };