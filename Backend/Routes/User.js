const express = require("express");
const { User, Products } = require("../Db");
const otpGenerator = require("otp-generator");

const nodemailer = require("nodemailer");

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

app.post("/sendotp", async (req, res) => {
  try {
    const { email } = req.body;
    const otp = otpGenerator.generate(6, {
      upperCaseAlphabets: false,
      specialChars: false,
    });
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    const transport = await transporter.sendMail({
      from: '"no-reply" <noreply@gmial.com>', // sender address
      to: email,
      subject: "VERIFY YOU OTP ",
      html: `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body {
              font-family: Arial, sans-serif;
              margin: 0;
              padding: 0;
              background-color: #f4f4f4;
            }
            .container {
              width: 100%;
              max-width: 600px;
              margin: 0 auto;
              background-color: #ffffff;
              padding: 20px;
              box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            }
            .header {
              background-color: #007BFF;
              color: white;
              padding: 10px;
              text-align: center;
            }
            .content {
              padding: 20px;
            }
            .footer {
              background-color: #28A745;
              color: white;
              text-align: center;
              padding: 10px;
              margin-top: 20px;
            }
            .otp {
              font-size: 24px;
              font-weight: bold;
              color: #FF5733;
            }
            .section {
              margin-bottom: 20px;
            }
            .section h2 {
              color: #343A40;
            }
            .section p {
              color: #555555;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>VERIFY YOU OTP</h1>
            </div>
            <div class="content">
              <div class="section">
                <h2>OTP Verification</h2>
                <p>Your  OTP is <span class="otp">${otp}</span></p>
              </div>
              
              <div class="section">
                <h2>Contact Us</h2>
                <p>If you have any questions or need further assistance, feel free to contact us at ${process.env.EMAIL}</p>
              </div>
            </div>
            <div class="footer">
              <p>&copy; 2024 Pratik Dhimal. All rights reserved.</p>
            </div>
          </div>
        </body>
      </html>
      `,
    });
    res.json({otp});
  } catch (error) {
    res.json({
      msg: "Something went wrong please try agian later ",
    });
  }
});

app.listen(process.env.PORT || 3000, () =>
  console.log(`User PORT RUNNING AT ${process.env.PORT || 3000}`)
);
