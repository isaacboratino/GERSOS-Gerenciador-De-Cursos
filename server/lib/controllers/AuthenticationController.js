var Constants = require('./../config/constants/Constants');

var AuthenticationBusiness = require('./../app/business/AuthenticationBusiness');

var jwt = require('jsonwebtoken');

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
                    console.log(result[0]);
                    var user = result[0];

                    if (!user) {
                        res.status(500).send('Falha ao autenticar');
                    } else if (user) {
                        var token = jwt.sign(user, Constants.TOKEN_SECRET_STRING, {
                            expiresIn: '1h'
                        });
                        res.status(200).send(token);
                    }
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
