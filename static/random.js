class random {
    constructor() {

    }
    get(min, max) {
        if (max <= min) return false
        return Math.random() * (max - min) + min
    }
    getArray(min, max, num) {
        if (max <= min || num <= 0) return false
        let array = []
        for (let i = 0; i < num; i++) {
            array.push(this.get(min, max))
        }
        return array
    }
    getThreePointArray(min, max, num) { // getTPA
        if (max <= min || num <= 0) return false
        let array = []
        for (let i = 0; i < num; i++) {
            array.push(new THREE.Vector3(this.get(min, max), this.get(min, max), this.get(min, max)))
        }
        return array
    }
    getTPAInRange(xmin, xmax, ymin, ymax, zmin, zmax, num) {
        if (xmax <= xmin || ymax <= ymin || zmax <= zmin || num <= 0) return false
        let array = []
        for (let i = 0; i < num; i++) {
            array.push(new THREE.Vector3(this.get(xmin, xmax), this.get(ymin, ymax), this.get(zmin, zmax)))
        }
        return array
    }
    createRandomStars(scene, num, xmin, xmax, ymin, ymax) {
        let starArray = this.getTPAInRange(xmin, xmax, ymin, ymax, 0, 0.001, num)
        for (let i = 0; i < starArray.length; i++) {
            createStar(starArray[i], scene)
        }
    }
}