import { Client, Account} from 'appwrite';

export const client = new Client();

const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('6690a882003e05374d7b');

const databases = new sdk.Databases(client);

export const account = new Account(client);
export { ID } from 'appwrite';
