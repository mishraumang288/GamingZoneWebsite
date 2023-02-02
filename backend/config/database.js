import mongoose from "mongoose";

export const connectDatabase = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
    });

    console.log(`MongoDB connected : ${connection.host}`);
  } catch (error) {
    process.exit(1);
    // console.log(`Error : ${error}`);
  }
};
