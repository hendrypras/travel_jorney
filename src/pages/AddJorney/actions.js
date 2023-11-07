import { CREATE_JORNEY, SET_NEW_JORNEY } from './contants'

export const createJorney = data => ({
  type: CREATE_JORNEY,
  data,
})
export const setNewJorney = () => ({
  type: SET_NEW_JORNEY,
})
