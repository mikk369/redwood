import { render } from '@redwoodjs/testing/web'

import TablePage from './TablePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('TablePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TablePage />)
    }).not.toThrow()
  })
})
