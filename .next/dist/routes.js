'use strict';

var routes = require('next-routes')();

routes.add('/campaigns/new', '/campaigns/new').add('/campaigns/:address', '/campaigns/show') //wild card variable of src
.add('/campaigns/:address/requests', '/campaigns/requests/index').add('/campaigns/:address/requests/new', '/campaigns/requests/new');
module.exports = routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiYWRkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNLFNBQU8sQUFBYjs7QUFFQSxPQUVDLEFBRkQsSUFFSyxBQUZMLGtCQUVzQixBQUZ0QixrQkFHQyxBQUhELElBR0ssQUFITCx1QkFHMkIsQUFIM0IsbUJBRzZDLEFBSDdDO0NBSUMsQUFKRCxJQUlLLEFBSkwsZ0NBSW9DLEFBSnBDLDZCQUtDLEFBTEQsSUFLSyxBQUxMLG9DQUt3QyxBQUx4QztBQU1BLE9BQU8sQUFBUCxVQUFpQixBQUFqQiIsImZpbGUiOiJyb3V0ZXMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3ByaXRpc2hndXB0YS9Eb3dubG9hZHMvYmxvY2tjaGFpbi9sb3R0ZXJ5In0=