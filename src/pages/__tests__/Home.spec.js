import React from 'react'
import { mount } from 'enzyme'
import Home from '../Home'
import MockedQuery from '../../utils/test-utils/MockedQuery'

describe('components/Home', () => {
  let component
  let mockedData

  beforeEach(() => {
    mockedData = {
      pageStart: {
        headerImage: '',
        headerText1: '',
        headerText2: '',
        headerTextBgColor: '',
        codeText: '',
        codeTitle: '',
        cultureText: '',
        cultureTitle: '',
        strategyText: '',
        strategyTitle: '',
        __typename: 'PageStart',
      },
      teamMember: [
        {
          avatar: '',
          email: 'cm@sesame.com',
          gravatar: 'cm.png',
          location: 'New York',
          name: 'Cookie M',
          phoneNumber: '0701234567',
          title: 'Cookie master',
          __typename: 'TeamMember',
        },
      ],
    }

    component = mount(
      <MockedQuery response={mockedData}>
        <Home />
      </MockedQuery>
    )
  })

  it('renders Home page', () => {
    const data = {
      loading: false,
      data: {
        ...mockedData,
      },
    }

    expect(component.find('Query').prop('children')(data)).toMatchSnapshot()
  })
})
