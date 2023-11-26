const mongoose = require("mongoose");

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const expenseSchema = new mongoose.Schema({
    expenseCatgory: {
        type: String,
        required: true,
    },
    expense: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    color: {
        type: String,
        default: getRandomColor(),
    },
});

const expenseDetails = mongoose.model("expenseDetails", expenseSchema);

module.exports = expenseDetails;