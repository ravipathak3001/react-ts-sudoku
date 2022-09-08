import { AnyAction } from 'redux'
import { GRID } from 'typings'
import { compareArrays, copyGrid, createFullGrid, removeNumbers } from 'utils'
import { createGrid } from './actions'

import { IReducer } from './interfaces'
import * as types from './types'

const initialState: IReducer = {}

function reducer(state = initialState, action: AnyAction) {
  switch (action.type) {
    case types.CREATE_GRID: {
      const solvedGrid = createFullGrid()
      const gridCopy = copyGrid(solvedGrid)
      const challengeGrid = removeNumbers(gridCopy, 10)
      const workingGrid = copyGrid(challengeGrid)
      return {
        ...state,
        // grid: challengeGrid,
        challengeGrid,
        solvedGrid,
        workingGrid,
      }
    }
    case types.FILL_BLOCK: {
      if (state.workingGrid && state.solvedGrid) {
        if (
          state.solvedGrid[action.coords[0]][action.coords[1]] !== action.value
        ) {
          alert('Incorrect Option')
          return state
        }
        state.workingGrid[action.coords[0]][action.coords[1]] = action.value
        if (compareArrays(state.workingGrid, state.solvedGrid)) {
          alert('completed')
        }
        return { ...state, workingGrid: [...state.workingGrid] as GRID }
      }
      return state
    }
    case types.SELECT_BLOCK:
      return { ...state, selectedBlock: action.coords }
    default:
      return state
  }
}

export default reducer
