import { getUserById } from "#service/index.js";

async function currentUser(req, res, next) {
  const userId = req.user._id;

  try {
    const user = await getUserById(userId);

    if (!user) {
      return res.status(401).json({ message: "Not authorized" });
    }

    return res.status(200).json({
      email: user.email,
      subscription: user.subscription,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
}

export { currentUser };
