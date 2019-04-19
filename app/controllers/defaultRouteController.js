let generateMessage = (req, res) => {
    res.send('Run: "http://127.0.0.1:3000/read": to read app/files/read.txt file     &   "http://127.0.0.1:3000/write/[your data to write]: to write into app/files/write.txt file"');
}

// export controller
module.exports = {
    generateMessage: generateMessage
}