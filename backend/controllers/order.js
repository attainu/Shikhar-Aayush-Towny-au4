const orderController = {}
const Model = require('./../Models/Order')

orderController.create = async(req, res) => {
    try {
        const { body } = req
        let order = await Model.create({ consumer_id: body.consumer_id, date: body.date, amount: body.amount, current_status: body.current_status, worker_first_name: body.worker_first_name, worker_last_name: body.worker_last_name, worker_email: body.worker_email, worker_mobile: body.worker_mobile, rating: body.rating, feedback: body.feedback })
        res.send(order)
    } catch (error) {
        console.log(error)
        res.send("error =>>>>", error)
    }
}

orderController.get = async(req, res) => {
    try {
        let orders = await Model.findAll()
        res.send(orders)
    } catch (error) {
        console.log(error)
        res.send("error =>>>>", error)
    }
}

orderController.put = async(req, res) => {
    try {
        const { body, params } = req
        let order = await Model.update({ consumer_id: body.consumer_id, date: body.date, amount: body.amount, current_status: body.current_status, worker_first_name: body.worker_first_name, worker_last_name: body.worker_last_name, worker_email: body.worker_email, worker_mobile: worker_body.mobile, rating: body.rating, feedback: body.feedback }, { where: { id: params.id } })
        res.send(order)
    } catch (error) {
        console.log(error)
        res.send("error =>>>>", error)
    }
}

orderController.delete = async(req, res) => {
    try {
        const { params } = req
        await Model.destroy({ where: { id: params.id } })
        res.send("Deleted successfully")
    } catch (error) {
        console.log(error)
        res.send("error =>>>>", error)
    }
}

module.exports = orderController