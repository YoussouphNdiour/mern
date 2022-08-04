import dotenv from "dotenv";
import { MongoClient, ServerApiVersion } from 'mongodb';

dotenv.config();

const uri = "mongodb+srv://youssouph:g7s2aH9MgAZbNVX@fullstack-mevn.771oyqc.mongodb.net/?retryWrites=true&w=majority";
const DATABASE = "blog";

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 })
module.exports = {
   client: (callback) => {
      client.connect((err, db) => {
         if (err || !db) { return false }
         callback(db.db(DATABASE))
      });
   }
}
