"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Carousel = void 0;

var _react = _interopRequireDefault(require("react"));

var _panelcontainer = require("./panelcontainer");

var _menu = require("./menu");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Carousel = /*#__PURE__*/function (_React$Component) {
  _inherits(Carousel, _React$Component);

  var _super = _createSuper(Carousel);

  function Carousel(props) {
    var _this;

    _classCallCheck(this, Carousel);

    _this = _super.call(this, props);
    _this.state = {
      position: 0,
      panels: 6,
      buttonArr: Array(1).fill('skyblue'),
      panelContent: [panel1, panel2, panel3, panel4, panel5, panel6]
    };
    return _this;
  }

  _createClass(Carousel, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        buttonArr: Array(this.state.panels).fill('skyblue')
      });
    }
  }, {
    key: "changeButtonColor",
    value: function changeButtonColor(i) {
      var color;
      var buttonArr = this.state.buttonArr.slice();

      for (var a = 0; a < buttonArr.length; a++) {
        if (a == i) {
          buttonArr[a] = 'lightpink';
        } else {
          buttonArr[a] = 'skyblue';
        }
      }

      return buttonArr;
    }
  }, {
    key: "handleClick",
    value: function handleClick(i) {
      // change panel
      var newPosition = i * -100;
      newPosition += '%';
      console.log(this.state.buttonArr); // change clicked on button color

      var newArr = this.changeButtonColor(i);
      this.setState({
        position: newPosition,
        buttonArr: newArr
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/_react.default.createElement("div", {
        className: "carousel"
      }, /*#__PURE__*/_react.default.createElement(_panelcontainer.PanelContainer, {
        panelCount: this.state.panels,
        position: this.state.position,
        panelContent: this.state.panelContent
      }), /*#__PURE__*/_react.default.createElement(_menu.Menu, {
        buttonColor: this.state.buttonArr,
        panelCount: this.state.panels,
        onClick: function onClick(i) {
          return _this2.handleClick(i);
        }
      }));
    }
  }]);

  return Carousel;
}(_react.default.Component); // panel content


exports.Carousel = Carousel;
var panel1 = 'asdfasdf';
var panel2 = 'panel deux';
var panel3 = 'trois';
var panel4 = 'quatre';
var panel5 = 'cinq';
var panel6 = 'six';

//# sourceMappingURL=carousel.js.map