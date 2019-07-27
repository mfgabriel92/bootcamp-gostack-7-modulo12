import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { render, fireEvent } from '@testing-library/react'
import { addTech } from '../../src/store/tech/actions'
import TechList from '../../src/components/TechsList'

jest.mock('react-redux')

describe('TechList component', () => {
  it('should render techlist', () => {
    useSelector.mockImplementation(cb =>
      cb({
        techs: ['Node.js', 'ReactJS']
      })
    )

    const { getByText, getByTestId } = render(<TechList />)

    expect(getByTestId('techs-list')).toContainElement(getByText('Node.js'))
    expect(getByTestId('techs-list')).toContainElement(getByText('ReactJS'))
  })

  it('should be able to add a new tech to the list', () => {
    const { getByTestId, getByLabelText } = render(<TechList />)
    const dispatch = jest.fn()

    useDispatch.mockReturnValue(dispatch)

    fireEvent.change(getByLabelText('Tech'), { target: { value: 'Jest' } })
    fireEvent.submit(getByTestId('tech-form'))

    console.log(dispatch.mock.calls)

    expect(dispatch).toHaveBeenCalledWith(addTech('Jest'))
  })
})
