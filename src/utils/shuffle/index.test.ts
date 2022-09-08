import shuffle from '.'
describe('shuffle', () => {
  it('return an array with the same length after beign shuffled', () => {
    const array = [1, 2, 3]
    shuffle(array)
    expect(array).toHaveLength(3)
  })
  it('return the array with same elements after being shuffled', () => {
    const array = [1, 2, 3]
    shuffle(array)
    expect(array).toContain(1)
    expect(array).toContain(2)
    expect(array).toContain(3)
  })
})
