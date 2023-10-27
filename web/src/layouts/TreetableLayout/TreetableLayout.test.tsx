import { render } from '@redwoodjs/testing/web'

import TreetableLayout from './TreetableLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('TreetableLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TreetableLayout />)
    }).not.toThrow()
  })
})
