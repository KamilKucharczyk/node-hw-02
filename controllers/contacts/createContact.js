import { createContact, getContactByName } from "#service/index.js";

async function createContacts(req, res, next) {
  const owner = user._id;
  const user = req.user;
  const { name, email, phone, favorite } = req.body;
  try {
    const result = await createContact({ name, email, phone, favorite, owner });
    return res.status(201).json({
      status: "success",
      code: 201,
      data: { contact: result },
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
}
export { createContacts };
