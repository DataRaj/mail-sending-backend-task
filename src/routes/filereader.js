const parse = require('csv-parse').parse
const os = require('os')
const multer  = require('multer')
const upload = multer({ dest: os.tmpdir() })

app.post('/read', upload.single('file'), (req, res) => {
    const file = req.file
  
    const data = fs.readFileSync(file.path)
    parse(data, (err, records) => {
      if (err) {
        console.error(err)
        return res.status(400).json({success: false, message: 'An error occurred'})
      }
  
      return res.json({data: records})
    })
  })