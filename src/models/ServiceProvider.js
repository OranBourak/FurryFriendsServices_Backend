
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// NOTE: date related - consider setting date format for the schema instead of String
const ServiceProviderSchema = new Schema(
    {
        name: {type: String, required: [true, "No user name given!"]},
        email: {type: String, unique: [true, "Email already exists"], required: [true, "No email given!"]},
        password: {type: String, required: [true, "No password given!"]},
        country: {type: String, default: "Israel"},
        image: {type: String, default: "https://cdn.pixabay.com/photo/2017/11/10/05/48/user-2935527_960_720.png"},
        phone: {
            type: String,
            maxLength: 10,
            minLength: 10,
            required: [true, "No phone given!"],
        },
        question: {
            type: String,
            required: [true, "No security question provided!"],
        },
        answer: {type: String, required: [true, "No security answer provided!"]},
        city: {type: String, required: [true, "No city given!"]},
        gender: {
            type: String,
            enum: ["Male", "Female", "Other"],
            required: [true, "No gender given!"],
        },
        bio: {type: String, default: ""},
        typeOfService: {
            type: String,
            enum: ["Dog Walker", "Veterinarian", "Dog Groomer"],
            required: [true, "No type of service given!"],
        },
        reviews: [{type: Schema.Types.ObjectId, ref: "Review", default: []}],
        averageRating: {type: Number, default: 0},
        blockedDates: [{type: String, default: []}],
        blockedTimeSlots: [{type: Schema.Types.ObjectId, ref: "BlockedTimeSlot", default: []}],
        appointments: [{type: Schema.Types.ObjectId, ref: "Appointment", default: []}],
        appointmentTypes: [{type: Schema.Types.ObjectId, ref: "AppointmentType", default: []}],


    },
    {versionKey: false, timestamps: true},
);

module.exports = mongoose.model("ServiceProvider", ServiceProviderSchema);
