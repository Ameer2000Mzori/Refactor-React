import styled from 'styled-components'

export const StyledDiv = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: start;
  gap: 5px;
`

export const StyledHooksWrapper = styled.div`
  width: 250px;
  height: 250px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: space-evenly;
  gap: 5px;
  background-color: #ff4834;
`

export const StyledTitle = styled.p`
  font-weight: bold;
  font-size: 20px;
  color: white;
`

export const StyledButton = styled.button`
  width: 75px;
  margin: 2px;
  height: 32px;
  border-radius: 5px;
  background-color: #4834;
  color: white;
  font-size: 14px;
  font-weight: 600;
  border: none;
  cursor: pointer;
`
