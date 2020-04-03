const db = require("../database")
const Sequelize = require("sequelize")
const Consumer = require("./Consumer")

let Order = db.define("orders", {
    consumer_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    date: {
        type: Sequelize.STRING,
        allowNull: false
    },
    amount: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    current_status: {
        type: Sequelize.STRING,
        allowNull: false
            // values:["completed","ongoing"]
    },
    worker_first_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    worker_last_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    worker_email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    worker_mobile: {
        type: Sequelize.BIGINT,
        allowNull: false
    },
    rating: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    feedback: {
        type: Sequelize.TEXT,
        allowNull: true
    }
}, {
    timestamps: false
})

Consumer.hasMany(Order, { foreignKey: "consumer_id" })
Order.belongsTo(Consumer, { foreignKey: "consumer_id" })

db.sync().then(res => {
    console.log("Orders table has been created!")
})

module.exports = Order