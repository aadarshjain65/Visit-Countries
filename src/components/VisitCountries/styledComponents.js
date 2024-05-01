import styled from 'styled-components'

export const AppContainer = styled.div`
  background-color: #161624;
  min-height: 100vh;
  padding: 20px;
`

export const CountriesHeading = styled.h1`
  font-family: 'Roboto'
  font-size: 32px;
  font-weight: 600;
  color: #ffffff;
`

export const CountriesList = styled.ul`
  padding-left: 0;
  max-height: 40vh;
  overflow-y: auto;
  border-radius: 5px;
  border: 1px solid #334155;
`

export const VisitedCountriesHeading = styled.h1`
  font-family: 'Roboto'
  font-size: 32px;
  font-weight: 600;
  color: #ffffff;
`

export const VisitedCountriesList = styled.ul`
  padding-left: 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`

export const NoCountriesVisitedContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50vh;
`

export const NoCountriesVisitedText = styled.p`
  font-family: 'Roboto';
  font-size: 32px;
  font-weight: 600;
  color: #f8fafc;
`
