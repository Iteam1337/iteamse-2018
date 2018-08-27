import React from 'react'
import { render, wait } from 'react-testing-library'
import App from '../App'
import { addresses } from '../components/Footer/__fixtures__/addresses'
import { FOOTER_QUERY } from '../components/Footer/Footer'
import { pageStart } from '../pages/__fixtures__/pageStart'
import { TeamQueryMock } from '../pages/__fixtures__/teamMock'
import { HOME_PAGE_QUERY } from '../pages/Home'
import MockedQuery from '../utils/test-utils/MockedQuery'

const mocks = [
  {
    request: {
      query: HOME_PAGE_QUERY,
    },
    result: {
      data: {
        pageStart,
      },
    },
  },
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
  TeamQueryMock,
]

describe('App', () => {
  it('renders App', async () => {
    const { container } = render(
      <MockedQuery location={{ pathname: '/' }} mocks={mocks}>
        <App />
      </MockedQuery>
    )

    await wait()

    expect(container).toMatchSnapshot()
  })
})
