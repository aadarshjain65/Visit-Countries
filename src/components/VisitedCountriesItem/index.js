import {
  VisitedCountriesListItem,
  VisitedCountryImage,
  DetailsSection,
  VisitedCountryName,
  RemoveButton,
} from './styledComponents'

const VisitedCountries = props => {
  const {visitedCountriesItemDetails, deleteVisitedCountry} = props
  const {name, imageUrl, id} = visitedCountriesItemDetails

  const removeCountry = () => {
    deleteVisitedCountry(id)
  }

  return (
    <VisitedCountriesListItem>
      <VisitedCountryImage src={imageUrl} alt="thumbnail" />
      <DetailsSection>
        <VisitedCountryName>{name}</VisitedCountryName>
        <RemoveButton type="button" onClick={removeCountry}>
          Remove
        </RemoveButton>
      </DetailsSection>
    </VisitedCountriesListItem>
  )
}

export default VisitedCountries
