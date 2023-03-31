const { MongoMemoryServer } = require("mongodb-memory-server");
const { MongoClient } = require("mongodb");
const { db } = require("../db/database");

/** 
This test verifies that the db() function correctly establishes a connection to the MongoDB server and that the connection can be used to perform database operations without errors. 

It also tests that the code for creating and initializing the MongoDB server mock works correctly.

*/

describe("database connection", () => {
  let mongoServer;
  let client;

  beforeAll(async () => {
    mongoServer = new MongoMemoryServer();
    await mongoServer.ensureInstance();
    const mongoUri = await mongoServer.getUri();
    process.env.MONGO_URL = mongoUri;
    await db();
    client = await MongoClient.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  });

  afterAll(async () => {
    await client.close();
    await mongoServer.stop();
  });

  test("should connect to the database", async () => {
    const db = client.db(mongoServer.getDbName);
    const collections = await db.listCollections().toArray();
    expect(collections).toEqual([]);
  });
});
