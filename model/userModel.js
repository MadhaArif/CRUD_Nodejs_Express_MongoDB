import bodyParser from "body-parser"; // Import body-parser if needed
import mongoose from "mongoose";

// Define the schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
});

// Create and export the model
export default mongoose.model("User", userSchema);
