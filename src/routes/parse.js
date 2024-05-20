const expressFileUpload = require(express-fileUpload);

// Middleware code added 
app.use(expressFileUpload());

// We will use this POST API to parse CSV File
app.post('/parseCSV', (req,res) => {
// We can retrieve the files as (req.files) using express-fileUpload middleware
const file = req.files.file;

if (!file || Object.keys(req.files).length === 0) {
    return res.status(400).send('No files were uploaded.');
}

// To save this file in your current directory

// File Path 
const fileUploadPath = __dirname + '../csvFiles/' + file.name;

// Use the mv() method to place the file somewhere on your server
// Your file will be saved in csvFiles folder in your current directory 
// with the same file name as your upload file

  file.mv(fileUploadPath, function(err) {
    if (err)
      return res.status(500).send(err);
    
    else
      return res.json({msg:'File uploaded!', fileUploadPath});
  });
})