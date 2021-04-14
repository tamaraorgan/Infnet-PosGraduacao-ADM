const express = require('express')
const cors = require('cors')
const router = require('./routers')

const app = express()
const port = process.env.PORT || 3333

app.use(cors())
app.use(express.json())
app.use(router)

app.listen(port, () => {
  console.log(`ᕦ(ツ)ᕤ Server starded on port ${port}!`);
})

module.exports = app