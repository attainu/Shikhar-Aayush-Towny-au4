const db = require("../database")
const Sequelize = require("sequelize")

let Consumer = db.define("consumers", {
    first_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    last_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    mobile: {
        type: Sequelize.BIGINT,
        allowNull: false,
        unique: true
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    address: {
        type: Sequelize.STRING,
        allowNull: false
    },
    booking_status: {
        type: Sequelize.STRING,
        allowNull: true
            // values: ["none,""pending", "accepted", "rejected"]
    }
}, {
    timestamps: false
})

db.sync().then(res => {
    console.log("Consumers table has been created!")
})

module.exports = Consumer