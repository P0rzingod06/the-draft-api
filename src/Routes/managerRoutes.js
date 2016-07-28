var managerCtrl = require('./../Controllers/managerCtrl');

module.exports = function(app) {

    app.route('/api/managers').get(managerCtrl.find);
    app.route('/api/managers/:id').get(managerCtrl.findById);
    app.route('/api/managers').post(managerCtrl.create);
};