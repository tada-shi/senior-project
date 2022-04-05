const express = require("express");
const router = express.Router();
const activity = require("../models/activitySchema");


router.post('/post', async(req, res)=>{
    const post__activity = new activity({
        title: req.body.title,
        image: req.body.image,
        location: req.body.location,
        contact: req.body.contact,
        charge: req.body.charge,
        rating: req.body.rating
    });
    try{
        const savedActivity = await post__activity.save();
        res.json(savedActivity);
    }catch(err){
        res.json({msg : "err"});
    }
});

router.get('/find', async (req, res) => {
    try{
        const get__activity = await activity.find();
        res.json(get__activity);
    }catch(error){
        res.json({msg:error});
    }
});

module.exports = router;