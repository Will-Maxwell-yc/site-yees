import React from 'react'
import { Wrapper } from './style'
import Details from '../../Components/TeamDetails/Details'
import PortfólioTeam from '../../Components/TeamDetails/Portfólio'

const PageTeam = () => {
  return (
    <Wrapper>
        <Details />
        <PortfólioTeam />
    </Wrapper>
  )
}

export default PageTeam