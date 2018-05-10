import React from 'react'
import { render, wait } from 'react-testing-library'
import MockedQuery from '../../../utils/test-utils/MockedQuery'
import { addresses } from '../__fixtures__/addresses'
import Footer, { FOOTER_QUERY } from '../Footer'

const mocks = [
  {
    request: {
      query: FOOTER_QUERY,
    },
    result: {
      data: {
        addresses,
      },
    },
  },
]

describe('components/Footer', () => {
  it('renders Footer', async () => {
    const { getByText, container } = render(
      <MockedQuery mocks={mocks}>
        <Footer />
      </MockedQuery>
    )

    await wait(() => getByText('Stockholm'))

    expect(container).toMatchSnapshot()
  })
})
