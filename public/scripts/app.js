'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tree = require('react-d3-tree');
var result = require('../server.js');

var ClassLess = function (_React$Component) {
  _inherits(ClassLess, _React$Component);

  function ClassLess(props) {
    _classCallCheck(this, ClassLess);

    var _this = _possibleConstructorReturn(this, (ClassLess.__proto__ || Object.getPrototypeOf(ClassLess)).call(this, props));

    _this.state = {
      appData: []
    };
    return _this;
  }

  _createClass(ClassLess, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setState({
        appData: [result]
      });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.serverRequest.abort();
    }
  }, {
    key: 'render',
    value: function render() {
      var theData = this.state.appData;
      console.log(theData);
      if (theData.length !== 0) {
        return React.createElement(
          'div',
          { id: 'treeWrapper', style: { width: '50em', height: '20em' } },
          React.createElement(Tree, { data: theData })
        );
      } else {
        return React.createElement(
          'div',
          null,
          React.createElement(
            'div',
            null,
            React.createElement(
              'h1',
              null,
              'Opera'
            ),
            React.createElement('input', { type: 'text', placeholder: 'Search from the tree' })
          )
        );
      }
    }
  }]);

  return ClassLess;
}(React.Component);

ReactDOM.render(React.createElement(ClassLess, null), document.getElementById('app'));
