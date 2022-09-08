import { GRID, N, NUMBERS } from 'typings'

interface IInput {
  grid: GRID
  row: number
  value: NUMBERS
}
/**
 * A function returns true if a value is already being used in the current grid row.
 * @param input Object with 9x9 Grid, row index and value
 */
function isInRow({ grid, row, value }: IInput): boolean {
  return grid[row].includes(value)
}
export default isInRow
