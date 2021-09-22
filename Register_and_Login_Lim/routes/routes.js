// import module `express`
const express = require('express');
const multer = require('multer');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'Public/uploads')
    },
    filename: (req, file, cb) => {
        const { originalname } = file;
        // or 
        // uuid, or fieldname
        cb(null, file.fieldname + '.png');
    }
})
const upload = multer({ storage }); // or simply { dest: 'uploads/' }
//const upload = multer({dest:'uploads/'});
// import controllers
const controller = require('../controllers/controller.js');
const registerController = require('../controllers/registerController.js');
const loginController = require('../controllers/loginController.js');
const validation = require('../helper/validation.js');
const logoutController = require('../controllers/logoutController.js');
const app = express();

app.get('/', controller.getIndex);
//app.get('/:username/home', controller.getIndexUser);

app.get('/search', controller.search);
//app.get('/:username/search', controller.searchUser);

app.get('/Register', registerController.getRegister);
app.post('/Register', validation.registerValidation(), registerController.postRegister);
app.get('/getCheckUsername', registerController.getCheckUsername);


app.get('/Login', loginController.getLogin);
app.post('/Login', validation.loginValidation(), loginController.postLogin);




app.get('/logout', logoutController.getLogOut);

module.exports = app;