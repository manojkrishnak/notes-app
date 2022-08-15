const mongoose = require("mongoose");

async function connectToDB() {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(
      `Mongo db connected successfully to ${connection.connection.host}`
    );
  } catch (error) {
    console.error(`Mongo db connection failed because of ${error}`);
  }
}

module.exports = connectToDB;
