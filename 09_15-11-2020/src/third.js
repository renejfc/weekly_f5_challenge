'use strict'

export { pyramid };

const pyramid = (n = 5) => {
  const floors = n;
  const minPyramidFloors = 2;

  if (floors >= minPyramidFloors) {
    for (let i = 0; i < floors; i++) {
      const sharp = '#';
      const space = ' '

      const sharpBuilder = sharp.repeat([i]);
      const spaceBuilder = space.repeat(n - [i])

      const rightSide = sharpBuilder;
      const leftSide = `${spaceBuilder}${sharpBuilder}`
      const pyramidBuilder = `${leftSide} ${rightSide}`;

      console.log(pyramidBuilder)
    }
  }
}