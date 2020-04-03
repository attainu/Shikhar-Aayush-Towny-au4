const consumerController = {}
const Model = require('./../Models/Consumer')

consumerController.create = async(req, res) => {
    try {
        const { body } = req
        let consumer = await Model.create({ first_name: body.first_name, last_name: body.last_name, email: body.email, mobile: body.mobile, password: body.password, address: body.address, booking_status: body.booking_status })
        res.send(consumer)
    } catch (error) {
        console.log(error)
        res.send("error =>>>>", error)
    }
}

consumerController.get = async(req, res) => {
    try {
        let consumers = await Model.findAll()
        res.send(consumers)
    } catch (error) {
        console.log(error)
        res.send("error =>>>>", error)
    }
}

consumerController.put = async(req, res) => {
    try {
        const { body, params } = req
        let consumer = await Model.update({ first_name: body.first_name, last_name: body.last_name, email: body.email, mobile: body.mobile, password: body.password, address: body.address, booking_status: body.booking_status }, { where: { id: params.id } })
        res.send(consumer)
    } catch (error) {
        console.log(error)
        res.send("error =>>>>", error)
    }
}

consumerController.delete = async(req, res) => {
    try {
        const { params } = req
        await Model.destroy({ where: { id: params.id } })
        res.send("Deleted successfully")
    } catch (error) {
        console.log(error)
        res.send("error =>>>>", error)
    }
}

module.exports = consumerController