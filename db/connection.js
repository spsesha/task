"use strict";

const mongoose = require("mongoose");

module.exports = {
  database: "",
  options: {
    useNewUrlParser: true,
    reconnectTries: Number.MAX_VALUE,
    reconnectInterval: 500,
    poolSize: 10,
    bufferMaxEntries: 0,
    connectTimeoutMS: 10000,
    socketTimeoutMS: 45000
  },
  // Invoke Connection with MongoDB Database
  connectDB: function() {
    mongoose.connect(this.database, this.options);
  },
  // Disconnect connection with MongoDB Database
  disconnectDB: function() {
    mongoose.disconnect(this.database);
  }
};

mongoose.connection.on("open", function() {
  console.log("Connected to Database (MongoDB) ");
});

mongoose.connection.on("error", function() {
  console.log("error in Database (MongoDB) connections");
});

// When the connection is disconnected
mongoose.connection.on("disconnected", function() {
  console.log("Mongoose default connection disconnected");
});

process.on("SIGINT", function() {
  mongoose.connection.close(function() {
    console.log("Database (MongoDB) disconnected through app termination");
    process.exit(0);
  });
});
