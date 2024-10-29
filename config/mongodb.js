import mongoose from "mongoose";


const connect = (url) => {
    mongoose.set("strictQuery", true);

    mongoose.connect(url)
        .then(() => console.log("MongoDB connected"))
        .catch((err) => console.log(err))
}

export default connect;

//db super user and pword; useradepojuololade2020 pword:j0k2iy9xXcraCpHn