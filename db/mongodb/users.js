import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    name: { type: String},
    email: { type: String, unique: true, required: true },
    password: { type: String},
    role: { type: String, enum: ['admin', 'customer'] },
    address: { type: mongoose.Schema.Types.ObjectId, ref: 'Address' },
  });


  const User = mongoose.model("User", userSchema);

  export default User;