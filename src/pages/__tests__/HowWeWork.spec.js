import React from 'react'
import HowWeWork from '../HowWeWork'
import { render, wait } from 'react-testing-library'
import MockedQuery from '../../utils/test-utils/MockedQuery'
import { pageHowWeWork } from '../__fixtures__/pageHowWeWork'
import { teamMember } from '../__fixtures__/teamMember'

describe('components/HowWeWork', () => {
  const mockedResponse = {
    pageHowWeWork,
    teamMember,
  }

  it('renders HowWeWork', async () => {
    const { getByText, container } = render(
      <MockedQuery response={mockedResponse}>
        <HowWeWork />
      </MockedQuery>
    )

    await wait(() => getByText('Delar allt'))

    expect(container).toMatchSnapshot()
  })
})
