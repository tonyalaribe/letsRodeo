const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const rodeoSchema = new Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  events: String,
  date: { type: String, required: true },
  contact: String
});

const Rodeo = mongoose.model("Rodeo", rodeoSchema);

module.exports = Rodeo;
