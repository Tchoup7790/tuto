import * as THREE from 'three'
import * as dat from 'dat.gui'
import './style.css'
import { OrbitControls } from 'three/examples/jsm/Addons.js'

import img from './img/baniere.jpg'

const render = new THREE.WebGLRenderer()

render.shadowMap.enabled = true

render.setSize(window.innerWidth, window.innerHeight)

document.querySelector('#app').appendChild(render.domElement)

const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, .1, 1000)

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

// render.setClearColor("#FF0000")

const textureLoader = new THREE.TextureLoader()
scene.background = textureLoader.load(img)
const cubeTextureLoader = new THREE.CubeTextureLoader()
// scene.background = cubeTextureLoader.load([
//   img, img, img, img, img, img
// ])

const box2Geometry = new THREE.BoxGeometry(4, 4, 4)
const box2Material = new THREE.MeshBasicMaterial({
  // color: "#00FF00",
  // map: textureLoader.load(img)
})
const box2MultiMaterial = [
  new THREE.MeshBasicMaterial({map: textureLoader.load(img)}),
  new THREE.MeshBasicMaterial({map: textureLoader.load(img)}),
  new THREE.MeshBasicMaterial({color: "#00FF00"}),
  new THREE.MeshBasicMaterial({map: textureLoader.load(img)}),
  new THREE.MeshBasicMaterial({map: textureLoader.load(img)}),
  new THREE.MeshBasicMaterial({color: "#00FFFF"}),
]
const box2 = new THREE.Mesh(box2Geometry, box2MultiMaterial)
scene.add(box2)
box2.position.set(0, 15, 10)
// box2.material.map= textureLoader.load(img)


const plane2Geometry = new THREE.PlaneGeometry(10, 10, 10, 10)
const plane2Material = new THREE.MeshBasicMaterial({
    color: "#FFFFFF",
    wireframe: true
})
const plane2 = new THREE.Mesh(plane2Geometry, plane2Material)
scene.add(plane2)
plane2.position.set(10, 10, 15)

plane2.geometry.attributes.position.array[0] -= 10 * Math.random()
plane2.geometry.attributes.position.array[1] -= 10 * Math.random()
plane2.geometry.attributes.position.array[2] -= 10 * Math.random()
const lastPointZ = plane2.geometry.attributes.position.array.length -1
plane2.geometry.attributes.position.array[lastPointZ] -= 10 * Math.random()


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

const mousePosition = new THREE.Vector2()

window.addEventListener('mousemove', (e) => {
  mousePosition.x = (e.clientX / window.innerWidth) * 2 - 1
  mousePosition.y = (e.clientY / window.innerHeight) * 2 - 1
})

const rayCaster = new THREE.Raycaster()

const sphereId = sphere.id
box2.name = 'theBox'

function animate(time){
    box.rotation.x = time/1000
    box.rotation.y = time/1000

    step += options.speed
    sphere.position.y = 10 * Math.abs(Math.sin(step))

    spolight.angle = options.angle
    spolight.intensity = options.intensify
    spolight.penumbra = options.penumbra
    sLightHelper.update()

    rayCaster.setFromCamera(mousePosition, camera)
    const intersects = rayCaster.intersectObjects(scene.children)
    // console.log(intersects)

    for(let i = 0; i < intersects.length; i++){
        if(intersects[i].object.id === sphereId)
            intersects[i].object.material.color.set(0xFFFFFF)
        if(intersects[i].object.name === "theBox"){
            intersects[i].object.rotation.x = time/1000
            intersects[i].object.rotation.y = time/1000
        }
    }

    plane2.geometry.attributes.position.array[0] = 10 * Math.random()
    plane2.geometry.attributes.position.array[1] = 10 * Math.random()
    plane2.geometry.attributes.position.array[2] = 10 * Math.random()
    plane2.geometry.attributes.position.array[lastPointZ] = 10 * Math.random()
    plane2.geometry.attributes.position.needsUpdate = true

    render.render(scene, camera)
}

render.setAnimationLoop(animate)

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    render.setSize(window.innerWidth, window.innerHeight)
} )
