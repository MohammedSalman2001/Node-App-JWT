
const Customer=require('../model/CustomerSchema')

const saveCustomer=(req,res)=>{
    const tempCustomer=new Customer({
        nic:req.body.nic,
        name:req.body.name,
        address:req.body.address,
        salary:req.body.salary
    });

    tempCustomer.save().then(result=>{
        res.status(200).json({status:true,message:'customer saved'})
    }).catch(error=>{
        res.status(500).json(error)
    })
}

const findCustomer=(req,res)=>{
    Customer.findOne({nic:req.header.nic}).then(result=>{
        if(result===null){
            res.status(404).json({status:false,message:'customer not found!'})
        }else {
            res.status(200).json({status:true,data:result})
        }
    })

}

const updateCustomer=(req,res)=>{
    Customer.updateOne({nic:req.header.nic},{
        $set:{
            name:req.body.name,
            address:req.body.address,
            salary:req.body.salary
        }
    }).then(result=>{
        if(result){
            res.status(201).json({status:true,message:'customer update'})
        }else {
            res.status(201).json({status:false,message:'Try again'})
        }
    }).catch(error=>{
        res.status(500).json(error)
    })
}

const deleteCustomer=(req,res)=>{

}

const findAllCustomer=(req,res)=>{

}