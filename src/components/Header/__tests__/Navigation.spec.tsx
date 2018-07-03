import React from 'react'
import { render, Simulate, wait } from 'react-testing-library'
import MockedQuery from '../../../utils/test-utils/MockedQuery'
import { Navigation } from '../Navigation'

jest.mock('graphql-tag', () => jest.fn(input => input))

describe('components/Navigation', () => {
  let client: any
  const mocks = {}

  beforeEach(() => {
    client = {
      query: jest.fn(),
    }
  })

  it('handle hover of about page', async () => {
    const { getByText } = render(
      <MockedQuery mocks={mocks}>
        <Navigation client={client} />
      </MockedQuery>
    )

    await wait()

    Simulate.mouseEnter(getByText('Om'))

    expect(client.query.mock.calls[0][0]).toMatchSnapshot()
  })

  it('handle hover of logo', async () => {
    const { getByTestId } = render(
      <MockedQuery mocks={mocks}>
        <Navigation client={client} />
      </MockedQuery>
    )

    await wait()

    Simulate.mouseEnter(getByTestId('logo').parentNode)

    expect(client.query.mock.calls[0][0]).toMatchSnapshot()
  })

  it('handle hover of how we work', async () => {
    const { getByText } = render(
      <MockedQuery mocks={mocks}>
        <Navigation client={client} />
      </MockedQuery>
    )

    await wait()

    Simulate.mouseEnter(getByText('Metod'))

    expect(client.query.mock.calls[0][0]).toMatchSnapshot()
  })

  it('handle hover of the team page', async () => {
    const { getByText } = render(
      <MockedQuery mocks={mocks}>
        <Navigation client={client} />
      </MockedQuery>
    )

    await wait()

    Simulate.mouseEnter(getByText('Medarbetare'))

    expect(client.query.mock.calls[0][0]).toMatchSnapshot()
  })

  it('handle hover of our projects', async () => {
    const { getByText } = render(
      <MockedQuery mocks={mocks}>
        <Navigation client={client} />
      </MockedQuery>
    )

    await wait()

    Simulate.mouseEnter(getByText('Case'))

    expect(client.query.mock.calls[0][0]).toMatchSnapshot()
  })

  it('handle hover of work with us', async () => {
    const { getByText } = render(
      <MockedQuery mocks={mocks}>
        <Navigation client={client} />
      </MockedQuery>
    )

    await wait()

    Simulate.mouseEnter(getByText('Karriär'))

    expect(client.query.mock.calls[0][0]).toMatchSnapshot()
  })

  it('handle hover of operations', async () => {
    const { getByText } = render(
      <MockedQuery mocks={mocks}>
        <Navigation client={client} />
      </MockedQuery>
    )

    await wait()

    Simulate.mouseEnter(getByText('Drift & Support'))

    expect(client.query.mock.calls[0][0]).toMatchSnapshot()
  })
})
