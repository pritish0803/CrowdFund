"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require("web3");

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var web3 = void 0;

/*if(typeof window!=='undefined' && typeof window.web3 !=='undefined'){
  web3=new Web3(window.web3.currentProvider);
}
else {
  const provider= new Web3.providers.HttpProvider("http://localhost:8545");
  web3=new Web3(provider);
}*/
var provider = new _web2.default.providers.HttpProvider("http://localhost:8545");
web3 = new _web2.default(provider);

exports.default = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL3dlYjMuanMiXSwibmFtZXMiOlsiV2ViMyIsIndlYjMiLCJwcm92aWRlciIsInByb3ZpZGVycyIsIkh0dHBQcm92aWRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQUFBTyxBQUFQOzs7Ozs7QUFFQSxJQUFJLFlBQUo7O0FBRUE7Ozs7Ozs7QUFPQSxJQUFNLFdBQVUsSUFBSSxjQUFLLEFBQUwsVUFBZSxBQUFuQixhQUFnQyxBQUFoQyxBQUFoQjtBQUNBLE9BQUssQUFBSSxBQUFKLGtCQUFTLEFBQVQsQUFBTCxBQUVBOztrQkFBZSxBQUFmIiwiZmlsZSI6IndlYjMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3ByaXRpc2hndXB0YS9Eb3dubG9hZHMvYmxvY2tjaGFpbi9sb3R0ZXJ5In0=