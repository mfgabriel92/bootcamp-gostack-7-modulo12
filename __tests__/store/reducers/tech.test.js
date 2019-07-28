import reducer, { INITIAL_STATE } from '../../../src/store/tech/reducer'
import { addTech } from '../../../src/store/tech/actions'

describe('Techs reducer', () => {
  it('tech/ADD_TECH', () => {
    const state = reducer(INITIAL_STATE, addTech('Node.js'))
    expect(state).toStrictEqual(['Node.js'])
  })
})
