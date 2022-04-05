const express = require("express");
const router = express.Router();
const booking = require("../models/bookingSchema");


router.post('/post', async(req, res)=>{
    const post__booking = new booking({
        booking_id: req.body.booking_id,
        booked: req.body.booked,
        name: req.body.name,
        email: req.body.email,
        date: req.body.date,
        time: req.body.time
    });
    try{
        const savedbooking = await post__booking.save();
        res.json(savedbooking);
    }catch(err){
        res.json({msg : err});
        console.log(err);
    }
});

router.get('/find', async (req, res) => {
    try{
        const get__booking = await booking.find();
        res.json(get__booking);
    }catch(error){
        res.json({msg:error});
    }
});

module.exports = router;