import React from 'react'
import UseStateHook from './components/UseStateHook.jsx'
import {
  StyledDiv,
  StyledHooksWrapper,
  StyledTitle,
} from '../../shared/StyledComponent.jsx'

const HooksPage = () => {
  return (
    <StyledDiv>
      <div className="bg-black">
        <StyledTitle>this is hooks page </StyledTitle>
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
