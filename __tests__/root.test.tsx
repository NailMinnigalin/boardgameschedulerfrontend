import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import Page from '../src/app/page'
 
test('Root page has signIn button', () => {
  render(<Page />)
  expect(screen.getByRole('signIn_button')).toBeDefined()
})