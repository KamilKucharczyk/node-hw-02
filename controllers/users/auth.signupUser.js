import { createUser, getUserByEmail } from "#service/index.js";

async function signUp(req, res, next) {
  const { email, password } = req.body;
  const user = await getUserByEmail(email);

  if (user) {
    return res.status(409).json({ message: "Email is already in use" });
  }

  if (!password || !email) {
    return res.status(400).json({ message: "Email and password required" });
  }

  try {
    const result = await createUser({ email, password });

    return res.status(201).json({
      user: {
        email: result.email,
        subscription: result.subscription,
      },
    });
  } catch (err) {
    console.error(err);
    next(err);
  }
}

export { signUp };
