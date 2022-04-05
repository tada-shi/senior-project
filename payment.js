const express = require("express");
const router = express.Router();
const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY);
const uuid = require("uuid/v4");
require('dotenv/config');

router.post("/checkout", async (req, res) => {
    // console.log("Request:", req.body); 
    let error;
    let status;
    try {
      const { payment_data, token } = req.body;
      const customer = await stripe.customers.create({
        email: token.email,
        source: token.id
      });
  
      const idempotency_key = uuid();
      const charge = await stripe.charges.create(
        {
          amount: payment_data.charge * 100,
          currency: "inr",
          customer: customer.id,
          receipt_email: token.email,
          description: `Purchased the ${payment_data.booked}`,
        },
        {
          idempotency_key
        }
      );
      console.log("Charge:", { charge });
      status = "success";
    } catch (error) {
      console.error("Error:", error);
      status = "failure";
    }
  
    res.json({ error, status });
  });

module.exports = router;