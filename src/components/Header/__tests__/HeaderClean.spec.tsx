import * as React from 'react'
import { render, wait } from 'react-testing-library'
import MockedQuery from '../../../utils/test-utils/MockedQuery'
import HeaderClean from '../HeaderClean'

describe('components/HeaderClean', () => {
  const mocks = {}

  it('renders HeaderClean', async () => {
    const { container } = render(
      <MockedQuery mocks={mocks}>
        <HeaderClean />
      </MockedQuery>
    )

    await wait()

    expect(container).toMatchSnapshot()
  })
})
