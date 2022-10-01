import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

const Example = () => {
  return (
    <>
      <span>Test</span>
    </>
  )
}

describe('ExampleTest', () => {
  test('case 1', () => {
    // Given
    const expected = 'Test'
    // When
    render(<Example />)
    // Then
    expect(screen.getByText(expected)).toBeInTheDocument()
  })
})
