import { addContact } from "../../models/contacts.js";
import { schemaAdd } from "../../validate/validate.js";

async function createContacts(req, res, next) {
  try {
    const result = schemaAdd.validate(req.body);
    if (result.error) {
      return res.status(400).json({ message: result.error.message });
    }

    const { name, email, phone } = req.body;
    const newContact = await addContact({ name, email, phone });

    if (!newContact) {
      res.status(400).json({ message: "Contact already exist" });
    } else {
      res.status(201).json(newContact);
    }
  } catch (error) {
    res.status(500).json(`An error occured: ${error}`);
  }
}

export { createContacts };
