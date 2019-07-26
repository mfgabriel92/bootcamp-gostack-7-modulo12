import React from 'react'
import { useSelector } from 'react-redux'
import { render } from '@testing-library/react'
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
})
