const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  // we use square brackets in the world of mongodb to show that it is a list of items, then we use curly braces to show how each item in the array looks like, it is not an array of objects
  createdEvents: [
    {
      // these will tell the mongoose that we want to store the objects ids of our event modal.
      type: Schema.Types.ObjectId,
      ref: "Event" // here we use the name of the model which we wanna connect each item of this list field of this model
      // ref this is important internally for mongoose because this allows mangoose to set up a relation and let mangoose know that two models are related, which will later help us fetch data because can automatically merge data
    }
  ]
});

module.exports = mongoose.model("User", userSchema);
