const { MongoClient } = require("mongodb");

// Connection URI
const uri =
  "mongodb+srv://<username>:<password>@<cluster-url>/<database-name>?retryWrites=true&w=majority";

// Create a new MongoClient
const client = new MongoClient(uri);

async function main() {
  try {
    // Connect to the MongoDB cluster
    await client.connect();
    console.log("Connected to the database");
    const db = client.db("authjs"); // Replace <database-name> with your database name
    const collection = db.collection("assembly"); // Replace <collection-name> with your collection name

    // Insert multiple documents
    const result = await collection.insertMany(documents);

    console.log(`${result.insertedCount} documents inserted.`);
    // Call your insert method here
  } catch (e) {
    console.error("Error inserting documents:", e);
    console.error(e);
  } finally {
    // Close the connection when you're done
    await client.close();
    console.log("Connection closed");
  }
}

main();
const documents = [
  { name: "Document 1", value: 100 },
  { name: "Document 2", value: 200 },
  { name: "Document 3", value: 300 },
];
