const mongoose = require("mongoose");

const ProducstSchema = mongoose.Schema({
  name: { type: String, require: true },
  price: { type: Number, require: true },
});

module.exports = mongoose.model("Products", ProducstSchema);
