import React from 'react'
import { render, wait } from 'react-testing-library'

import { HomePageQuery } from '../../../../typings/iteamse'
import { pageStart } from '../../../pages/__fixtures__/pageStart'
import { TeamQueryMock } from '../../../pages/__fixtures__/teamMock'
import { HOME_PAGE_QUERY } from '../../../pages/Home'
import MockedQuery from '../../../utils/test-utils/MockedQuery'

import { Query } from 'react-apollo'
import queryWithLoading from '../QueryWithLoading'

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
  TeamQueryMock,
]

describe('components/QueryWithLoading', () => {
  it('renders', async () => {
    class HomeQuery extends Query<HomePageQuery> {}
    const HomeQueryWithLoading = queryWithLoading(HomeQuery)
    const { container } = render(
      <MockedQuery mocks={mocks}>
        <HomeQueryWithLoading query={HOME_PAGE_QUERY}>
          {data => <pre>{JSON.stringify(data, null, 2)}</pre>}
        </HomeQueryWithLoading>
      </MockedQuery>
    )

    await wait()

    expect(container).toMatchSnapshot()
  })

  it('renders loading indicator when passed no data', async () => {
    class HomeQuery extends Query<HomePageQuery> {}
    const HomeQueryWithLoading = queryWithLoading(HomeQuery)
    const { container } = render(
      <MockedQuery mocks={[]}>
        <HomeQueryWithLoading query={HOME_PAGE_QUERY}>
          {data => <pre>{JSON.stringify(data, null, 2)}</pre>}
        </HomeQueryWithLoading>
      </MockedQuery>
    )

    await wait()

    expect(container).toMatchSnapshot()
  })
})
