import styled from 'styled-components'

export const VisitedCountriesListItem = styled.li`
  list-style-type: none;
  width: 25%;
  margin-right: 10px;
  margin-bottom: 20px;
`

export const VisitedCountryImage = styled.img`
  width: 100%;
  height: 200px;
`

export const DetailsSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`

export const VisitedCountryName = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  color: #f1f5f9;
  font-weight: 500;
`

export const RemoveButton = styled.button`
  height: 35px;
  border: 1px solid #94a3b8;
  border-radius: 6px;
  background: transparent;
  font-family: 'Roboto';
  font-size: 14px;
  color: #cbd5e1;
  padding: 6px 10px 6px 10px;
  outline: none;
  cursor: pointer;
`
