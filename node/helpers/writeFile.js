const { writeFile } = require('fs/promises');

const writeInFile = async (path, file) => { 
  try {
    await writeFile(path, JSON.stringify(file));
  } catch (err) {
    console.error(err.message)
    return null;
  }
};

module.exports = writeInFile;