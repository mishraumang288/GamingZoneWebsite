import mongoose from "mongoose";

const Schema = mongoose.Schema;

const contactSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
    },
    phonenumber: {
      type: Number,
      required: true,
      trim: true,
      minlength: 3,
    },
  },
  {
    timestamps: true,
  }
);

const ContactUs = mongoose.model("ContactUs", contactSchema);

export default ContactUs;
