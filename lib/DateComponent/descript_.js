"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _ = require("./");

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {

  categ: "Production Components",

  construct: _.DateComponent,

  description: "Composant date permettant l'affichage de dates relatives",

  path: "components/Date",

  states: {

    default: {

      description: "Composant par défaut",

      render: function render() {
        return _react2.default.createElement(_2.default, null);
      }

    },

    tomorrow: {

      description: "Date calée à J+1",

      render: function render() {
        return _react2.default.createElement(_2.default, { interval: { days: 1 } });
      }
    },

    editionMode: {

      description: "Composant en mode édition",

      render: function render() {
        return _react2.default.createElement(_2.default, { editionMode: true });
      }
    }

  }

};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;