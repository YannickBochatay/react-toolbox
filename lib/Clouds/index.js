"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Clouds = exports.toggleClouds = exports.hideClouds = exports.showClouds = exports.toggleCloudsAnimation = exports.launchCloudsAnimation = exports.reducer = exports.STATE_PROPERTY = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ducks = require("./ducks");

Object.defineProperty(exports, "STATE_PROPERTY", {
  enumerable: true,
  get: function get() {
    return _ducks.STATE_PROPERTY;
  }
});
Object.defineProperty(exports, "reducer", {
  enumerable: true,
  get: function get() {
    return _ducks.reducer;
  }
});
Object.defineProperty(exports, "launchCloudsAnimation", {
  enumerable: true,
  get: function get() {
    return _ducks.launchCloudsAnimation;
  }
});
Object.defineProperty(exports, "toggleCloudsAnimation", {
  enumerable: true,
  get: function get() {
    return _ducks.toggleCloudsAnimation;
  }
});
Object.defineProperty(exports, "showClouds", {
  enumerable: true,
  get: function get() {
    return _ducks.showClouds;
  }
});
Object.defineProperty(exports, "hideClouds", {
  enumerable: true,
  get: function get() {
    return _ducks.hideClouds;
  }
});
Object.defineProperty(exports, "toggleClouds", {
  enumerable: true,
  get: function get() {
    return _ducks.toggleClouds;
  }
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require("react-redux");

var _nuage = require("./nuage.png");

var _nuage2 = _interopRequireDefault(_nuage);

var _jquery = require("jquery");

var _jquery2 = _interopRequireDefault(_jquery);

var _three = require("three");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Clouds = exports.Clouds = function (_Component) {
  _inherits(Clouds, _Component);

  function Clouds(props) {
    _classCallCheck(this, Clouds);

    var _this = _possibleConstructorReturn(this, (Clouds.__proto__ || Object.getPrototypeOf(Clouds)).call(this, props));

    _this.onMouseMove = _this.onMouseMove.bind(_this);
    _this.onResize = _this.onResize.bind(_this);
    _this.animate = _this.animate.bind(_this);

    _this.mouseX = 0;
    _this.mouseY = 0;

    _this.width = 0;
    _this.height = 0;

    return _this;
  }

  _createClass(Clouds, [{
    key: "getVertexShader",
    value: function getVertexShader() {

      return "varying vec2 vUv;\n\n      void main() {\n\n        vUv = uv;\n        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\n      }";
    }
  }, {
    key: "getFragmentShader",
    value: function getFragmentShader() {

      return "uniform sampler2D map;\n\n      uniform vec3 fogColor;\n      uniform float fogNear;\n      uniform float fogFar;\n\n      varying vec2 vUv;\n\n      void main() {\n\n        float depth = gl_FragCoord.z / gl_FragCoord.w;\n        float fogFactor = smoothstep( fogNear, fogFar, depth );\n\n        gl_FragColor = texture2D( map, vUv );\n        gl_FragColor.w *= pow( gl_FragCoord.z, 20.0 );\n        gl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );\n\n      }";
    }
  }, {
    key: "createGradient",
    value: function createGradient() {

      var canvas = document.createElement("canvas");

      canvas.width = 32;
      canvas.height = this.height;

      var context = canvas.getContext("2d");
      var gradient = context.createLinearGradient(0, 0, 0, canvas.height);

      gradient.addColorStop(0, "#1e4877");
      gradient.addColorStop(0.5, "#4584b4");

      context.fillStyle = gradient;
      context.fillRect(0, 0, canvas.width, canvas.height);

      return canvas.toDataURL("image/png");
    }
  }, {
    key: "applyGradient",
    value: function applyGradient(gradient) {

      (0, _jquery2.default)(this.container).css({
        background: "url(" + gradient + ")",
        backgroundSize: "32px 100%"
      });
    }
  }, {
    key: "createCamera",
    value: function createCamera() {

      var camera = new _three.PerspectiveCamera(30, this.width / this.height, 1, 3000);

      camera.position.z = 6000;

      return camera;
    }
  }, {
    key: "createGeometry",
    value: function createGeometry() {

      var geometry = new _three.Geometry();

      var plane = new _three.Mesh(new _three.PlaneGeometry(64, 64));

      for (var i = 0; i < 8000; i++) {

        plane.position.x = Math.random() * 1000 - 500;
        plane.position.y = -(Math.random() * Math.random() * 200) - 15;
        plane.position.z = i;
        plane.rotation.z = Math.random() * Math.PI;
        plane.scale.x = plane.scale.y = Math.random() * Math.random() * 1.5 + 0.5;

        plane.updateMatrix();
        geometry.merge(plane.geometry, plane.matrix);
      }

      return geometry;
    }
  }, {
    key: "createMaterial",
    value: function createMaterial(texture) {

      var fog = new _three.Fog(0x4584b4, -100, 3000);

      return new _three.ShaderMaterial({

        uniforms: {

          map: { type: "t", value: texture },
          fogColor: { type: "c", value: fog.color },
          fogNear: { type: "f", value: fog.near },
          fogFar: { type: "f", value: fog.far }

        },
        vertexShader: this.getVertexShader(),
        fragmentShader: this.getFragmentShader(),
        depthWrite: false,
        depthTest: false,
        transparent: true

      });
    }
  }, {
    key: "createRenderer",
    value: function createRenderer() {

      var renderer = new _three.WebGLRenderer({ antialias: false, alpha: true });

      renderer.setSize(this.width, this.height);

      (0, _jquery2.default)(this.container).append(renderer.domElement);

      return renderer;
    }
  }, {
    key: "createMesh",
    value: function createMesh(texture) {

      var material = this.createMaterial(texture);

      var geometry = this.createGeometry();

      return new _three.Mesh(geometry, material);
    }
  }, {
    key: "createScene",
    value: function createScene(texture) {

      var scene = new _three.Scene();

      var mesh = this.createMesh(texture);

      scene.add(mesh);

      return scene;
    }
  }, {
    key: "onTextureLoad",
    value: function onTextureLoad(texture) {

      this.textureLoaded = true;

      texture.magFilter = _three.LinearMipMapLinearFilter;
      texture.minFilter = _three.LinearMipMapLinearFilter;

      this.scene = this.createScene(texture);

      this.camera = this.createCamera();

      this.renderer = this.createRenderer();

      this.startTime = Date.now();

      if (this.props.animate) this.launchAnimation();else this.renderFrame();

      window.addEventListener("resize", this.onResize, false);
    }
  }, {
    key: "setDimensions",
    value: function setDimensions() {

      var $container = (0, _jquery2.default)(this.container);

      this.width = $container.width();
      this.height = $container.height();
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {

      this.setDimensions();

      this.applyGradient(this.createGradient());

      new _three.TextureLoader().load(_nuage2.default, this.onTextureLoad.bind(this));
    }
  }, {
    key: "onMouseMove",
    value: function onMouseMove(e) {
      var width = this.width,
          height = this.height;


      this.mouseX = (e.clientX - width / 2) * 0.25;
      this.mouseY = (e.clientY - height / 2) * 0.15;
    }
  }, {
    key: "onResize",
    value: function onResize() {
      var camera = this.camera,
          renderer = this.renderer;


      this.setDimensions();

      camera.aspect = this.width / this.height;
      camera.updateProjectionMatrix();

      renderer.setSize(this.width, this.height);

      if (!this.props.animate) this.renderFrame();
    }
  }, {
    key: "renderFrame",
    value: function renderFrame() {
      var camera = this.camera,
          renderer = this.renderer,
          scene = this.scene,
          mouseX = this.mouseX,
          mouseY = this.mouseY,
          startTime = this.startTime;


      if (!camera || !renderer) return;

      var position = (Date.now() - startTime) * 0.03 % 8000;

      camera.position.x += (mouseX - camera.position.x) * 0.01;
      camera.position.y += (-mouseY - camera.position.y) * 0.01;
      camera.position.z = -position + 8000;

      renderer.render(scene, camera);
    }
  }, {
    key: "animate",
    value: function animate() {

      this.requestID = requestAnimationFrame(this.animate);
      this.renderFrame();
    }
  }, {
    key: "launchAnimation",
    value: function launchAnimation() {

      if (this.requestID) return;

      this.animate();

      document.addEventListener("mousemove", this.onMouseMove, false);
    }
  }, {
    key: "stopAnimation",
    value: function stopAnimation() {

      cancelAnimationFrame(this.requestID);

      document.removeEventListener("mousemove", this.onMouseMove, false);

      this.requestID = null;
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {

      this.stopAnimation();

      window.removeEventListener("resize", this.onResize, false);

      this.renderer = null;
      this.camera = null;
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {

      return this.props.animate !== nextProps.animate;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {

      if (this.props.animate) this.launchAnimation();else this.stopAnimation();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var style = {
        width: "100%",
        height: "100%",
        backgroundColor: "#326696",
        overflow: "hidden"
      };

      var props = _extends({}, this.props);

      if (props.style) style = _extends({}, style, props.style);

      for (var n in this.constructor.propTypes) {
        delete props[n];
      }return _react2.default.createElement("div", _extends({}, props, { ref: function ref(node) {
          return _this2.container = node;
        }, style: style }));
    }
  }]);

  return Clouds;
}(_react.Component);

Clouds.propTypes = {
  animate: _react.PropTypes.bool.isRequired,
  style: _react.PropTypes.object
};

Clouds.defaultProps = { animate: false };

function mapStateToProps(state) {

  var data = state[_ducks.STATE_PROPERTY];

  return { animate: data && data.animate };
}

var _default = (0, _reactRedux.connect)(mapStateToProps)(Clouds);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Clouds, "Clouds", "src/components/Clouds/index.js");

  __REACT_HOT_LOADER__.register(mapStateToProps, "mapStateToProps", "src/components/Clouds/index.js");

  __REACT_HOT_LOADER__.register(_default, "default", "src/components/Clouds/index.js");
}();

;