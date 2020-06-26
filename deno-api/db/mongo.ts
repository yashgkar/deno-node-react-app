import { init, MongoClient } from "https://deno.land/x/mongo@v0.8.0/mod.ts";

const client = new MongoClient();
client.connectWithUri("mongodb://127.0.0.1:27017/todos");

const db = client.database("todos");
const mong = db.collection("tasks");

export default mong;