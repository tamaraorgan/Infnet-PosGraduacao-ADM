const express = require('express')
const cors = require('cors')
const router = require('./routes')

const app = express()
const port = process.env.PORT || 3330

app.use(cors())
app.use(express.json())
app.use(router)

app.listen(port, () => {
  console.log(`ᕦ(ツ)ᕤ Server starded on port ${port}!`);
})

module.exports = app