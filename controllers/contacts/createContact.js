import { createContact, getContactByName } from "#service/index.js";

async function createContact(req, res, next) {
  const { name, email, phone, favorite } = req.body;
  try {
    const result = await createContact({ name, email, phone, favorite });
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
export { createContact };
