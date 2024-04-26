import * as THREE from 'three'
import * as dat from 'dat.gui'
import './style.css'
import { OrbitControls } from 'three/examples/jsm/Addons.js'

const render = new THREE.WebGLRenderer()

render.shadowMap.enabled = true  

render.setSize(window.innerWidth, window.innerHeight)

document.querySelector('#app').appendChild(render.domElement)

const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(
    75, 
    window.innerWidth / window.innerHeight,
    .1,
    1000
)

const orbit = new OrbitControls(camera, render.domElement)

const axesHelper = new THREE.AxesHelper(5)
scene.add(axesHelper)

camera.position.set(0, 2, 5)
orbit.update()

const boxGeometry = new THREE.BoxGeometry()
const boxMaterial = new THREE.MeshBasicMaterial({color: 0x0000FF})
const box = new THREE.Mesh(boxGeometry, boxMaterial)
scene.add(box)

const planeGeometry = new THREE.PlaneGeometry(30, 30)
const planeMaterial = new THREE.MeshStandardMaterial({
    color: 0xFFFFFF,
    side: THREE.DoubleSide
})
const plane = new THREE.Mesh(planeGeometry, planeMaterial)
scene.add(plane)
plane.rotation.x = -.5 * Math.PI
plane.receiveShadow =true

const gridHelper = new THREE.GridHelper(30)
scene.add(gridHelper)

const sphereGeometry = new THREE.SphereGeometry(4, 100, 100)
const sphereMaterial = new THREE.MeshStandardMaterial({
    color: "#ffea00",
    wireframe : false
})
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial)
scene.add(sphere)

sphere.position.set(-10, 10, 0)
sphere.castShadow = true

const ambientLight = new THREE.AmbientLight("#333333")
scene.add(ambientLight)

// const directionnalLight = new THREE.DirectionalLight("#FFFFFF", 1.8)
// scene.add(directionnalLight)
// directionnalLight.position.set(-30, 50, 0)
// directionnalLight.castShadow = true
// directionnalLight.shadow.camera.bottom = -12

// const dLightHelper = new THREE.DirectionalLightHelper(directionnalLight, 5)
// scene.add(dLightHelper)

// const dLightShadowHelper = new THREE.CameraHelper(directionnalLight.shadow.camera)
// scene.add(dLightShadowHelper)

const spolight = new THREE.SpotLight("#FFFFFF", 50000)
scene.add(spolight)
spolight.position.set(-100, 100, 0)
spolight.castShadow = true

const sLightHelper = new THREE.SpotLightHelper(spolight)
scene.add(sLightHelper)

// scene.fog = new THREE.Fog('#FFFFFF', 0, 2000)
scene.fog = new THREE.FogExp2('#FFFFFF', .01)

render.setClearColor("#FF0000")

const gui = new dat.GUI()

const options = {
    sphereColor : "#ffea00",
    wireframe : false,
    speed : .01,
    angle : .2,
    penumbra : 0,
    intensify: 50000
}

gui.addColor(options, 'sphereColor').onChange(e => {
    sphere.material.color.set(e)
})

gui.add(options, 'wireframe').onChange(e => {
    sphere.material.wireframe = e
})

gui.add(options, 'speed', 0, .1)

gui.add(options, 'angle', 0, 1)
gui.add(options, 'penumbra', 0, 1)
gui.add(options, 'intensify', 0, 100000)

let step = 0


function animate(time){
    box.rotation.x = time/1000
    box.rotation.y = time/1000

    step += options.speed
    sphere.position.y = 10 * Math.abs(Math.sin(step))

    spolight.angle = options.angle
    spolight.intensity = options.intensify
    spolight.penumbra = options.penumbra
    sLightHelper.update()

    render.render(scene, camera)
}

render.setAnimationLoop(animate)

