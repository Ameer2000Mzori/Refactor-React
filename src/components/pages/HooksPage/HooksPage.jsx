import React from 'react'
import {
  StyledDiv,
  StyledHooksWrapper,
  StyledTitle,
} from '../../shared/StyledComponent.jsx'
import { HooksList } from './components/HooksListData.js'

const HooksPage = () => {
  return (
    <StyledDiv>
      <div className="bg-black">
        <StyledTitle>this is hooks page </StyledTitle>
      </div>

      <div className=" w-[90%] h-[90%] flex flex-row text-start items-start justify-start gap-[15px]">
        {HooksList.map((item, index) => {
          const Component = item.component // Extracting component reference
          return (
            <StyledHooksWrapper key={index}>
              <Component />
            </StyledHooksWrapper>
          )
        })}
      </div>
    </StyledDiv>
  )
}

export default HooksPage
