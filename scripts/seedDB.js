const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file displays rodeo events based on the town you choose

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/rodeos",
  {
    useMongoClient: true
  }
);
const RodeoEvents = [
{
  name: "Grand National Rodeo",
  location: "Daly City, CA",
  events:
    "Bareback Bronc Riding, Bull Riding, Cowgirl Barrel Racing, Junior Barrel Racing, Open Barrel Race, Saddle Bronc Riding, Steer Wrestling, Team Roping",
  date: "October 20th - October 21st",
  contact: ""
},

{
  name: "Houston Livestock Show and Rodeo",
  location: "Houston, TX",
  events:
    "Bareback Bronc Riding, Bull Riding, Cowgirl Barrel Racing, Junior Barrel Racing, Open Barrel Race, Saddle Bronc Riding, Steer Wrestling, Team Roping",
  date: "October 20th - October 21st",
  contact: ""
},

{
  name: "National Finals Rodeo",
  location: "Las Vegas, NV",
  events:
    "Bareback Bronc Riding, Bull Riding, Cowgirl Barrel Racing, Junior Barrel Racing, Open Barrel Race, Saddle Bronc Riding, Steer Wrestling, Team Roping",
  date: "October 20th - October 21st",
  contact: ""
},

{
  name: "San Antonio Stock Show & Rodeo",
  location: "San Antonio, TX",
  events:
    "Bareback Bronc Riding, Bull Riding, Cowgirl Barrel Racing, Junior Barrel Racing, Open Barrel Race, Saddle Bronc Riding, Steer Wrestling, Team Roping",
  date: "October 20th - October 21st",
  contact: ""
},

{
  name: "National Western Stock Show",
  location: "Denver, CO",
  events:
    "Bareback Bronc Riding, Bull Riding, Cowgirl Barrel Racing, Junior Barrel Racing, Open Barrel Race, Saddle Bronc Riding, Steer Wrestling, Team Roping",
  date: "October 20th - October 21st",
  contact: ""
},

{
  name: "World's Oldest Rodeo",
  location: "Prescott, AZ",
  events:
    "Bareback Bronc Riding, Bull Riding, Cowgirl Barrel Racing, Junior Barrel Racing, Open Barrel Race, Saddle Bronc Riding, Steer Wrestling, Team Roping",
  date: "October 20th - October 21st",
  contact: ""
},

{
  name: "Greeley Stampede",
  location: "Greeley, CO",
  events:
    "Bareback Bronc Riding, Bull Riding, Cowgirl Barrel Racing, Junior Barrel Racing, Open Barrel Race, Saddle Bronc Riding, Steer Wrestling, Team Roping",
  date: "October 20th - October 21st",
  contact: ""
},

{
  name: "Cheyenne Frontier Days",
  location: "Cheyenne, WY",
  events:
    "Bareback Bronc Riding, Bull Riding, Cowgirl Barrel Racing, Junior Barrel Racing, Open Barrel Race, Saddle Bronc Riding, Steer Wrestling, Team Roping",
  date: "October 20th - October 21st",
  contact: ""
},

{
  name: "Ellensberg Rodeo",
  location: "Ellensberg, WA",
  events:
    "Bareback Bronc Riding, Bull Riding, Cowgirl Barrel Racing, Junior Barrel Racing, Open Barrel Race, Saddle Bronc Riding, Steer Wrestling, Team Roping",
  date: "October 20th - October 21st",
  contact: ""
}

];

db.Rodeo
  .remove({})
  .then(() => db.Rodeo.collection.insertMany(RodeoEvents))
  .then(data => {
    console.log(data.insertedIds.length + " rodeo events here!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });