var mongoose = require("mongoose");

var appointmentSchema = new mongoose.Schema({
    name : String,
    email : String,
    phonenumber : String,
    state  : String
});

module.exports = new mongoose.model("Appointment",appointmentSchema);