const { writeFile } = require('fs/promises');

const path = './talker.json';
const writeInFile = async (file) => { 
  try {
    await writeFile(path, JSON.stringify(file));
  } catch (err) {
    return null;
  }
};

module.exports = writeInFile;