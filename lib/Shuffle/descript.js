"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactShuffle = require("react-shuffle");

var _reactShuffle2 = _interopRequireDefault(_reactShuffle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  item: {
    display: "inline-block",
    padding: 20,
    margin: 2,
    backgroundColor: "#ddd"
  }
};

function shuffle(array) {

  var currentIndex = array.length;

  while (0 !== currentIndex) {

    var randomIndex = Math.floor(Math.random() * currentIndex);

    currentIndex -= 1;

    var temporaryValue = array[currentIndex];

    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

var items = "Lorem ipsum dolor sit amet,\nconsectetur adipiscing elit.\nPraesent fermentum sem non diam commodo,\na tristique massa ultrices.\nNam fringilla id urna in imperdiet.\nDonec bibendum massa nisl.\nNunc volutpat nunc ut orci consectetur,\nin mattis nibh dictum.\nNulla ultrices urna mauris,\nnec auctor nisi bibendum ut.\nQuisque eu ligula nisl.\nMaecenas interdum est orci,\nin luctus enim volutpat a.\nEtiam luctus, erat id pellentesque sodales,\nex lorem iaculis elit,\nsed feugiat odio arcu sed est.\nInteger sit amet bibendum dui.\nPhasellus vitae varius lacus.\nVivamus nibh mauris, vestibulum vel lacus vitae,\nhendrerit iaculis neque.\nEtiam tempus, justo ac vestibulum viverra,\ntellus massa rutrum eros,\nbibendum vestibulum nulla tortor a turpis.\nSuspendisse eu posuere purus.\nProin ac turpis suscipit nibh molestie ultrices.\nMorbi vel purus molestie, molestie nisi eu, pretium dolor.\nInteger ac sem nec odio egestas auctor porttitor cursus justo.".split(/[\.,]?\s/);

var ShuffleExample = function (_Component) {
  _inherits(ShuffleExample, _Component);

  function ShuffleExample(props) {
    _classCallCheck(this, ShuffleExample);

    var _this = _possibleConstructorReturn(this, (ShuffleExample.__proto__ || Object.getPrototypeOf(ShuffleExample)).call(this, props));

    _this.handleClick = _this.handleClick.bind(_this);
    _this.handleChange = _this.handleChange.bind(_this);

    _this.state = { items: items };

    return _this;
  }

  _createClass(ShuffleExample, [{
    key: "handleClick",
    value: function handleClick() {

      this.setState({ items: shuffle(this.state.items) });
    }
  }, {
    key: "handleChange",
    value: function handleChange(e) {

      this.setState({ items: items.filter(function (item) {
          return item.indexOf(e.target.value) !== -1;
        }) });
    }
  }, {
    key: "render",
    value: function render() {

      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement("input", { type: "text", onChange: this.handleChange, placeholder: "filter" }),
        "\xA0\xA0",
        _react2.default.createElement(
          "button",
          { onClick: this.handleClick },
          "Shuffle"
        ),
        _react2.default.createElement(
          _reactShuffle2.default,
          null,
          this.state.items.map(function (item) {
            return _react2.default.createElement(
              "span",
              { key: item, style: styles.item },
              item
            );
          })
        )
      );
    }
  }]);

  return ShuffleExample;
}(_react.Component);

module.exports = {

  name: "Shuffle",

  construct: _reactShuffle2.default,

  path: "react-shuffle",

  link: "https://github.com/FormidableLabs/react-shuffle",

  states: { default: function _default() {
      return _react2.default.createElement(ShuffleExample, null);
    } }
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(styles, "styles", "src/components/Shuffle/descript.js");

  __REACT_HOT_LOADER__.register(shuffle, "shuffle", "src/components/Shuffle/descript.js");

  __REACT_HOT_LOADER__.register(items, "items", "src/components/Shuffle/descript.js");

  __REACT_HOT_LOADER__.register(ShuffleExample, "ShuffleExample", "src/components/Shuffle/descript.js");
}();

;