import fs from "fs/promises";
import path from "path";
import { v4 as uuidv4 } from "uuid";

const contactsPath = path.join(process.cwd(), "/models/contacts.json");

const listContacts = async () => {
  try {
    const fileContent = await fs.readFile(contactsPath, "utf-8");
    const contacts = JSON.parse(fileContent);
    return contacts;
  } catch (error) {
    return JSON.parse(error.message);
  }
};

const getContactById = async (contactId) => {
  try {
    const fileContent = await fs.readFile(contactsPath, "utf-8");
    const contacts = JSON.parse(fileContent);
    const contact = contacts.find((el) => el.id === contactId);
    return contact;
  } catch (error) {
    return JSON.parse(error.message);
  }
};

const removeContact = async (contactId) => {
  try {
    const fileContent = await fs.readFile(contactsPath, "utf-8");
    const contacts = JSON.parse(fileContent);
    const index = contacts.findIndex((contact) => contact.id === contactId);

    if (index >= 0) {
      contacts.splice(index, 1);
      const updatedContactsJson = JSON.stringify(contacts, null, 2);
      fs.writeFile(contactsPath, updatedContactsJson, "utf-8");
      return true;
    } else {
      return false;
    }
  } catch (error) {
    return console.log(error.message);
  }
};

const addContact = async (body) => {
  const { name, email, phone } = body;
  const contacts = await listContacts();
  if (name && email && phone) {
    const newContact = { id: uuidv4(), name, email, phone };
    contacts.push(newContact);
    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
    return true;
  }
  return false;
};

const updateContact = async (contactId, body) => {
  const contacts = await listContacts();
  const indexToUpdate = contacts.findIndex(
    (contact) => contact.id === contactId
  );
  if (indexToUpdate === -1) {
    return "Not found";
  } else {
    contacts[indexToUpdate] = { ...contacts[indexToUpdate], ...body };
    fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
    return "Contact updated!";
  }
};

export {
  getContactById,
  addContact,
  removeContact,
  updateContact,
  listContacts,
};
