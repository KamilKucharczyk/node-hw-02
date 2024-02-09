import fs from "fs/promises";

const isAvailable = (path) => {
  return fs
    .access(path)
    .then(() => true)
    .catch(() => false);
};

const createFolderIfNotExist = async (folder) => {
  if (!(await isAvailable(folder))) {
    await fs.mkdir(folder);
  }
};

export { isAccessible, createFolderIfNotExist };
