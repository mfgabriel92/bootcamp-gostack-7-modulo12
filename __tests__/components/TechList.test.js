import React from 'react'
import { render, fireEvent, cleanup } from '@testing-library/react'
import TechList from '../../src/components/TechsList'

describe('TechList component', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it('should add a new tech to the list', () => {
    const { getByText, getByTestId, getByLabelText } = render(<TechList />)

    fireEvent.change(getByLabelText('Tech'), { target: { value: 'Node.js' } })
    fireEvent.submit(getByTestId('tech-form'))

    expect(getByTestId('techs-list')).toContainElement(getByText('Node.js'))
    expect(getByLabelText('Tech')).toHaveValue('')
  })

  it('store techs in local storage', () => {
    let { getByText, getByTestId, getByLabelText } = render(<TechList />)

    fireEvent.change(getByLabelText('Tech'), { target: { value: 'Node.js' } })
    fireEvent.submit(getByTestId('tech-form'))

    cleanup()
    ;({ getByText, getByTestId, getByLabelText } = render(<TechList />))

    expect(localStorage.setItem).toHaveBeenCalledWith('techs', JSON.stringify(['Node.js']))
    expect(getByTestId('techs-list')).toContainElement(getByText('Node.js'))
  })
})
