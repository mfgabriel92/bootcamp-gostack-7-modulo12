import reducer, { INITIAL_STATE } from '../../../src/store/tech/reducer'
import { addTech } from '../../../src/store/tech/actions'

describe('Techs reducer', () => {
  it('DEFAULT', () => {
    const state = reducer(undefined, {})
    expect(state).toStrictEqual(INITIAL_STATE)
  })

  it('tech/ADD_TECH', () => {
    const state = reducer(INITIAL_STATE, addTech('Node.js'))
    expect(state).toStrictEqual(['Node.js'])
  })
})
