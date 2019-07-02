import React from 'react'
import { render, wait } from 'react-testing-library'
import MockedQuery from '../../utils/test-utils/MockedQuery'
import { offers } from '../__fixtures__/offer'
import { pageOffers } from '../__fixtures__/pageOffers'
import { TeamQueryMock } from '../__fixtures__/teamMock'
import Offers, { OFFERS_PAGE_QUERY } from '../Offers'

const mocks = [
  {
    request: {
      query: OFFERS_PAGE_QUERY,
    },
    result: {
      data: {
        offers,
        pageOffers,
      },
    },
  },
  TeamQueryMock,
]

describe('components/Offers', () => {
  it('renders Offers', async () => {
    const { container } = render(
      <MockedQuery mocks={mocks}>
        <Offers />
      </MockedQuery>
    )

    await wait()

    expect(container).toMatchSnapshot()
  })
})
