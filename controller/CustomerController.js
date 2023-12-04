
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
        if(result.nModified>0){
            res.status(201).json({status:true,message:'customer update'})
        }else {
            res.status(201).json({status:false,message:'Try again'})
        }
    }).catch(error=>{
        res.status(500).json(error)
    })
}

const deleteCustomer=(req,res)=>{
    Customer.deleteOne({nic:req.header.nic}).then(result=>{
        if(result>deleteCount>0){
            res.status(204).json({status:true,message:'customer delete'})
        }else {
            res.status(400).json({status:false,message:'Try Again'})
        }
    }).catch(error=>{
        res.status(500).json(error)
    })

}

const findAllCustomer=(req,res)=>{
        Customer.find().then(result=>{
                res.status(200).json({status:true,data:result})
        }).catch(error=>{
            res.status(500).json(error)
        })
}

module.exports={
    saveCustomer,
    findCustomer,
    updateCustomer
    ,deleteCustomer,
    findAllCustomer
}