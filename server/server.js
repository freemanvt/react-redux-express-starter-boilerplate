var logger = require('./logger');
var app = require('./app.js');

var listener = app.listen(process.env.HTTP_PORT || '6628', function () {
    logger.info('backend server listening on port ' + listener.address().port);
});
