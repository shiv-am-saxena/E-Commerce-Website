const express = require('express');
const router = express.Router();
const ownerModel = require('../models/owner-model');

if(process.env.NODE_ENV === 'development'){
    router.post('/create',async (req,res)=>{
        let owner = await ownerModel.find();
        if(owner.length > 0){
            return res.status(403).send("You don't have right for this");
        } else{
        const {fullName, email, password} = req.body;
        owner = await ownerModel.create({fullName, email, password});
        res.status(201).send(owner)
        }
    })
}

router.get('/', (req, res) => {
    res.send('Hello hai re baba meri tarf se');
});

module.exports = router;