function createCircle() {
    let cvs = document.createElement("canvas")
    let ctx = cvs.getContext("2d")
    cvs.width = 100
    cvs.height = 100
    ctx.fillStyle = "#ffff00"
    ctx.arc(50, 50, 45, 0,2 * Math.PI)
    ctx.fill()
    let texture = new THREE.Texture(cvs)
    texture.needsUpdate = true
    return texture
}