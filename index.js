'use strict'

const order = require('./lib/order')

const product = require('./lib/product')

const inbound = require('./lib/inbound')

const unshelve = require('./lib/unshelve')

const channel = require('./lib/channel')

const courierOrder = require('./lib/courierOrder')

const pickingOrder = require('./lib/pickingOrder')

const shelve = require('./lib/shelve')

module.exports = {
  order,
  product,
  inbound,
  unshelve,
  channel,
  courierOrder,
  pickingOrder,
  shelve
}