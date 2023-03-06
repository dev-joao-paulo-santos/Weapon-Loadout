import * as THREE from 'three'
import {GLTFLoader} from 'GLTFLoader'
import {OrbitControls} from 'OrbitControls'

var scene, camera, renderer, cube, controls

var canvas = document.getElementById("scene")
var canvasWidth = document.getElementById("scene").clientWidth
var canvasHeight = document.getElementById("scene").clientHeight

function init(){
    scene = new THREE.Scene()
    scene.background = new THREE.TextureLoader().load('./bkg.png')
    renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        antialias: true
    })

    renderer.setSize(canvasWidth, canvasHeight)


    camera = new THREE.PerspectiveCamera(45, canvasWidth / canvasHeight, .001, 1000)
    scene.add(camera)
    camera.position.z = 1



    const light = new THREE.PointLight(0xffffff, 10, 2)
    light.position.set(0, .1, .3)
    scene.add(light)

    const light2 = new THREE.PointLight(0xffffff, 7, 2)
    light2.position.set(0, -.1, -.3)
    scene.add(light2)

    const primalight = new THREE.AmbientLight(0xffffff, 2.5)
    scene.add(primalight)

    const loader = new GLTFLoader()

const cube = new THREE.Mesh(
    new THREE.BoxGeometry(.0001, .0001, .0001),
    new THREE.MeshBasicMaterial({color: ('#ff0000'), transparent: true, opacity: 0})
)
scene.add(cube)

    let gun

    const b1 = document.getElementById("g1")
    const b2 = document.getElementById("g2")
    const b3 = document.getElementById("g3")
    const b4 = document.getElementById("g4")
    const b5 = document.getElementById("g5")
    const b6 = document.getElementById("g6")
    const b7 = document.getElementById("g7")

    

    b1.addEventListener('click', ()=>{
        cube.remove(gun)
        loader.load('./models/m4a1/scene.gltf', (gltf)=>{
            gun = gltf.scene.children[0]
            cube.add(gun)
            camera.lookAt(gun.position.x, gun.position.y, gun.position.z) 
            gun.rotation.z = Math.atan(90)
        })

    })

    b2.addEventListener('click', ()=>{
        cube.remove(gun)
        loader.load('./models/ak47/scene.gltf', (gltf)=>{
            gun = gltf.scene.children[0]
            gun.scale.set(.01, .01, .01)
            cube.add(gun)
            camera.lookAt(gun.position.x, gun.position.y, gun.position.z) 
            gun.rotation.z = Math.atan(90)
        })

    })
    b3.addEventListener('click', ()=>{
        cube.remove(gun)
        loader.load('./models/m1014/scene.gltf', (gltf)=>{
            gun = gltf.scene.children[0]
            gun.scale.set(.017, .017, .017)
            cube.add(gun)
            camera.lookAt(gun.position.x, gun.position.y, gun.position.z) 
            gun.rotation.z = Math.atan(90)
        })

    })
    b4.addEventListener('click', ()=>{
        cube.remove(gun)
        loader.load('./models/m200/scene.gltf', (gltf)=>{
            gun = gltf.scene.children[0]
            gun.scale.set(.8, .8, .8)
            //gun.position.y = -.09
            cube.add(gun)
            camera.lookAt(gun.position.x, gun.position.y, gun.position.z) 
            gun.rotation.z = Math.atan(90)
        })

    })
    b5.addEventListener('click', ()=>{
        cube.remove(gun)
        loader.load('./models/deagle/scene.gltf', (gltf)=>{
            gun = gltf.scene.children[0]
            gun.scale.set(.007, .007, .007)
            cube.add(gun)
            camera.lookAt(gun.position.x, gun.position.y, gun.position.z) 
            gun.rotation.z = Math.atan(90)
        })

    })
    b6.addEventListener('click', ()=>{
        cube.remove(gun)
        loader.load('./models/pkm/scene.gltf', (gltf)=>{
            gun = gltf.scene.children[0]
            gun.scale.set(.0007, .0007, .0007)
            gun.position.y = -.1
            cube.add(gun)
            camera.lookAt(gun.position.x, gun.position.y, gun.position.z) 
            gun.rotation.z = Math.atan(90)
        })

    })
    b7.addEventListener('click', ()=>{
        cube.remove(gun)
        loader.load('./models/scar/scene.gltf', (gltf)=>{
            gun = gltf.scene.children[0]
            
            cube.add(gun)
            camera.lookAt(gun.position.x, gun.position.y, gun.position.z) 
            gun.rotation.z = Math.atan(90)
        })

    })





    function animate(){
        requestAnimationFrame(animate)
        cube.rotation.y += 0.001
        controls = new OrbitControls(camera, renderer.domElement)
        controls.update()
        controls.rotateSpeed = .0006
        controls.zoomSpeed = .00004
        renderer.render(scene, camera)

        
    }
    animate()
}

init()


