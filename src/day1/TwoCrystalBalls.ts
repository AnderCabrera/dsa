export default function two_crystal_balls(breaks: boolean[]): number {
  let jump = Math.floor(Math.sqrt(breaks.length));

  let i = jump

  for (; i < breaks.length; i += jump) {
    if (breaks[i]) {
      break;
    }
  }

  i -= jump;

  for (let j = 0; j <= jump && i < breaks.length; ++i) {
    if (breaks[i]) {
      return i;
    }
  }

  return -1;
}

console.log(two_crystal_balls([false, true, false, false, false, true, true, true, false]))
