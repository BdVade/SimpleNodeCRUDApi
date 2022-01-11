const mongoose = require('mongoose');

const MetricSchema = mongoose.Schema({
    carSpeed : Number,
    longitude: mongoose.Types.Decimal128,
    latitude: mongoose.Types.Decimal128,
    fuelConsumed: Number,
}, {timestamps: true});

module.exports = mongoose.model('Metric', MetricSchema)