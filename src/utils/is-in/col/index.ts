import { GRID, NUMBERS } from 'typings'

interface IInput {
  grid: GRID
  col: number
  value: NUMBERS
}
/**
 * A function taht returns tru if the value is already being used in the current grid column.
 * @param input objevt with 9x9 sudoku grid, column index and value
 */
function isInCol({ grid, col, value }: IInput): boolean {
  for (let i = 0; i < 9; i++) {
    if (value === grid[i][col]) return true
  }
  return false
}
export default isInCol
