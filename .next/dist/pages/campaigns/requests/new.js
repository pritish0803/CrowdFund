'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _campaign = require('../../../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _web = require('../../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _routes = require('../../../routes');

var _semanticUiReact = require('semantic-ui-react');

var _Layout = require('../../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/pritishgupta/Downloads/blockchain/lottery/pages/campaigns/requests/new.js?entry';


var RequestNew = function (_Component) {
  (0, _inherits3.default)(RequestNew, _Component);

  function RequestNew() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, RequestNew);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RequestNew.__proto__ || (0, _getPrototypeOf2.default)(RequestNew)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      value: '',
      description: '',
      recipient: '',
      loading: false,
      errorMessage: ''
    }, _this.onSubmit = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
        var campaign, _this$state, description, value, recipient, accounts;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();
                campaign = (0, _campaign2.default)(_this.props.address);
                _this$state = _this.state, description = _this$state.description, value = _this$state.value, recipient = _this$state.recipient;

                _this.setState({ loading: true, errorMessage: '' });
                _context.prev = 4;
                _context.next = 7;
                return _web2.default.eth.getAccounts();

              case 7:
                accounts = _context.sent;

                console.log(accounts[0], description, value, recipient);
                _context.next = 11;
                return campaign.methods.createRequest(description, _web2.default.utils.toWei(value, 'ether'), recipient).send({ from: accounts[0], gas: '1000000' });

              case 11:
                _routes.Router.pushRoute('/campaigns/' + _this.props.address + '/requests');

                _context.next = 17;
                break;

              case 14:
                _context.prev = 14;
                _context.t0 = _context['catch'](4);

                _this.setState({ errorMessage: _context.t0.message });

              case 17:
                _this.setState({ loading: false });

              case 18:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2, [[4, 14]]);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(RequestNew, [{
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, 'Create a Request'), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, ' Description'), _react2.default.createElement(_semanticUiReact.Input, { value: this.state.description,
        onChange: function onChange(event) {
          return _this3.setState({ description: event.target.value });
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      })), _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, ' Value in Ether'), _react2.default.createElement(_semanticUiReact.Input, { value: this.state.value,
        onChange: function onChange(event) {
          return _this3.setState({ value: event.target.value });
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      })), _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, ' Recipient Address'), _react2.default.createElement(_semanticUiReact.Input, { value: this.state.recipient,
        onChange: function onChange(event) {
          return _this3.setState({ recipient: event.target.value });
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'OOPPS!', content: this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { primary: true, loading: this.state.loading, __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, ' Create')));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(props) {
        var address;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                address = props.query.address;
                return _context2.abrupt('return', { address: address });

              case 2:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getInitialProps(_x2) {
        return _ref3.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return RequestNew;
}(_react.Component);

exports.default = RequestNew;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9yZXF1ZXN0cy9uZXcuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJDYW1wYWlnbiIsIndlYjMiLCJMaW5rIiwiUm91dGVyIiwiRm9ybSIsIkJ1dHRvbiIsIk1lc3NhZ2UiLCJJbnB1dCIsIkxheW91dCIsIlJlcXVlc3ROZXciLCJzdGF0ZSIsInZhbHVlIiwiZGVzY3JpcHRpb24iLCJyZWNpcGllbnQiLCJsb2FkaW5nIiwiZXJyb3JNZXNzYWdlIiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiY2FtcGFpZ24iLCJwcm9wcyIsImFkZHJlc3MiLCJzZXRTdGF0ZSIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJjb25zb2xlIiwibG9nIiwibWV0aG9kcyIsImNyZWF0ZVJlcXVlc3QiLCJ1dGlscyIsInRvV2VpIiwic2VuZCIsImZyb20iLCJnYXMiLCJwdXNoUm91dGUiLCJtZXNzYWdlIiwidGFyZ2V0IiwicXVlcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBTyxBQUFjOzs7O0FBQ3JCLEFBQU8sQUFBVTs7OztBQUNqQixBQUFTLEFBQUssQUFBYzs7QUFDNUIsQUFBUyxBQUFLLEFBQU8sQUFBUTs7QUFDN0IsQUFBTyxBQUFZOzs7Ozs7Ozs7SUFFYixBOzs7Ozs7Ozs7Ozs7Ozs7b04sQUFDSjthQUFNLEFBQ0UsQUFDTjttQkFGSSxBQUVRLEFBQ1o7aUJBSEksQUFHTSxBQUNWO2VBSkksQUFJSSxBQUNSO29CQUxJLEFBS1MsQTtBQUxULEFBQ0osYUFXRixBOzJGQUFTLGlCQUFBLEFBQU8sT0FBUDtrRUFBQTs7c0VBQUE7b0JBQUE7NkNBQUE7bUJBQ1A7c0JBQUEsQUFBTSxBQUNBO0FBRkMsMkJBRVEsd0JBQVMsTUFBQSxBQUFLLE1BRnRCLEFBRVEsQUFBb0I7OEJBQ0csTUFIL0IsQUFHb0MsT0FIcEMsQUFHQywwQkFIRCxBQUdDLGFBSEQsQUFHYSxvQkFIYixBQUdhLE9BSGIsQUFHbUIsd0JBSG5CLEFBR21CLEFBQzFCOztzQkFBQSxBQUFLLFNBQVMsRUFBQyxTQUFELEFBQVMsTUFBSyxjQUpyQixBQUlQLEFBQWMsQUFBMkI7Z0NBSmxDO2dDQUFBO3VCQU1nQixjQUFBLEFBQUssSUFOckIsQUFNZ0IsQUFBUzs7bUJBQXhCO0FBTkQsb0NBT0w7O3dCQUFBLEFBQVEsSUFBSSxTQUFaLEFBQVksQUFBUyxJQUFyQixBQUF3QixhQUF4QixBQUFvQyxPQVAvQixBQU9MLEFBQTBDO2dDQVByQzt1QkFRQyxTQUFBLEFBQVMsUUFBVCxBQUFpQixjQUFqQixBQUErQixhQUNyQyxjQUFBLEFBQUssTUFBTCxBQUFXLE1BQVgsQUFBaUIsT0FEWCxBQUNOLEFBQXVCLFVBRGpCLEFBRVIsV0FGUSxBQUVHLEtBQUssRUFBQyxNQUFLLFNBQU4sQUFBTSxBQUFTLElBQUcsS0FWM0IsQUFRQyxBQUVRLEFBQXNCOzttQkFDdEM7K0JBQUEsQUFBTywwQkFBd0IsTUFBQSxBQUFLLE1BQXBDLEFBQTBDLFVBWG5DOztnQ0FBQTtBQUFBOzttQkFBQTtnQ0FBQTtnREFlSDs7c0JBQUEsQUFBSyxTQUFTLEVBQUMsY0FBYSxZQWZ6QixBQWVILEFBQWMsQUFBZ0I7O21CQUVsQztzQkFBQSxBQUFLLFNBQVMsRUFBQyxTQWpCUixBQWlCUCxBQUFjLEFBQVM7O21CQWpCaEI7bUJBQUE7Z0NBQUE7O0FBQUE7aUNBQUE7QTs7Ozs7Ozs7Ozs2QkFtQkE7bUJBRVA7OzZCQUNFLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0E7QUFEQTtBQUFBLE9BQUEsa0JBQ0EsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREEsQUFDQSxBQUNBLHFDQUFBLEFBQUMsdUNBQUssVUFBVSxLQUFoQixBQUFxQixVQUFVLE9BQU8sQ0FBQyxDQUFDLEtBQUEsQUFBSyxNQUE3QyxBQUFtRDtvQkFBbkQ7c0JBQUEsQUFDQTtBQURBO3lCQUNDLGNBQUQsc0JBQUEsQUFBTTs7b0JBQU47c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREYsQUFDRSxBQUNBLGlDQUFBLEFBQUMsd0NBQU0sT0FBTyxLQUFBLEFBQUssTUFBbkIsQUFBeUIsQUFDekI7a0JBQVUseUJBQUE7aUJBQU8sT0FBQSxBQUFLLFNBQVMsRUFBQyxhQUFZLE1BQUEsQUFBTSxPQUF4QyxBQUFPLEFBQWMsQUFBMEI7QUFEekQ7b0JBQUE7c0JBSEYsQUFDQSxBQUVFLEFBTUY7QUFORTsyQkFNRCxjQUFELHNCQUFBLEFBQU07O29CQUFOO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURGLEFBQ0UsQUFDQSxvQ0FBQSxBQUFDLHdDQUFNLE9BQU8sS0FBQSxBQUFLLE1BQW5CLEFBQXlCLEFBQ3pCO2tCQUFVLHlCQUFBO2lCQUFPLE9BQUEsQUFBSyxTQUFTLEVBQUMsT0FBTSxNQUFBLEFBQU0sT0FBbEMsQUFBTyxBQUFjLEFBQW9CO0FBRG5EO29CQUFBO3NCQVhGLEFBU0EsQUFFRSxBQU1GO0FBTkU7MkJBTUQsY0FBRCxzQkFBQSxBQUFNOztvQkFBTjtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBQ0EsdUNBQUEsQUFBQyx3Q0FBTSxPQUFPLEtBQUEsQUFBSyxNQUFuQixBQUF5QixBQUN6QjtrQkFBVSx5QkFBQTtpQkFBTyxPQUFBLEFBQUssU0FBUyxFQUFDLFdBQVUsTUFBQSxBQUFNLE9BQXRDLEFBQU8sQUFBYyxBQUF3QjtBQUR2RDtvQkFBQTtzQkFuQkYsQUFpQkEsQUFFRSxBQUdGO0FBSEU7MkJBR0YsQUFBQywwQ0FBUSxPQUFULE1BQWUsUUFBZixBQUFzQixVQUFTLFNBQVMsS0FBQSxBQUFLLE1BQTdDLEFBQW1EO29CQUFuRDtzQkF0QkEsQUFzQkEsQUFDQTtBQURBOzBCQUNBLEFBQUMseUNBQU8sU0FBUixNQUFnQixTQUFTLEtBQUEsQUFBSyxNQUE5QixBQUFvQztvQkFBcEM7c0JBQUE7QUFBQTtTQTFCRixBQUNFLEFBRUEsQUF1QkEsQUFLSDs7Ozs7NkdBekQ0QixBOzs7OzttQkFDbkI7QSwwQkFBVSxNLEFBQU0sTUFBaEIsQTtrREFFRCxFQUFFLFMsQUFBRjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVhjLEEsQUFvRXpCOztrQkFBQSxBQUFlIiwiZmlsZSI6Im5ldy5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvcHJpdGlzaGd1cHRhL0Rvd25sb2Fkcy9ibG9ja2NoYWluL2xvdHRlcnkifQ==