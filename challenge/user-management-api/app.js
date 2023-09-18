const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');


router.post('/register', UserController.registerUser);


router.post('/login', UserController.loginUser);


router.get('/users', UserController.getAllUsers);

router.get('/users/:id', UserController.getUserById);


router.put('/users/:id', UserController.updateUserById);

module.exports = router;


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
