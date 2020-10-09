const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseShema = new Schema(
  {
    username: { type: String, required: true },
    description: { type: String, required: true },
    duration: { type: Number, required: true },
    date: { type: Date, required: true },
  },

  {
    timestamps: true,
  }
);

//add api endpoint routes to let server perform crud operation

const Exercise = mongoose.model("Exercise", exerciseShema);

module.exports = Exercise;
