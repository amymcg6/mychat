var fs = require('fs')
var filename = process.argv[3]
    fs.readFile(filename, function(e, data) {
        if (e) return res.sendStatus(500)
        try {
            books = JSON.parse(data)
        } catch (e) {
            res.sendStatus(500)
        }
        res.json(books)
    })