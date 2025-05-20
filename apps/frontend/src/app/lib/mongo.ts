import { MongoClient, Db } from 'mongodb';

const uri = process.env.MONGODB_URI;
if (!uri) throw new Error("MONGODB_URI is not defined in environment variables");
const options = {};

let client: MongoClient;


if (!global._mongoClientPromise) {
  client = new MongoClient(uri, options);
  global._mongoClientPromise = client.connect();
}
const clientPromise: Promise<MongoClient> = global._mongoClientPromise;

export async function getMongoDb(dbName?: string): Promise<Db> {
  const client = await clientPromise;
  return client.db(dbName);
}

// For TypeScript global
declare global {
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}
