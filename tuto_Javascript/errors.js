class Rectangle {

    constructor (width, height) {
        if (width <= 0 || height <= 0){
            throw new RectangleError('Cannot have value equals to 0')
        }
        this.width = width
        this.height = height
    }

    get perimeter () {
        return (this.width + this.height) * 2
    }

    get isValid () {
        return this.width > 0 && this.height > 0
    }

    isBiggerThan (shape) {
        return this.perimeter > shape.perimeter
    }

}

class Square extends Rectangle {
    constructor(width) {
        super(width, width)
    }
}

class RectangleError extends Error{}

try {
    const r = new Rectangle(-10, 20)
}catch (e) {
    if (e instanceof RectangleError){
        console.log(e.message)
    }else{
        console.log('basic error')
    }
}

