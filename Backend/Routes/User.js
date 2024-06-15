const express = require("express");
const { User, Products } = require("../Db");
const {
  userRegistrationInputValidiation,
} = require("../MiddleWares/zodValidiation");
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());
const cors = require("cors");

const corsOptions = {
  credentials: true,
  origin: ["http://localhost:5173"], // Whitelist the domains you want to allow
};
app.use(cors(corsOptions));

app.post("/userregister", userRegistrationInputValidiation, (req, res) => {
  const { name, phone, email, password } = req.body;
  User.findOne({ email }).then((response) => {
    if (response === null) {
      User.create({ email, password, name, phone });
      res.json({ msg: `User Created Succesfully As  ${email}` });
    } else {
      res.json({ msg: `User Already Exists with email ${email}` });
    }
  });
});

app.post("/userlogin", async (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email, password }).then((response) => {
    if (response === null) {
      res.json({ msg: "Invalid Email or Password" });
    } else {
      const token = jwt.sign({ email }, process.env.JWT_SECRET);
      res.json({ token });
    }
  });
});

app.get("/newlyAdded", (req, res) => {
  Products.find({})
    .sort({ _id: -1 })
    .limit(8)
    .then((products) => res.json({ products }))
    .catch((error) => res.json({ error }));
});

//123098
app.get("/product/:_id", (req, res) => {
  const _id = req.params;
  try {
    Products.findOne({ _id }).then((product) => {
      if (!product) {
        res.json({ msg: "No such product" });
      } else {
        res.json({ product });
      }
    });
  } catch (error) {
    res.json({ error });
  }
});

app.listen(process.env.PORT || 3000, () =>
  console.log(`User PORT RUNNING AT ${process.env.PORT || 3000}`)
);
