const fsPromises = require('fs').promises
const path = require('path')

const Operations = async () => {
  try {
    // create file
    await fsPromises.writeFile(
      path.join(__dirname, 'files', 'newBornFile.txt'),
      'hello there'
    )
    // edit file content
    await fsPromises.appendFile(
      path.join(__dirname, 'files', 'newBornFile.txt'),
      '\n\n content added'
    )

    // edit file name
    await fsPromises.rename(
      path.join(__dirname, 'files', 'newBornFile.txt'),
      path.join(__dirname, 'files', 'iAmOldNow.txt')
    )

    // read file
    const data = await fsPromises.readFile(
      path.join(__dirname, 'files', 'iAmOldNow.txt'),
      'utf8'
    )

    console.log(data)

    // delete file

    // fsPromises.unlink(path.join(__dirname, 'files', 'iAmOldNow.txt'))
  } catch (err) {
    console.error(err)
  }
}

Operations()
