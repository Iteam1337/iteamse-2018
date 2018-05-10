import * as React from 'react'
import { render, wait } from 'react-testing-library'
import MockedQuery from '../../../utils/test-utils/MockedQuery'
import Header from '../Header'

describe('components/Header', () => {
  const mocks = {}

  it('renders Header', async () => {
    const { container } = render(
      <MockedQuery mocks={mocks}>
        <Header
          backgroundImage={null}
          messageBgColor={null}
          messageOne="Vi digitaliserar företag och organisationer"
          messageTwo="genom strategi, kod och kultur"
        />
      </MockedQuery>
    )

    await wait()

    expect(container).toMatchSnapshot()
  })
})
