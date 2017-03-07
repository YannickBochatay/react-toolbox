"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _ = require("./");

var _2 = _interopRequireDefault(_);

var _ducks = require("components/NotifSystem/ducks");

var _store = require("store");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {

  categ: "Presentation",

  construct: _2.default,

  link: "http://react-component.github.io/tabs/",

  states: {

    default: function _default() {
      return _react2.default.createElement(
        _2.default,
        { defaultActiveKey: "1" },
        _react2.default.createElement(
          _.TabPane,
          { tab: "Lorem", key: "1" },
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae erat in eros gravida consectetur. In non egestas arcu. Duis congue a odio nec commodo. Morbi ac mi mollis, elementum metus vehicula, volutpat turpis. Aenean leo ex, varius non lacinia at, faucibus vel nisi. Cras neque odio, tempus id efficitur imperdiet, aliquet id ante. Donec nec magna dui. Proin pulvinar fringilla enim sit amet facilisis. Praesent id justo sed turpis convallis euismod sollicitudin ut erat."
        ),
        _react2.default.createElement(
          _.TabPane,
          { tab: "Integer", key: "2" },
          "Integer laoreet diam ut lorem cursus, sed aliquet leo blandit. Proin sit amet velit justo. Morbi non porta nunc. In hac habitasse platea dictumst. Mauris eu auctor tortor, eget cursus sem. Curabitur egestas consequat nisi a molestie. Curabitur nunc dui, maximus nec augue non, tristique lobortis nulla. Pellentesque tincidunt nisl mauris, ac hendrerit diam condimentum a."
        ),
        _react2.default.createElement(
          _.TabPane,
          { tab: "Pellentesque", key: "3" },
          "Pellentesque tempor libero sit amet lorem elementum, ac fermentum arcu tempus. Nulla efficitur, leo ac pellentesque vehicula, velit mauris lobortis ex, sit amet dictum eros libero et felis. Curabitur dapibus neque sed tellus eleifend sodales. Cras eu turpis elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec vehicula nibh eu viverra sodales. Donec suscipit urna vitae tortor venenatis, nec sagittis sem tempus. Phasellus augue orci, tincidunt vel condimentum ac, sagittis tempus augue. Curabitur fringilla vulputate orci eu sagittis. Nam volutpat in justo non convallis. Mauris ac lectus mauris. Curabitur sem justo, facilisis sit amet turpis vitae, dignissim venenatis dolor."
        )
      );
    },

    eventOnChange: function eventOnChange() {
      return _react2.default.createElement(
        _2.default,
        { defaultActiveKey: "1", onChange: function handleChange() {

            _store.store.dispatch((0, _ducks.addNotification)({
              message: "Tab changed",
              level: "success"
            }));
          } },
        _react2.default.createElement(
          _.TabPane,
          { tab: "Lorem", key: "1" },
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae erat in eros gravida consectetur. In non egestas arcu. Duis congue a odio nec commodo. Morbi ac mi mollis, elementum metus vehicula, volutpat turpis. Aenean leo ex, varius non lacinia at, faucibus vel nisi. Cras neque odio, tempus id efficitur imperdiet, aliquet id ante. Donec nec magna dui. Proin pulvinar fringilla enim sit amet facilisis. Praesent id justo sed turpis convallis euismod sollicitudin ut erat."
        ),
        _react2.default.createElement(
          _.TabPane,
          { tab: "Integer", key: "2" },
          "Integer laoreet diam ut lorem cursus, sed aliquet leo blandit. Proin sit amet velit justo. Morbi non porta nunc. In hac habitasse platea dictumst. Mauris eu auctor tortor, eget cursus sem. Curabitur egestas consequat nisi a molestie. Curabitur nunc dui, maximus nec augue non, tristique lobortis nulla. Pellentesque tincidunt nisl mauris, ac hendrerit diam condimentum a."
        ),
        _react2.default.createElement(
          _.TabPane,
          { tab: "Pellentesque", key: "3" },
          "Pellentesque tempor libero sit amet lorem elementum, ac fermentum arcu tempus. Nulla efficitur, leo ac pellentesque vehicula, velit mauris lobortis ex, sit amet dictum eros libero et felis. Curabitur dapibus neque sed tellus eleifend sodales. Cras eu turpis elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec vehicula nibh eu viverra sodales. Donec suscipit urna vitae tortor venenatis, nec sagittis sem tempus. Phasellus augue orci, tincidunt vel condimentum ac, sagittis tempus augue. Curabitur fringilla vulputate orci eu sagittis. Nam volutpat in justo non convallis. Mauris ac lectus mauris. Curabitur sem justo, facilisis sit amet turpis vitae, dignissim venenatis dolor."
        )
      );
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