const { mongoose, mongo } = require("mongoose");
const { boolean } = require("zod");

//Database connection
try {
  mongoose.connect(process.env.DB_STRING);
  console.log("Database Connection Succesful");
} catch (error) {
  console.log(`Error Connectinng to Database${error}`);
}

//Defining Schema
const adminSchema = mongoose.Schema({
  email: String,
  password: String,
});

const userSchema = mongoose.Schema({
  name: String,
  phone: String,
  email: String,
  password: String,
  isVerified: { type: Boolean, default: false },
  otp: { type: String, default: "" },
});

const allProductsSchema = mongoose.Schema({
  name: String,
  originalPrice: Number,
  discountedPrice: Number,
  desc: String,
  category: String,
  images: [String],
  addedBy: String,
});

const contactUsSchema = mongoose.Schema({
  name: String,
  email: String,
  phone: Number,
  msg: String,
});

//Making Modals

const Admin = mongoose.model("admins", adminSchema);
const User = mongoose.model("user", userSchema);
const Products = mongoose.model("products", allProductsSchema);
const ContactUs = mongoose.model("contacts", contactUsSchema);

module.exports = { Admin, User, Products, ContactUs };
