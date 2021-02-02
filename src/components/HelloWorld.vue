<template>
  
</template>

<script>
export default {
  data () {
    return {
      // 全局变量
      scene: null,
      camera: null,
      renderer: null,
      cube: null,
      randomObject: null
    }
  },
  mounted () {
    // 主函数
    this.init()
    this.animate()
  },
  methods: {
    init() {
      this.scene = new THREE.Scene()
      console.log('scene', this.scene)
      this.camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 1000 );
      this.renderer = new THREE.WebGLRenderer()
      this.renderer.setSize(window.innerWidth, window.innerHeight)
      document.body.appendChild(this.renderer.domElement)
      this.scene.add( this.camera );
      const cameraZoom = 5
      this.camera.position.z = cameraZoom
      this.camera.lookAt(0, 0, 0)
      var geometry = new THREE.BoxGeometry( 1, 1, 1 );
      var material = new THREE.MeshBasicMaterial( {color: 0x00ff00} );
      this.cube = new THREE.Mesh( geometry, material );
      this.scene.add( this.cube );
      this.randomObject = new random()
      const xmin = -3
      const xmax = 3
      const ymin = -3
      const ymax = 3
      const starNum = 100
      this.randomObject.createRandomStars(this.scene, starNum, xmin, xmax, ymin, ymax)
    },
    animate() {
      requestAnimationFrame(this.animate);
      // this.cube.rotation.x += 0.1;
      // this.cube.rotation.y += 0.1;
      this.renderer.render(this.scene, this.camera);
    }
  }
}
</script>

<style>

</style>