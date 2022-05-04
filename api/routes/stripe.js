const router = require("express").Router();
KEY =
  "sk_test_51KobxvSAL0UsDZ8HfjAQthsijLNgMMqCdlwO4TlmgjMjwCcIMqh5cptNTXQXajkAtXqm5AaUG8oxngPIddaCSom100HIfiaOOT";
const stripe = require("stripe")(KEY);

router.post("/payment", (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        console.log(stripeErr);
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});

module.exports = router;
