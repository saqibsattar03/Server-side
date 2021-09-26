const { router } = require('../../config/expressconfig')
const stripe = require('../../config/stripe')

// Fetch the Checkout Session to display the JSON result on the success page
const checkoutSession = router.post('/execute-payment', async (req, res) => {
  const { paymentMethod } = req.body
  const paymentIntent = await stripe.paymentIntents.create({
    amount: 2000,
    currency: 'aud',
    payment_method: paymentMethod.paymentMethod.id,
    confirm: true
  })

  res.json({ message: 'success', paymentIntent })
})

module.exports = checkoutSession