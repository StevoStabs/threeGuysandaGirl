var path = require("path");

//set up routes
function routes() {
    app.get('/', function (req, res) {
        res.redirect('frontpage.html');
    });
    app.get('/reservation', function (req, res) {S
        res.redirect('reserve.html');s
    });

    app.get('/tables', function (req, res) {
        res.redirect('/tables.html');
    });

    app.get('/admin', function (req, res) {
        res.redirect('admin.html');
    });
    ////////////////////
    app.get('/api/tables', function (req, res) {
        res.redirect('reserve.htmml')
    });

    app.get('/api/waitlist', function (req, res) {
        res.redirect('tables.html');
    });

    app.get('/api/admin', function (req, res) {
        res.redirect('admin.html');
    });
    ////////////////

    app.post('/api/tables', function (req, res) {
        res.redirect('reserve.htmml')
    });

    app.post('/api/waitlist', function (req, res) {
        res.redirect('tables.html');
    });

    app.post('/api/admin', function (req, res) {
        res.redirect('admin.html');
    });
}

module.exports = routes;