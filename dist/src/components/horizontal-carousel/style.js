"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledPaginator = exports.StyledButton = exports.StyledMenu = exports.StyledPanel = exports.StyledPanelContainer = exports.CarouselWrapper = exports.StyledCarousel = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n    opacity: ", ";\n\n    :hover {\n        cursor: ", ";\n    }\n\n    i {\n        background: #FCF3D9;\n        border-radius: 50%;\n        width: 1rem;\n        height: 1rem;\n        font-size: 1rem;\n        padding: 0.5rem;\n    }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n    background:skyblue;\n    width:2rem;\n    height:2rem;\n    margin:2rem auto;\n    text-align:center;\n\n    :hover {\n        cursor: pointer;\n    }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    background:#999;\n    width:100%; \n    display: flex;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    background:skyblue;\n    height:100%;\n    min-width: 100%;\n    display: inline-block;\n\n    .panel-content {\n        padding:2rem;\n        height:100%;\n        width: 100%;\n    }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    background:#999;\n    width: 50vw;\n    height: 50vh;\n    overflow-x: hidden;\n\n    .panel-wrapper {\n        display: flex;\n        height: 100%;\n        width: 100%;\n    }\n      \n    .slide-in {\n        transition:transform 1s;\n    }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    position:fixed;\n    top:80px;\n    left:50%;\n    transform:translateX(-50%);\n    border: 1px solid #000;\n    display: flex;\n    align-items: center;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// export const StyledComponent = styled.div`
// `
var StyledCarousel = _styledComponents.default.div(_templateObject());

exports.StyledCarousel = StyledCarousel;

var CarouselWrapper = _styledComponents.default.div(_templateObject2());

exports.CarouselWrapper = CarouselWrapper;

var StyledPanelContainer = _styledComponents.default.div(_templateObject3());

exports.StyledPanelContainer = StyledPanelContainer;

var StyledPanel = _styledComponents.default.div(_templateObject4());

exports.StyledPanel = StyledPanel;

var StyledMenu = _styledComponents.default.div(_templateObject5());

exports.StyledMenu = StyledMenu;

var StyledButton = _styledComponents.default.div(_templateObject6());

exports.StyledButton = StyledButton;

var StyledPaginator = _styledComponents.default.button(_templateObject7(), function (props) {
  return props.clickable ? "1" : "0.4";
}, function (props) {
  return props.clickable ? "pointer" : "auto";
});

exports.StyledPaginator = StyledPaginator;

//# sourceMappingURL=style.js.map