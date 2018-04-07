import React from 'react'
import Footer from '../Footer'
import { render, wait } from 'react-testing-library'
import MockedQuery from '../../../utils/test-utils/MockedQuery'
import { addresses } from '../__fixtures__/addresses'

describe('components/Footer', () => {
  const mockedResponse = {
    addresses,
  }

  it('renders Footer', async () => {
    const { getByText, container } = render(
      <MockedQuery response={mockedResponse}>
        <Footer />
      </MockedQuery>
    )

    await wait(() => getByText('Stockholm'))

    expect(container).toMatchSnapshot()
  })
})
