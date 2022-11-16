const fs = require('fs')

// create dir if does not exist
if (!fs.existsSync('./newDir')) {
  fs.mkdir('./newDir', (err) => {
    if (err) throw err
    console.log('newDir created')
  })
}

// remove dir if exist
if (fs.existsSync('./newDir')) {
  fs.rmdir('./newDir', (err) => {
    if (err) throw err
    console.log('newDir removed')
  })
}
