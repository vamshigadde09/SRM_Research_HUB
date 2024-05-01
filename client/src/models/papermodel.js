const mongoose = require("mongoose");

const paperSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "title is required"],
  },
  description: {
    type: String,
    required: [true, "description is required"],
  },
  teacherId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Teacher",
    required: [true, "teacherId is required"],
  },
});

const paperModel = mongoose.model("Paper", paperSchema);

module.exports = paperModel;
