import React from 'react'
import Team from '../Team'
import { render, Simulate, wait } from 'react-testing-library'
import MockedQuery from '../../utils/test-utils/MockedQuery'
import { teamMember } from '../__fixtures__/teamMember'
import { pageTeam } from '../__fixtures__/pageTeam'

describe('components/Team', () => {
  const mockedResponse = {
    pageTeam,
    team: teamMember,
  }

  it('renders Team', async () => {
    const { container } = render(
      <MockedQuery response={mockedResponse}>
        <Team />
      </MockedQuery>
    )

    await wait()

    expect(container).toMatchSnapshot()
  })

  it('should handle changing location using mouse', async () => {
    const { getByText, container } = render(
      <MockedQuery response={mockedResponse}>
        <Team />
      </MockedQuery>
    )

    await wait()

    Simulate.click(getByText('Stockholm'))

    expect(container).toMatchSnapshot()
  })

  it('should handle changing location using keyboard', async () => {
    const { getByText, container } = render(
      <MockedQuery response={mockedResponse}>
        <Team />
      </MockedQuery>
    )

    await wait()

    Simulate.keyUp(getByText('Göteborg'), {
      keyCode: 13,
    })

    expect(container).toMatchSnapshot()
  })

  it('should not change using keyboard if not enter or space key', async () => {
    const { getByText, container } = render(
      <MockedQuery response={mockedResponse}>
        <Team />
      </MockedQuery>
    )

    await wait()

    Simulate.keyUp(getByText('Göteborg'), {
      keyCode: 9,
    })

    expect(container).toMatchSnapshot()
  })
})
