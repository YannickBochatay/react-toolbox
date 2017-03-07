import React, { Component, PropTypes } from "react"
import { connect } from "react-redux"
import nuageSRC from "./nuage.png"
import $ from "jquery"
import {
  PerspectiveCamera,
  Scene,
  Geometry,
  TextureLoader,
  LinearMipMapLinearFilter,
  Fog,
  ShaderMaterial,
  Mesh,
  PlaneGeometry,
  WebGLRenderer
} from "three"

import { STATE_PROPERTY } from "./ducks"

export {
  STATE_PROPERTY,
  reducer,
  launchCloudsAnimation,
  toggleCloudsAnimation,
  showClouds,
  hideClouds,
  toggleClouds
} from "./ducks"

export class Clouds extends Component {

  constructor(props) {

    super(props)

    this.onMouseMove = this.onMouseMove.bind(this)
    this.onResize = this.onResize.bind(this)
    this.animate = this.animate.bind(this)

    this.mouseX = 0
    this.mouseY = 0

    this.width = 0
    this.height = 0

  }

  getVertexShader() {

    return `varying vec2 vUv;

      void main() {

        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

      }`

  }

  getFragmentShader() {

    return `uniform sampler2D map;

      uniform vec3 fogColor;
      uniform float fogNear;
      uniform float fogFar;

      varying vec2 vUv;

      void main() {

        float depth = gl_FragCoord.z / gl_FragCoord.w;
        float fogFactor = smoothstep( fogNear, fogFar, depth );

        gl_FragColor = texture2D( map, vUv );
        gl_FragColor.w *= pow( gl_FragCoord.z, 20.0 );
        gl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );

      }`

  }

  createGradient() {

    const canvas = document.createElement("canvas")

    canvas.width = 32
    canvas.height = this.height

    const context = canvas.getContext("2d")
    const gradient = context.createLinearGradient(0, 0, 0, canvas.height)

    gradient.addColorStop(0, "#1e4877")
    gradient.addColorStop(0.5, "#4584b4")

    context.fillStyle = gradient
    context.fillRect(0, 0, canvas.width, canvas.height)

    return canvas.toDataURL("image/png")

  }

  applyGradient(gradient) {

    $(this.container).css({
      background : "url(" + gradient + ")",
      backgroundSize : "32px 100%"
    })

  }

  createCamera() {

    const camera = new PerspectiveCamera(30, this.width / this.height, 1, 3000)

    camera.position.z = 6000

    return camera

  }

  createGeometry() {

    const geometry = new Geometry()

    const plane = new Mesh(new PlaneGeometry(64, 64))

    for (let i = 0; i < 8000; i++) {

      plane.position.x = (Math.random() * 1000) - 500
      plane.position.y = -(Math.random() * Math.random() * 200) - 15
      plane.position.z = i
      plane.rotation.z = Math.random() * Math.PI
      plane.scale.x = plane.scale.y = (Math.random() * Math.random() * 1.5) + 0.5

      plane.updateMatrix()
      geometry.merge(plane.geometry, plane.matrix)

    }

    return geometry

  }

  createMaterial(texture) {

    const fog = new Fog(0x4584b4, -100, 3000)

    return new ShaderMaterial({

      uniforms : {

        map : { type : "t", value : texture },
        fogColor : { type : "c", value : fog.color },
        fogNear : { type : "f", value : fog.near },
        fogFar : { type : "f", value : fog.far }

      },
      vertexShader : this.getVertexShader(),
      fragmentShader : this.getFragmentShader(),
      depthWrite : false,
      depthTest : false,
      transparent : true

    })

  }

  createRenderer() {

    const renderer = new WebGLRenderer({ antialias : false, alpha : true })

    renderer.setSize(this.width, this.height)

    $(this.container).append(renderer.domElement)

    return renderer

  }

  createMesh(texture) {

    const material = this.createMaterial(texture)

    const geometry = this.createGeometry()

    return new Mesh(geometry, material)

  }

  createScene(texture) {

    const scene = new Scene()

    const mesh = this.createMesh(texture)

    scene.add(mesh)

    return scene

  }

  onTextureLoad(texture) {

    this.textureLoaded = true

    texture.magFilter = LinearMipMapLinearFilter
    texture.minFilter = LinearMipMapLinearFilter

    this.scene = this.createScene(texture)

    this.camera = this.createCamera()

    this.renderer = this.createRenderer()

    this.startTime = Date.now()

    if (this.props.animate) this.launchAnimation()
    else this.renderFrame()

    window.addEventListener("resize", this.onResize, false)

  }

  setDimensions() {

    const $container = $(this.container)

    this.width = $container.width()
    this.height = $container.height()

  }

  componentDidMount() {

    this.setDimensions()

    this.applyGradient(this.createGradient())

    new TextureLoader().load(nuageSRC, this.onTextureLoad.bind(this))

  }

  onMouseMove(e) {

    const { width, height } = this

    this.mouseX = (e.clientX - (width / 2)) * 0.25
    this.mouseY = (e.clientY - (height / 2)) * 0.15

  }

  onResize() {

    const { camera, renderer } = this

    this.setDimensions()

    camera.aspect = this.width / this.height
    camera.updateProjectionMatrix()

    renderer.setSize(this.width, this.height)

    if (!this.props.animate) this.renderFrame()

  }

  renderFrame() {

    const { camera, renderer, scene, mouseX, mouseY, startTime } = this

    if (!camera || !renderer) return

    const position = ((Date.now() - startTime) * 0.03) % 8000

    camera.position.x += (mouseX - camera.position.x) * 0.01
    camera.position.y += (-mouseY - camera.position.y) * 0.01
    camera.position.z = -position + 8000

    renderer.render(scene, camera)

  }

  animate() {

    this.requestID = requestAnimationFrame(this.animate)
    this.renderFrame()

  }

  launchAnimation() {

    if (this.requestID) return

    this.animate()

    document.addEventListener("mousemove", this.onMouseMove, false)

  }

  stopAnimation() {

    cancelAnimationFrame(this.requestID)

    document.removeEventListener("mousemove", this.onMouseMove, false)

    this.requestID = null

  }

  componentWillUnmount() {

    this.stopAnimation()

    window.removeEventListener("resize", this.onResize, false)

    this.renderer = null
    this.camera = null

  }

  shouldComponentUpdate(nextProps) {

    return this.props.animate !== nextProps.animate

  }

  componentDidUpdate() {

    if (this.props.animate) this.launchAnimation()
    else this.stopAnimation()

  }

  render() {

    let style = {
      width : "100%",
      height : "100%",
      backgroundColor : "#326696",
      overflow : "hidden"
    }

    const props = { ...this.props }

    if (props.style) style = { ...style, ...props.style }

    for (const n in this.constructor.propTypes) delete props[n]

    return <div { ...props } ref={ node => this.container = node } style={ style }/>

  }

}

Clouds.propTypes = {
  animate : PropTypes.bool.isRequired,
  style : PropTypes.object
}

Clouds.defaultProps = { animate : false }

function mapStateToProps(state) {

  const data = state[STATE_PROPERTY]

  return { animate : data && data.animate }

}

export default connect(mapStateToProps)(Clouds)
