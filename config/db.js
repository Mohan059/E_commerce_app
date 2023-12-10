import mongoose from "mongoose";
import colors from "colors";
const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URL);

    console.log(
      `Connected TO MongoDB Database ${connection.connection.host} `.bgMagenta
        .white
    );
  } catch (error) {
    console.log(`Error in MongoDB ${error}`.bgRed.white);
  }
};

export default connectDB;
