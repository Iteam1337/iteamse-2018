import React from 'react'
import About from '../About'
import { render, wait } from 'react-testing-library'
import MockedQuery from '../../utils/test-utils/MockedQuery'
import { pageAboutUs } from '../__fixtures__/pageAboutUs'
import { teamMember } from '../__fixtures__/teamMember'

describe('components/About', () => {
  const mockedResponse = {
    pageAboutUs,
    teamMember,
  }

  it('renders About', async () => {
    const { getByText, container } = render(
      <MockedQuery response={mockedResponse}>
        <About />
      </MockedQuery>
    )

    await wait(() => getByText('skapa värde'))

    expect(container).toMatchSnapshot()
  })
})
