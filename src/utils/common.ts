function toZero (n: number): string {
  if (n < 10) {
    return '0' + n
  } else {
    return '' + n 
  }
}

export {
  toZero
}
