const db = require('../models/index.js')

module.exports = {
  async searchStackToName(stack) {
    const stacks = await db.Stack.findOne({
      where: {
        stack
      }
    })
    return stacks
  }
}
