
const UserSchema=require('../model/UserSchema')
  const bcrypt=  require('bcrypt');




const signup= async (req,res)=>{
        UserSchema.findOne({username:req.body.username}).then(result=>{
            if(result==null){
                //add new record
                bcrypt.hash(req.body.password, 10, function(err, hash) {

                    if(err){
                        res.status(500).json({message:'something went wrong'})
                    }
                    // Store hash in your password DB.
                    const user=UserSchema({
                        username:req.body.username,
                        fullName:req.body.fullName,
                        password:hash
                    });

                    user.save().then(seveData=>{
                        res.status(200).json({message:'user saved!'})
                    }).catch(err=>{
                        res.status(500).json(err)
                    })

                });


            }else {
                res.status(409).json({message:'email already exist'})
            }
        }).catch(error=>{
            res.status(500).json(error)
        })
}

const login= async (req,res)=>{
    UserSchema.findOne({username:req.body.username}).then(result=>{

        if(result===null){
            return res.status(404).json({message:'user name not found!'})
        }else{

            bcrypt.compare(req.body.password, result.password, function(err, result) {
                if(err){
                    return res.status(500).j(err)

                }
                 if(result){
                    return res.status(200).json({token:'token data'})

                }else{
                    return res.status(401).json({message:'password incrote'})
                }

            });

        }
    }).catch(err=>{
        res.status(500).json(err)
    })
}

module.exports={
    signup,login
}