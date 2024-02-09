import { updateUser } from "#service/index.js";

async function logOut(req, res, next) {
  const { _id } = req.user;

  try {
    await updateUser(_id, { token: null });

    return res.status(204).end();
  } catch (error) {
    next(error);
  }
}

export { logOut };
