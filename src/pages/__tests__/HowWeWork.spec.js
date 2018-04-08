import React from 'react'
import HowWeWork from '../HowWeWork'
import { render, wait } from 'react-testing-library'
import MockedQuery from '../../utils/test-utils/MockedQuery'
import { pageHowWeWork } from '../__fixtures__/pageHowWeWork'
import { teamMembers } from '../__fixtures__/teamMembers'

describe('components/HowWeWork', () => {
  const mockedResponse = {
    pageHowWeWork,
    teamMembers,
  }

  it('renders HowWeWork', async () => {
    const { container } = render(
      <MockedQuery response={mockedResponse}>
        <HowWeWork />
      </MockedQuery>
    )

    await wait()

    expect(container).toMatchSnapshot()
  })
})
