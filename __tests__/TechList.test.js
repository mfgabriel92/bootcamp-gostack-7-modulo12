import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import TechList from '../src/components/TechsList'

describe('TechList component', () => {
  it('should add a new tech to the list', () => {
    const { getByText, getByTestId, debug } = render(<TechList />)
    debug()
    fireEvent.click(getByText('Add'))
    debug()

    expect(getByTestId('techs-list')).toContainElement(getByText('Node.js'))
  })
})
