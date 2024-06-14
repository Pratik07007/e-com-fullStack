const zod = require("zod");

const adminRegistrationInputValidiation = (req, res, next) => {
  const body = req.body;
  const adminSchema = zod.object({
    email: zod.string().email(),
    password: zod
      .string()
      .min(8, "Password must be at least 8 characters long")
      .max(32, "Password cannot be more than 32 characters long")
      .regex(/[A-Z]/, "Password must contain at least one uppercase character")
      .regex(/[0-9]/, "Password must contain at least one number")
      .regex(
        /[~!@#$%^&*()_+=\-}{[\]|';/.,<>?":}]/,
        "Password must contain at least one special character"
      ),
  });

  const response = adminSchema.safeParse(body);
  if (response.success) {
    next();
  } else {
    res.json({ msg: response.error.issues[0].message });
  }
};

const userRegistrationInputValidiation = (req, res,next) => {
  const body = req.body;
  const userSchema = zod.object({
    name: zod.string(),
    email: zod.string().email(),
    phone: zod.string(),
    password: zod
      .string()
      .min(8, "Password must be at least 8 characters long")
      .max(32, "Password cannot be more than 32 characters long")
      .regex(/[A-Z]/, "Password must contain at least one uppercase character")
      .regex(/[0-9]/, "Password must contain at least one number")
      .regex(
        /[~!@#$%^&*()_+=\-}{[\]|';/.,<>?":}]/,
        "Password must contain at least one special character"
      ),
  });

  const response = userSchema.safeParse(body);
  if (response.success) {
    next();
  } else {
    res.json({ msg: response.error.issues[0].message });
  }
};

module.exports = {
  adminRegistrationInputValidiation,
  userRegistrationInputValidiation,
};
