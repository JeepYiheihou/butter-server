const express = require("express")
const router = express.Router();
const mediaFilesController = require("../controllers/media_files_controller")

const multer = require("multer")
const path = require("path")

router.get("/backgroundImage/", mediaFilesController.getBackgroundImage)

router.get("/:fileName", mediaFilesController.get)

const filePath = path.resolve(__dirname + `../../../files/images/`)
const storage = multer.diskStorage({ 
    destination: function(req, file, cb) {
        cb(null, filePath); 
    },
    filename: function(req, file, cb) {
        cb(null, req.params.fileName)
    }
});
  
const upload = multer({
    storage: storage,
});
router.post("/:fileName", upload.single("mediaFile"), (req, res, next) => {
    res.json({key : "yes!"});
});

module.exports = router
