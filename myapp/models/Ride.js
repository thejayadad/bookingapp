import mongoose from "mongoose";

const RideSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        min: 4
    },
    desc: {
        type: String,
        required: true,
        min: 6
    },
    imageUrl: {
        type: [String],
        required: true,
    },
    category: {
        type: String,
        required: true,
        enum: [
            'Suv',
            'Sports',
            'Luxury',
            'Sedan',
            'Electric',
        ]
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    likes: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "User",
        default: []
    },
    username: {
        type: String,
        required: true,
      },
    extraInfo: String,
    price: Number,
    pickUp: String,
    dropOff: String,
    seats: Number
}, {timestamps: true})

export default mongoose?.models?.Ride || mongoose.model("Ride", RideSchema)