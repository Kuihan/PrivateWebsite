function createStar(threepoint, scene) {
    console.log(THREE)
    let geometry = new THREE.Geometry()
    geometry.vertices.push(threepoint)
    let material = new THREE.PointsMaterial({
        color: 0xff0000, 
        size: 4, 
        map: createCircle()
    })
    let point = new THREE.Points(geometry, material)
    scene.add(point)
}