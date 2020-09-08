"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Arrow = Arrow;

var _react = _interopRequireDefault(require("react"));

var _style = require("./style");

require("remixicon/fonts/remixicon.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Arrow(props) {
  return /*#__PURE__*/_react.default.createElement(_style.StyledPaginator, {
    onClick: props.onClick,
    clickable: props.clickable
  }, props.dir == "prev" ? /*#__PURE__*/_react.default.createElement("i", {
    className: "ri-arrow-left-s-line"
  }) : /*#__PURE__*/_react.default.createElement("i", {
    className: "ri-arrow-right-s-line"
  }));
}

//# sourceMappingURL=arrow.js.map