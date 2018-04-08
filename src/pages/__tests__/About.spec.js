import React from 'react'
import About from '../About'
import { render, wait } from 'react-testing-library'
import MockedQuery from '../../utils/test-utils/MockedQuery'
import { pageAboutUs } from '../__fixtures__/pageAboutUs'
import { teamMembers } from '../__fixtures__/teamMembers'

describe('components/About', () => {
  const mockedResponse = {
    pageAboutUs,
    teamMembers,
  }

  it('renders About', async () => {
    const { container } = render(
      <MockedQuery response={mockedResponse}>
        <About />
      </MockedQuery>
    )

    await wait()

    expect(container).toMatchSnapshot()
  })
})
