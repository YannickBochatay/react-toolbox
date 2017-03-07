"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LangChoice = undefined;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require("react-redux");

var _locales = require("locales");

var _locales2 = _interopRequireDefault(_locales);

var _reactSelect = require("react-select");

var _reactSelect2 = _interopRequireDefault(_reactSelect);

var _style = require("./style.css");

var _style2 = _interopRequireDefault(_style);

var _Intl = require("components/Intl");

var _Intl2 = _interopRequireDefault(_Intl);

var _ducks = require("components/Intl/ducks");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var options = Object.keys(_locales2.default).map(function (locale) {
  return {
    value: locale,
    label: _locales2.default[locale].lang,
    icon: _locales2.default[locale].icon
  };
});

var renderOption = function renderOption(option) {
  return _react2.default.createElement(
    "span",
    null,
    _react2.default.createElement("img", { src: option.icon, className: _style2.default.flag }),
    _react2.default.createElement(_Intl2.default, { text: option.label, ucfirst: true })
  );
};

var LangChoice = exports.LangChoice = function LangChoice(_ref) {
  var value = _ref.value,
      onChange = _ref.onChange,
      className = _ref.className;
  return _react2.default.createElement(_reactSelect2.default, {
    value: value,
    onChange: onChange,
    clearable: false,
    options: options,
    className: _style2.default.select + (className ? " " + className : ""),
    optionRenderer: renderOption,
    valueRenderer: renderOption
  });
};

LangChoice.propTypes = {
  value: _react.PropTypes.string,
  onChange: _react.PropTypes.func,
  className: _react.PropTypes.string
};

function mapStateToProps(state) {

  var data = state[_ducks.STATE_PROPERTY];

  return { value: data && data.locale };
}

function mapDispatchToProps(dispatch, ownProps) {

  return {
    onChange: function onChange(option) {

      dispatch((0, _ducks.setLocale)(option.value));

      if (ownProps.onChange) ownProps.onChange();
    }
  };
}

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(LangChoice);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(options, "options", "src/components/Intl/LangChoice/index.js");

  __REACT_HOT_LOADER__.register(renderOption, "renderOption", "src/components/Intl/LangChoice/index.js");

  __REACT_HOT_LOADER__.register(LangChoice, "LangChoice", "src/components/Intl/LangChoice/index.js");

  __REACT_HOT_LOADER__.register(mapStateToProps, "mapStateToProps", "src/components/Intl/LangChoice/index.js");

  __REACT_HOT_LOADER__.register(mapDispatchToProps, "mapDispatchToProps", "src/components/Intl/LangChoice/index.js");

  __REACT_HOT_LOADER__.register(_default, "default", "src/components/Intl/LangChoice/index.js");
}();

;