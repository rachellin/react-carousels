"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HorizontalCarousel = void 0;

var _react = _interopRequireDefault(require("react"));

var _panelcontainer = require("./panelcontainer");

var _menu = require("./menu");

var _arrow = require("./arrow");

var _style = require("./style");

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

var HorizontalCarousel = /*#__PURE__*/function (_React$Component) {
  _inherits(HorizontalCarousel, _React$Component);

  var _super = _createSuper(HorizontalCarousel);

  function HorizontalCarousel(props) {
    var _this;

    _classCallCheck(this, HorizontalCarousel);

    _this = _super.call(this, props);
    _this.state = {
      position: "0%",
      panels: _this.props.panels,
      buttonArr: Array(1).fill('skyblue'),
      panelContent: [panel1, panel2, panel3, panel4, panel5, panel6],
      pag: [_this.props.forever, true]
    };
    return _this;
  }

  _createClass(HorizontalCarousel, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var buttonArr = Array(this.state.panels).fill('skyblue');
      buttonArr[0] = "lightpink";
      this.setState({
        buttonArr: buttonArr
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (!this.props.forever) {
        this.checkPagination();
      }
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
    key: "handleArrow",
    value: function handleArrow(dir) {
      var currentPosition = Number(this.state.position.replace("%", "")) / -100;
      var newIndex;

      if (dir == "prev") {
        if (!this.state.pag[0]) {
          return;
        }

        newIndex = currentPosition - 1;

        if (this.props.forever && newIndex < 0) {
          newIndex = this.state.panels - 1;
        }
      } else {
        if (!this.state.pag[1]) {
          return;
        }

        newIndex = currentPosition + 1;

        if (this.props.forever && newIndex > this.state.panels - 1) {
          newIndex = 0;
        }
      }

      var newPosition = newIndex * -100;
      newPosition += "%";
      var newArr = this.changeButtonColor(newIndex);
      this.setState({
        position: newPosition,
        buttonArr: newArr
      });
    }
  }, {
    key: "checkPagination",
    value: function checkPagination() {
      var currentPanel = Number(this.state.position.replace("%", "")) / -100;

      if (currentPanel == this.state.panels - 1 && this.state.pag[1]) {
        this.setState({
          pag: [true, false]
        });
      } else if (currentPanel == 0 && this.state.pag[0]) {
        this.setState({
          pag: [false, true]
        });
      } else if (this.state.pag[0] !== this.state.pag[1] && currentPanel !== 0 && currentPanel !== this.state.panels - 1) {
        this.setState({
          pag: [true, true]
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/_react.default.createElement(_style.StyledCarousel, null, /*#__PURE__*/_react.default.createElement(_arrow.Arrow, {
        dir: "prev",
        onClick: function onClick() {
          return _this2.handleArrow("prev");
        },
        clickable: this.state.pag[0]
      }), /*#__PURE__*/_react.default.createElement(_style.CarouselWrapper, null, /*#__PURE__*/_react.default.createElement(_panelcontainer.PanelContainer, {
        panelCount: this.state.panels,
        position: this.state.position,
        panelContent: this.state.panelContent
      }), /*#__PURE__*/_react.default.createElement(_menu.Menu, {
        buttonColor: this.state.buttonArr,
        panelCount: this.state.panels,
        onClick: function onClick(i) {
          return _this2.handleClick(i);
        }
      })), /*#__PURE__*/_react.default.createElement(_arrow.Arrow, {
        dir: "next",
        onClick: function onClick() {
          return _this2.handleArrow("next");
        },
        clickable: this.state.pag[1]
      }));
    }
  }]);

  return HorizontalCarousel;
}(_react.default.Component); // default props


exports.HorizontalCarousel = HorizontalCarousel;
HorizontalCarousel.defaultProps = {
  panels: 6,
  forever: true
}; // panel content

var panel1 = 'horizontal!';
var panel2 = 'panel deux';
var panel3 = 'trois';
var panel4 = 'quatre';
var panel5 = 'cinq';
var panel6 = 'six';

//# sourceMappingURL=carousel.js.map