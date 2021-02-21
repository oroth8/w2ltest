const MongoClient = require("mongodb").MongoClient;

const MONGODB_URI =
  "mongodb+srv://owenroth:UHXAmZmBCMCd5ks@cluster0.1ctpw.mongodb.net/testDB?retryWrites=true&w=majority";
const DB_NAME = "testDB";

let cachedDb = null;

const connectToDatabase = async (uri) => {
  // we can cache the access to our database to speed things up a bit
  // (this is the only thing that is safe to cache here)
  if (cachedDb) return cachedDb;

  const client = await MongoClient.connect(uri, {
    useUnifiedTopology: true,
  });

  cachedDb = client.db(DB_NAME);

  return cachedDb;
};

const pushToDatabase = async (db, data) => {
  const formData = {
    first_name: data.first_name,
    last_name: data.last_name,
    email: data.email,
  };

  if (formData.first_name && formData.email) {
    await db.collection("SignupAccounts").insertMany([data]);
    return { statusCode: 201 };
  } else {
    return { statusCode: 422 };
  }
};

module.exports.handler = async (event, context) => {
  // otherwise the connection will never complete, since
  // we keep the DB connection alive
  context.callbackWaitsForEmptyEventLoop = false;

  const db = await connectToDatabase(MONGODB_URI);

  switch (event.httpMethod) {
    case "POST":
      return pushToDatabase(db, JSON.parse(event.body));
    default:
      return { statusCode: 400 };
  }
};
