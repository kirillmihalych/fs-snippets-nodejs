const fs = require('fs')

// create read stream
const rs = fs.createReadStream('./files/iAmOldNow.txt', { encoding: 'utf8' })

//create write stream
const ws = fs.createWriteStream('./files/streamFile.txt')

//pipe stream
rs.pipe(ws)
