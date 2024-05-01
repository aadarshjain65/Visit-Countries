import {
  CountriesListItem,
  CountryName,
  VisitedText,
  VisitButton,
} from './styledComponents'

const CountriesItem = props => {
  const {countriesItemDetails, addVisitedCountry} = props
  const {id, name, isVisited} = countriesItemDetails

  const addCountry = () => {
    addVisitedCountry(id)
  }

  const countryText = isVisited ? 'Visited' : 'Visit'

  return (
    <CountriesListItem>
      <CountryName>{name}</CountryName>
      {isVisited === true ? (
        <VisitedText>{countryText}</VisitedText>
      ) : (
        <VisitButton type="button" onClick={addCountry}>
          {countryText}
        </VisitButton>
      )}
    </CountriesListItem>
  )
}

export default CountriesItem
