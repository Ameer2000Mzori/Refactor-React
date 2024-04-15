import React from 'react'
import UseStateHook from './components/UseStateHook.jsx'
import { StyledDiv, StyledHooksWrapper } from '../../shared/StyledComponent.jsx'

const HooksPage = () => {
  return (
    <StyledDiv>
      <div>
        <h1>this is hooks page </h1>
      </div>

      <div className=" w-[90%] h-[90%] flex flex-row text-start items-start justify-start">
        <StyledHooksWrapper>
          <UseStateHook />
        </StyledHooksWrapper>
      </div>
    </StyledDiv>
  )
}

export default HooksPage
