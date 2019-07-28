import { call, put } from 'redux-saga/effects'
import api from '../../services/api'
import { getTechsSuccess, getTechsFailure } from '../../store/tech/actions'

export function* getTechs() {
  try {
    const { data } = yield call(api.get, 'techs')
    yield put(getTechsSuccess(data))
  } catch (e) {
    yield put(getTechsFailure())
  }
}
