const express = require("express")
const app = express()
const cors = require('cors')
const consumer = require('./controllers/consumer')
const order = require('./controllers/order')

// app.use(cors())
app.use(express.json())

// CRUD operations for consumers table

app.post("/consumer", consumer.create)
app.get("/consumer", consumer.get)
app.put("/consumer/:id", consumer.put)
app.delete("/consumer/:id", consumer.delete)

// CRUD operations for orders table

app.post("/order", order.create)
app.get("/order", order.get)
app.put("/order/:id", order.put)
app.delete("/order/:id", order.delete)

module.exports = app