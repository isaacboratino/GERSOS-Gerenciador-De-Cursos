var CursoBusiness = require('./../app/business/CursoBusiness');

var CursoController = (function () {
    function CursoController() {
    }
    CursoController.prototype.create = function (req, res) {
        try  {
            var model = req.body;
            var business = new CursoBusiness();
            business.create(model, function (error, result) {
                if (error)
                    res.status(500).send({ 'error': error });
                else
                    res.status(200).send({ 'success': 'Success' });
            });
        } catch (erro) {
            console.log('error ' + erro + ' ' + req.body.nome);
            res.status(500).send({ 'error': req.body });
        }
    };

    CursoController.prototype.update = function (req, res) {
        try  {
            var id = req.params.id;
            var model = req.body;
            var business = new CursoBusiness();

            business.update(id, model, function (error, result) {
                if (error)
                    res.status(500).send({ 'error': error });
                else
                    res.status(200).send({ 'Success': 'Suceess' });
            });
        } catch (error) {
            console.log('error ${error}');
            res.status(500).send({ 'error': error });
        }
    };

    CursoController.prototype.delete = function (req, res) {
        try  {
            var id = req.params.id;
            var business = new CursoBusiness();
            business.delete(id, function (error, result) {
                if (error)
                    res.status(500).send({ 'error': error });
                else
                    res.status(200).send({ 'Success': 'deletado com sucesso' });
            });
        } catch (error) {
            console.log('error ${error}');
            res.status(500).send({ 'error': error });
        }
    };

    CursoController.prototype.retrieve = function (req, res) {
        try  {
            var orderBy = '';
            if (req.params.orderby) {
                orderBy = req.params.orderby;
            }

            var limit = 0;
            if (req.params.limit) {
                limit = Number(req.params.limit);
            }

            var skip = 0;
            if (req.params.skip) {
                skip = Number(req.params.skip);
            }

            var business = new CursoBusiness();
            business.retrieve(orderBy, limit, skip, function (error, result) {
                if (error)
                    res.status(500).send({ 'error': error });
                else
                    res.status(200).send(result);
            });
        } catch (error) {
            console.log('error ' + error + ' stack ' + error.stack);
            res.status(500).send({ 'error': error });
        }
    };

    CursoController.prototype.findById = function (req, res) {
        try  {
            var id = req.params.id;

            var business = new CursoBusiness();
            business.findById(id, function (error, result) {
                if (error)
                    res.status(500).send({ 'error': error });
                else
                    res.status(200).send(result);
            });
        } catch (error) {
            console.log('error ${error}');
            res.status(500).send({ 'error': error });
        }
    };
    return CursoController;
})();

module.exports = CursoController;
//# sourceMappingURL=CursoController.js.map
