var playerCtrl = require('./../Controllers/playerCtrl');

module.exports = function (app) {

    app.route('/api/player').get(playerCtrl.list);
    app.route('/api/player/:id').get(playerCtrl.listById);
    app.route('/api/player').post(playerCtrl.create);
    app.route('/api/player').put(playerCtrl.update);
    app.route('/api/player').delete(playerCtrl.remove);
};