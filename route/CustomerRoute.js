const express = require('express')

const router = express.Router();

const customerController = require('../controller/CustomerController');
const verifyToken = require('../middleware/AuthMiddleWare');

router.post('/save-customer',verifyToken,customerController.saveCustomer);
router.put('/update-customer',verifyToken,customerController.updateCustomer);
router.delete('/delete-customer',verifyToken,customerController.deleteCustomer);
router.get('/get-customer',verifyToken,customerController.findCustomer);
router.get('/get-all-customer',verifyToken,customerController.findAllCustomer)

module.exports=router;
