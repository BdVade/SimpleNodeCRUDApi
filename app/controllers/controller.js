const Metric = require('../models/models');



exports.create = (req, res) => {
    console.log(req)
    if(!req.body){
        return res.status(400).send({message:"metric Data cannot be empty"});
    }

    const metric = new Metric({
        carSpeed: req.body.carSpeed || 0,
        longitude: req.body.longitude,
        latitude:req.body.latitude,
        fuelConsumed: req.body.fuelConsumed
    });

    metric.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the metric"
            });
    });

};


exports.find = (req, res) => {
    Metric.find()
        .then(metrics => {
            res.send(metrics);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the metric"
            });
    });

};

exports.findOne = (req, res) => {
    Metric.findById(req.params.metricId)
        .then(metric => {
            if (!metric) {
                return res.status(404).send({
                    message: "Metric not found with id " + req.params.metricId
                });
            }
            res.send(metric);
        }).catch(err => {
        if (err.kind === "ObjectId") {
            return res.status(404).send({
                message: "Metric not found with id " + req.params.metricId
            });
        }
        return res.status(500).send({
            message: "Error retrieving metric with id " + req.params.metricId
        });


    })
};

exports.update = (req, res) => {
    if(!req.body){
        return res.status(400).send({message:"metric Data cannot be empty"});
    }


    Metric.findByIdAndUpdate(req.params.metricId, {
        carSpeed: req.body.carSpeed,
        longitude: req.body.longitude,
        latitude:req.body.latitude,
        fuelConsumed: req.body.fuelConsumed
    }, {new: true})
        .then(metric => {

            if (!metric) {
                return res.status(404).send({
                    message: "Metric not found with id " + req.params.metricId
                });
            };
            res.send(metric);
            }).catch(err => {
        console.log(err)
        if (err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Note not found with id " + req.params.noteId
            });
        };
        return res.status(500).send({
            message: "Error updating metric with id " + req.params.metricId
        });

    })
};

exports.delete = (req, res) => {
    Metric.findByIdAndRemove(req.params.metricId)
        .then(metric => {
            if (!metric) {
                return res.status(404).send({
                    message: "Metric not found with id " + req.params.metricId
                });
            }
            res.send({message: "Metric deleted successfully"});
        }).catch(err => {
        if (err.kind === "ObjectId" || err.name === "NotFound") {
            return res.status(404).send({
                message: "Metric not found with id " + req.params.metricId
            });
        }
        return res.status(500).send({
            message: "Could not delete metric with id " + req.params.metricId
        });


    })
};

