import { produce } from 'immer'
import { SET_NEW_JORNEY } from './contants'
export const initialState = {
  createDataStatus: false,
}

const addJorneyReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case SET_NEW_JORNEY:
        draft.createDataStatus = true
        break
    }
  })

export default addJorneyReducer
