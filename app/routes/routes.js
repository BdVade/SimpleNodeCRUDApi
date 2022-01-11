module.exports = (app) => {
    const metrics = require('../controllers/controller.js');

    app.post('/metrics', metrics.create);

    app.get('/metrics', metrics.find);

    app.get('/metrics/:metricId', metrics.findOne);

    app.put('/metrics/:metricId', metrics.update);

    app.delete('/metrics/:metricId', metrics.delete);
}