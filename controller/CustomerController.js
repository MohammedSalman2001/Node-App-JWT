
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

}

const updateCustomer=(req,res)=>{

}

const deleteCustomer=(req,res)=>{

}

const findAllCustomer=(req,res)=>{

}