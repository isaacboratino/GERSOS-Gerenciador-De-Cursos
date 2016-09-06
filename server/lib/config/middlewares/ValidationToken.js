var Constants = require('./../../config/constants/Constants');

var jwt = require('jsonwebtoken');

var ValidationToken = (function () {
    function ValidationToken() {
    }
    ValidationToken.validate = function (req, res, next) {
        console.log('rfrf tg');

        // check header or url parameters or post parameters for token
        var token = req.body.token || req.query.token || req.headers['x-access-token'];

        console.log('token  ' + token);

        // decode token
        if (token) {
            console.log('token  1' + token);

            // verifies secret and checks exp
            jwt.verify(token, Constants.TOKEN_SECRET_STRING, function (err, decoded) {
                if (err) {
                    return res.json({ success: false, message: 'Failed to authenticate token.' });
                } else {
                    // if everything is good, save to request for use in other routes
                    req.decoded = decoded;
                    next();
                }
            });
        } else {
            console.log('token  2' + token);

            // if there is no token
            // return an error
            return res.status(403).send({
                success: false,
                message: 'No token provided.'
            });
        }
    };
    return ValidationToken;
})();

Object.seal(ValidationToken);
module.exports = ValidationToken;
//# sourceMappingURL=ValidationToken.js.map
