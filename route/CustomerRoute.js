const express = require('express')

const router = express.Router();

const customerController = require('../controller/CustomerController');

router.post('/save-customer',customerController.saveCustomer);
router.put('/update-customer',customerController.updateCustomer);
router.delete('/delete-customer',customerController.deleteCustomer);
router.get('/get-customer',customerController.findCustomer);
router.get('/get-all-customer',customerController.findAllCustomer)

module.exports=router;
