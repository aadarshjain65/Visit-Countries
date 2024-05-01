import styled from 'styled-components'

export const CountriesListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #334155;
  list-style-type: none;
  background-color: #1f1f2f;
  padding-left: 36px;
  padding-right: 36px;
  padding-bottom: 18px;
`

export const CountryName = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  color: #f1f5f9;
`

export const VisitedText = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  color: #94a3b8;
  margin-right: 15px;
  margin-top: 20px;
  margin-bottom: 0;
`

export const VisitButton = styled.button`
  height: 35px;
  background-color: #3b82f6;
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  border: none;
  border-radius: 4px;
  padding: 8px 24px 12px 24px;
  outline: none;
  cursor: pointer;
  margin-top: 20px;
`
