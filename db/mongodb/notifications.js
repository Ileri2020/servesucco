import mongoose from "mongoose";


const notificationSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'Users' },
    message: { type: String},
    read: { type: Boolean, default: false },
  });


const Notification = mongoose.model("Notification", notificationSchema);

export default Notification;