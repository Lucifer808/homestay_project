const catchAsyncErrors = require("../middleware/catchAsyncError");

const stripe = require("stripe")(
  "sk_test_51JjQqEIORC7wUZgFUM8JVaTXtnWkmcR5E2Yq6MxDuLfaz7UgUYrcikpM4nebDD91QPE5LMaGbecQhU8ij0I5vnbH004vF8WukT"
);
exports.processPayment = catchAsyncErrors(async (req, res, next) => {
  const myPayment = await stripe.paymentIntents.create({
    amount: req.body.amount,
    currency: "vnd",
    metadata: {
      company: "Ecommerce",
    },
  });

  res
    .status(200)
    .json({ success: true, client_secret: myPayment.client_secret });
});

exports.sendStripeApiKey = catchAsyncErrors(async (req, res, next) => {
  res.status(200).json({ stripeApiKey: process.env.STRIPE_API_KEY });
});
