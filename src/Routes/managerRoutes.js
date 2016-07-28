var managerCtrl = require('./../Controllers/managerCtrl');

module.exports = function(app) {

    app.route('/api/managers').get(managerCtrl.list);
    app.route('/api/managers/:id').get(managerCtrl.list);
    app.route('/api/managers').post(managerCtrl.create);
};