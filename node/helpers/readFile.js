const fs = require('fs/promises');

const readFile = async (path) => {
  try {
    const fileJSON = await fs.readFile(path);
    const file = JSON.parse(fileJSON);
    return file;
  } catch (err) {
    console.error(err);
    return null;
  }
};

module.exports = readFile;
