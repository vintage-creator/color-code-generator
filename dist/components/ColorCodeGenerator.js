"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ColorCodeGenerator = ColorCodeGenerator;
require("core-js/modules/es.regexp.to-string.js");
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//REACT CUSTOM Component
//@author: Israel Abazie

function ColorCodeGenerator(_ref) {
  let {
    params
  } = _ref;
  const colorsData = UseColorCode(params);
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      textAlign: "center",
      padding: "10px",
      fontSize: "25px",
      backgroundColor: "#282c34",
      minHeight: "100vh",
      color: "white"
    }
  }, /*#__PURE__*/_react.default.createElement("h1", null, "Instant Color Code Generator"), /*#__PURE__*/_react.default.createElement("h3", null, "Created by Israel Abazie (@vintage-creator)"), /*#__PURE__*/_react.default.createElement("h4", null, "Follow me:", " ", /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("a", {
    href: "https://www.linkedin.com/in/israel-abazie/",
    style: {
      color: "silver"
    }
  }, "LinkedIn")), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("a", {
    href: "https://github.com/vintage-creator",
    style: {
      color: "silver"
    }
  }, "Github"))), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: "90%",
      margin: "0px auto",
      display: "flex",
      textAlign: "center",
      flexWrap: "wrap",
      justifyContent: "center",
      fontWeight: "bold",
      fontSize: "35px",
      alignItems: "center"
    }
  }, colorsData.map(item => {
    return /*#__PURE__*/_react.default.createElement("div", {
      key: item.color,
      style: {
        backgroundColor: "#".concat(item.color),
        width: "200px",
        borderRadius: "20px",
        height: "200px",
        border: "1px solid #ffff",
        padding: "20px",
        margin: "10px"
      }
    }, /*#__PURE__*/_react.default.createElement("div", {
      style: {
        marginTop: "35%"
      }
    }, "#".concat(item.color)));
  })));
}
function UseColorCode(params) {
  const RandomColor = () => {
    let randomcolors;
    randomcolors = Math.floor(Math.random() * 16777215).toString(16);
    if (randomcolors.length < 6) {
      randomcolors = randomcolors + Math.floor(Math.random() * 7).toString();
    }
    return randomcolors;
  };
  let colorsData = [];
  if (params >= 1) {
    for (let i = 0; i < params; i++) {
      colorsData.push({
        color: RandomColor()
      });
    }
  } else {
    alert("Please enter a valid number");
    return;
  }
  return colorsData;
}