// @flow

import * as React from 'react'
import Team from '../components/Team/Team'
import CaseHeader from '../components/Header/CaseHeader'
import Block from '../components/Blocks/Block'
import Quote from '../components/Blocks/Quote'
import Breadcrumbs from '../components/Breadcrumbs/Breadcrumbs'

const CasePage = () => {
  return (
    <React.Fragment>
      <CaseHeader
        bgColor="#1616B2"
        tags={['API', 'Docker', 'UX', 'React', 'Vue']}
      />

      <Breadcrumbs title="Arbetsförmedlingen" />

      <Block title="test">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab nemo
        asperiores repellendus vitae quas illum consequatur neque suscipit animi
        ducimus praesentium porro veritatis, natus dignissimos minus itaque
        iusto esse molestias.
      </Block>

      <Block title="test">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab nemo
        asperiores repellendus vitae quas illum consequatur neque suscipit animi
        ducimus praesentium porro veritatis, natus dignissimos minus itaque
        iusto esse molestias.
      </Block>

      <Quote person="Test Testsson">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit
        facere temporibus nemo eaque voluptates exercitationem natus corrupti
        alias pariatur, eum expedita amet ducimus praesentium? Quam animi totam
        excepturi dignissimos sunt!
      </Quote>

      <Block title="test">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab nemo
        asperiores repellendus vitae quas illum consequatur neque suscipit animi
        ducimus praesentium porro veritatis, natus dignissimos minus itaque
        iusto esse molestias.
      </Block>

      <Block title="test">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab nemo
        asperiores repellendus vitae quas illum consequatur neque suscipit animi
        ducimus praesentium porro veritatis, natus dignissimos minus itaque
        iusto esse molestias.
      </Block>

      <Block title="test">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab nemo
        asperiores repellendus vitae quas illum consequatur neque suscipit animi
        ducimus praesentium porro veritatis, natus dignissimos minus itaque
        iusto esse molestias.
      </Block>

      <Block title="test">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab nemo
        asperiores repellendus vitae quas illum consequatur neque suscipit animi
        ducimus praesentium porro veritatis, natus dignissimos minus itaque
        iusto esse molestias.
      </Block>

      <Team bgColor="green" shortName={['hrn', 'jmn']} />
    </React.Fragment>
  )
}

export default CasePage
