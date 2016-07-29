var managerCtrl = require('./../Controllers/managerCtrl');

module.exports = function (app) {

    app.route('/api/managers').get(managerCtrl.list);
    app.route('/api/managers/:id').get(managerCtrl.listById);
    app.route('/api/managers').post(managerCtrl.create);
    // app.route('/api/managers').put(managerCtrl.update);
    app.route('/api/managers/:id').delete(managerCtrl.remove);
};