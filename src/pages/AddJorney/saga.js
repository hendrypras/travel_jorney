import { call, put, takeLatest } from 'redux-saga/effects'
import { CREATE_JORNEY } from './contants'
import { createJorney } from '../../domain/api'
import { setNewJorney } from './actions'
import toast from 'react-hot-toast'

export function* doCreateJorney({ data }) {
  try {
    const response = yield call(createJorney, data)
    if (response) {
      yield put(setNewJorney())
      toast.success('Jorney Created')
    }
  } catch (error) {
    toast.error('Create Jorney Error,' + error.message)
  }
}

export function* addJorneySaga() {
  yield takeLatest(CREATE_JORNEY, doCreateJorney)
}
