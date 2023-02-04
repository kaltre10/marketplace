const router = require('express').Router();
const authController = require('./controllers/authController');
const productController = require('./controllers/productController');
const userController = require('./controllers/userController');
const messageController = require('./controllers/messageController');
const isAuth = require('./middlewares/isAuth');

router.get('/', (req, res) => {
    try {
        res.send('Server is running')
    } catch (error) {
        console.log(error)
    }
})

router.use('/api/auth', authController);
router.use('/api/products', productController);
router.use('/api/user', userController);
router.use('/api/messages', messageController);

module.exports = router;