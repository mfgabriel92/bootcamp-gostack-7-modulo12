import { runSaga } from 'redux-saga'
import { getTechsSuccess } from '../../../src/store/tech/actions'
import { getTechs } from '../../../src/store/tech/sagas'

describe('Techs saga', () => {
  it('should be able to fetch the techs', async () => {
    const dispatch = jest.fn()
    await runSaga({ dispatch }, getTechs).toPromise()

    expect(dispatch).toHaveBeenCalledWith(getTechsSuccess(['Node.js']))
  })
})
