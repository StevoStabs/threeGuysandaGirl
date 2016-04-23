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
        res.redirect('reserve.html')
    });

    app.get('/api/waitlist', function (req, res) {
        res.redirect('tables.html');
    });

    app.get('/api/admin', function (req, res) {
        res.redirect('admin.html');
    });
    ////////////////

        function Reservation(name,phoneNumber,email,id,timeStamp){
            this.name = name;
            this.phoneNumber = phoneNumber;
            this.email = email;
            this.id = id;
            this.timeStamp = timeStamp;
        }

        var tables = [];
        var waitlist = [];

        app.post('/api/tables', function(req, res){

            var reserved = new Reservation(req.body.cname,
                req.body.cphonenumber,
                req.body.cemail,
                req.body.cid,
                Date.now());

            if(tables.length > 10) {
                tables.push(reserved);
            }
            else
                waitlist.push(reserved);

        res.send("Success");
    });

    app.post('/api/waitlist', function (req, res) {
    });

    app.post('/api/admin', function (req, res) {
    });
}

module.exports = routes;