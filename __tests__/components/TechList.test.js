import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import TechList from '../../src/components/TechsList'

describe('TechList component', () => {
  it('should add a new tech to the list', () => {
    const { getByText, getByTestId, getByLabelText } = render(<TechList />)

    fireEvent.change(getByLabelText('Tech'), { target: { value: 'Node.js' } })
    fireEvent.submit(getByTestId('tech-form'))

    expect(getByTestId('techs-list')).toContainElement(getByText('Node.js'))
    expect(getByLabelText('Tech')).toHaveValue('')
  })
})
