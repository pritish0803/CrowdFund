const routes=require('next-routes')();

routes

.add('/campaigns/new','/campaigns/new')
.add('/campaigns/:address','/campaigns/show')//wild card variable of src
.add('/campaigns/:address/requests','/campaigns/requests/index')
.add('/campaigns/:address/requests/new','/campaigns/requests/new');
module.exports = routes;
