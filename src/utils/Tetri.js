import { Piece } from './Piece'

class TetriI extends Piece {
  constructor() {
    super('I', 3)
    this.value[0] = [
      [1],
      [1],
      [1],
      [1],
    ]
    this.value[1] = [
      [1, 1, 1, 1],
    ]
    this.value[2] = [
      [1],
      [1],
      [1],
      [1],
    ]
  }

  getValue(index = 0) {
    return this.value[index]
  }
}

class TetriO extends Piece {
  constructor() {
    super('O', 1)
    this.value[0] = [
      [1, 1],
      [1, 1],
    ]
  }

  getValue() {
    return this.value[0]
  }
}

class TetriT extends Piece {
  constructor() {
    super('T', 4)
    this.value[0] = [
      [0, 1, 0],
      [1, 1, 1],
    ]
    this.value[1] = [
      [1, 0],
      [1, 1],
      [1, 0],
    ]
    this.value[2] = [
      [1, 1, 1],
      [0, 1, 0],
    ]
    this.value[3] = [
      [0, 1],
      [1, 1],
      [0, 1],
    ]
  }

  getValue(index = 0) {
    return this.value[index]
  }
}

class TetriL extends Piece {
  constructor() {
    super('L', 4)
    this.value[0] = [
      [0, 0, 1],
      [1, 1, 1],
    ]
    this.value[1] = [
      [1],
      [1],
      [1, 1],
    ]
    this.value[2] = [
      [1, 1, 1],
      [1],
    ]
    this.value[3] = [
      [1, 1],
      [0, 1],
      [0, 1],
    ]
  }

  getValue(index = 0) {
    return this.value[index]
  }
}

class TetriJ extends Piece {
  constructor() {
    super('J', 4)
    this.value[0] = [
      [1],
      [1, 1, 1],
    ]
    this.value[1] = [
      [1, 1],
      [1],
      [1],
    ]
    this.value[2] = [
      [1, 1, 1],
      [0, 0, 1],
    ]
    this.value[3] = [
      [0, 1],
      [0, 1],
      [1, 1],
    ]
  }

  getValue(index = 0) {
    return this.value[index]
  }
}

class TetriZ extends Piece {
  constructor() {
    super('Z', 4)
    this.value[0] = [
      [1, 1, 0],
      [0, 1, 1],
    ]
    this.value[1] = [
      [0, 1],
      [1, 1],
      [1],
    ]
    this.value[2] = [
      [1, 1],
      [0, 1, 1],
    ]
    this.value[3] = [
      [0, 1],
      [1, 1],
      [1],
    ]
  }

  getValue(index = 0) {
    return this.value[index]
  }
}

class TetriS extends Piece {
  constructor() {
    super('S', 4)
    this.value[0] = [
      [0, 1, 1],
      [1, 1],
    ]
    this.value[1] = [
      [1, 0],
      [1, 1],
      [0, 1],
    ]
    this.value[2] = [
      [0, 1, 1],
      [1, 1, 0],
    ]
    this.value[3] = [
      [1, 0],
      [1, 1],
      [0, 1],
    ]
  }

  getValue(index = 0) {
    return this.value[index]
  }
}

module.exports = {
  I: new TetriI(),
  O: new TetriO(),
  T: new TetriT(),
  L: new TetriL(),
  J: new TetriJ(),
  Z: new TetriZ(),
  S: new TetriS(),
}
