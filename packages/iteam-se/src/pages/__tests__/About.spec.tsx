import React from 'react'
import { render, wait } from 'react-testing-library'
import MockedQuery from '../../utils/test-utils/MockedQuery'
import { pageAboutUs } from '../__fixtures__/pageAboutUs'
import { TeamQueryMock } from '../__fixtures__/teamMock'
import About, { ABOUT_PAGE_QUERY } from '../About'

const mocks = [
  {
    request: {
      query: ABOUT_PAGE_QUERY,
    },
    result: {
      data: {
        pageAboutUs,
      },
    },
  },
  TeamQueryMock,
]

describe('components/About', () => {
  it('renders About', async () => {
    const { container } = render(
      <MockedQuery mocks={mocks}>
        <About />
      </MockedQuery>
    )

    await wait()

    expect(container).toMatchSnapshot()
  })
})
