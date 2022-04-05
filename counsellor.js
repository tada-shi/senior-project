const express = require("express");
const router = express.Router();
const counsellor = require("../models/counsellorSchema");


router.post('/post', async(req, res)=>{
    const post__counsellor = new counsellor({
        name: req.body.name,
        description: req.body.description,
        license: req.body.license,
        image: req.body.image,
        quote: req.body.quote,
        contact: req.body.contact,
        charge: req.body.charge
    });
    try{
        const savedcounsellor = await post__counsellor.save();
        res.json(savedcounsellor);
    }catch(err){
        res.json({msg : err});
    }
});

router.get('/find', async (req, res) => {
    try{
        const get__counsellor = await counsellor.find();
        res.json(get__counsellor);
    }catch(error){
        res.json({msg:error});
    }
});

module.exports = router;