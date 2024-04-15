import React from 'react'
import UseStateHook from './components/UseStateHook.jsx'
import { StyledDiv } from './StyledComponent.jsx'

const HooksPage = () => {
  return (
    <StyledDiv>
      <div>
        <h1>this is hooks page </h1>
      </div>

      <div className=" w-[90%] h-[90%] flex flex-row text-start items-start justify-start">
        <div>
          <UseStateHook />
        </div>
      </div>
    </StyledDiv>
  )
}

export default HooksPage
