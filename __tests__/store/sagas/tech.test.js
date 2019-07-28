import { runSaga } from 'redux-saga'
import ApiMock from 'axios-mock-adapter'
import api from '../../../src/services/api'
import { getTechsSuccess, getTechsFailure } from '../../../src/store/tech/actions'
import { getTechs } from '../../../src/store/tech/sagas'

const apiMock = new ApiMock(api)

describe('Techs saga', () => {
  it('should be able to fetch the techs', async () => {
    apiMock.onGet('techs').reply(200, ['Node.js'])

    const dispatch = jest.fn()
    await runSaga({ dispatch }, getTechs).toPromise()

    expect(dispatch).toHaveBeenCalledWith(getTechsSuccess(['Node.js']))
  })

  it('should fail when api returns an error', async () => {
    apiMock.onGet('techs').reply(500)

    const dispatch = jest.fn()
    await runSaga({ dispatch }, getTechs).toPromise()

    expect(dispatch).toHaveBeenCalledWith(getTechsFailure())
  })
})
