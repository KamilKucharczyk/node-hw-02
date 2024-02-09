import { updateContact } from "#service/index.js";

async function updateStatus(req, res, next) {
  const user = req.user;
  const { contactId } = req.params;
  if (req.body.favorite === undefined) {
    return res.status(400).json({
      message: "missing field favorite",
    });
  }

  const { favorite } = req.body;

  try {
    const result = await updateContact(contactId, { favorite }, user._id);
    if (result) {
      return res.json({
        status: "success",
        code: 200,
        data: { contact: result },
      });
    } else {
      return res.status(404).json({
        status: "error",
        code: 404,
        message: `Not found contact id: ${contactId}`,
        data: "Not found",
      });
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
}

export { updateStatus };
