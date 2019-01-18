import React from 'react'
import { render, wait } from 'react-testing-library'
import MockedQuery from '../../utils/test-utils/MockedQuery'
import { NotFound } from '../NotFound'

describe('components/NotFound', () => {
  it('renders NotFound', async () => {
    const { container } = render(
      <MockedQuery mocks={[]}>
        <NotFound />
      </MockedQuery>
    )

    await wait()

    expect(container).toMatchSnapshot()
  })
})
