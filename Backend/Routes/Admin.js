const express = require("express");
const { Admin, Products } = require("../Db");
const {
  adminRegistrationInputValidiation,
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

app.post("/adminregister", adminRegistrationInputValidiation, (req, res) => {
  const { email, password } = req.body;
  Admin.findOne({ email }).then((response) => {
    if (response === null) {
      Admin.create({ email, password }).then(() =>
        res
          .json({ msg: `Admin Created Succesfully As  ${email}` })
          .catch(() => res.json({ msg: "Something Went Wrong" }))
      );
    } else {
      res.json({ msg: `Admin Already Exists with email ${email}` });
    }
  });
});

app.post("/adminlogin", async (req, res) => {
  const { email, password } = req.body;
  Admin.findOne({ email, password }).then((response) => {
    if (response === null) {
      res.json({ msg: "Invalid Email or Password" });
    } else {
      const token = jwt.sign({ email }, process.env.JWT_SECRET);
      res.json({ token });
    }
  });
});

app.post("/addproducts", (req, res) => {
  const { discountedPrice, originalPrice, name, desc, images, category } =
    req.body;
  const token = req.headers.authorization;
  try {
    const { email } = jwt.verify(token, process.env.JWT_SECRET);
    Admin.findOne({ email }).then((response) => {
      if (response === null) {
        res.json({
          msg: "We are unable to verify your credentials please login as admin to continue",
        });
      } else {
        Products.findOne({ discountedPrice, name })
          .then((resposne) => {
            if (resposne === null) {
              Products.create({
                name,
                originalPrice,
                discountedPrice,
                desc,
                images,
                addedBy: email,
                category,
              }).then((product) => {
                res.json({ product });
              });
            } else {
              res.json({ msg: "This Product Already exists" });
            }
          })
          .catch(() => res.json({ msg: "Something went wrong" }));
      }
    });
  } catch (error) {
    res.json({
      msg: "We are unable to verify your credentials please login as admin to continue",
    });
  }
});

app.get("/allproducts", (req, res) => {
  Products.find({})
    .then((products) => res.json({ products }))
    .catch(() => res.json({ msg: "Something went wrong" }));
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

app.get("/productcategory", (req, res) => {
  const { category } = req.query;
  try {
    Products.find({ category }).then((products) => {
      if (products.length === 0) {
        res.json({ msg: "No such category" });
      } else {
        res.json({ products });
      }
    });
  } catch (error) {
    res.json({ error });
  }
});

app.listen(process.env.PORT || 3000, () =>
  console.log(`Admin PORT RUNNING AT ${process.env.PORT || 3000}`)
);
