import * as React from 'react'
import Header from '../Header'
import { render, wait } from 'react-testing-library'
import MockedQuery from '../../../utils/test-utils/MockedQuery'

jest.mock('react-lazyload', () => {
  return function LazyLoad ({ children }: { children: React.Node }) {
    return <div>{children}</div>
  }
})

describe('components/Header', () => {
  const mockedResponse = {}

  it('renders Header', async () => {
    const { container } = render(
      <MockedQuery response={mockedResponse}>
        <Header
          messageOne="Vi digitaliserar företag och organisationer"
          messageTwo="genom strategi, kod och kultur"
        />
      </MockedQuery>
    )

    await wait()

    expect(container).toMatchSnapshot()
  })
})
