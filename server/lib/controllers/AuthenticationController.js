var AuthenticationBusiness = require('./../app/business/AuthenticationBusiness');

var TokenUtilities = require('./../config/middlewares/TokenUtilities');

var AuthenticationController = (function () {
    function AuthenticationController() {
    }
    AuthenticationController.prototype.authenticate = function (req, res) {
        try  {
            var model = req.body;
            console.log(model);
            var business = new AuthenticationBusiness();
            business.authenticate(model.user, model.password, function (error, result) {
                if (error)
                    res.status(500).send({ 'error': error });
                else {
                    TokenUtilities.generateToken(result[0], res);
                }
            });
        } catch (erro) {
            console.log('error ' + erro + ' ' + req.body.nome);
            res.status(500).send({ 'error': req.body });
        }
    };
    return AuthenticationController;
})();

module.exports = AuthenticationController;
//# sourceMappingURL=AuthenticationController.js.map
