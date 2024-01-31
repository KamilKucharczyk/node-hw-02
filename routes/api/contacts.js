// import express from "express";
// import { schemaAdd, schemaUpdate } from "../../validate/validate.js";
// import {
//   listContacts,
//   getContactById,
//   removeContact,
//   addContact,
//   updateContact,
// } from "../../models/contacts.js";

// const router = express.Router();

// router.get("/", async (req, res, next) => {
//   try {
//     const contacts = await listContacts();
//     res.status(200).json(contacts);
//   } catch (error) {
//     res.status(500).json({ message: "Internal Server Error" });
//     console.error(error);
//   }
// });

// router.get("/:contactId", async (req, res, next) => {
//   try {
//     const { contactId } = req.params;
//     const response = await getContactById(contactId);

//     if (response !== null) {
//       res.status(200).json(response);
//     } else {
//       res.status(404).json({ message: "Not found" });
//     }
//   } catch (error) {
//     res.status(500).json({ message: "Internal Server Error" });
//     console.error(error);
//   }
// });

// router.post("/", async (req, res, next) => {
//   try {
//     const body = req.body;
//     const { error } = schemaAdd.validate(body);
//     if (error) {
//       return res.status(400).json({ message: error.message });
//     }

//     const response = await addContact(body);
//     res
//       .status(200)
//       .json({ message: `Contact ${response} added successfully!` });
//   } catch (error) {
//     res.status(500).json({ message: "Internal Server Error" });
//     console.error(error);
//   }
// });

// router.delete("/:contactId", async (req, res, next) => {
//   try {
//     const { contactId } = req.params;
//     const response = await removeContact(contactId);

//     response
//       ? res.status(200).json({ message: "Contact deleted!" })
//       : res.status(404).json({ message: "Error Contact Not Found" });
//   } catch (error) {
//     res.status(500).json({ message: "Delete error" });
//     console.error(error);
//   }
// });

// router.put("/:contactId", async (req, res, next) => {
//   try {
//     const { contactId } = req.params;
//     const updatedContact = req.body;
//     const { error } = schemaUpdate.validate(updatedContact);

//     if (error) {
//       return res.status(400).json({ message: error.message });
//     }

//     const response = await updateContact(contactId, updatedContact);
//     if (response === "Contact updated!") {
//       res.status(200).json({ message: "Contact updated!" });
//     } else if (response === "Not found") {
//       res.status(404).json({ message: "Contact not found!" });
//     }
//   } catch (error) {
//     res.status(500).json({ message: "Internal Server Error" });
//     console.error(error);
//   }
// });

// export default router;

import express from "express";
import { indexContacts } from "../../controllers/contacts/indexContacts.js";
import { showContacts } from "../../controllers/contacts/showContacts.js";
import { createContacts } from "../../controllers/contacts/createContact.js";
import { updateContacts } from "../../controllers/contacts/updateContacts.js";
import { deleteContacts } from "../../controllers/contacts/deleteContacts.js";

const router = express.Router();

router.get("/", indexContacts);
router.get("/:contactId", showContacts);
router.post("/", createContacts);
router.put("/:contactId", updateContacts);
router.delete("/:contactId", deleteContacts);

export { router };
