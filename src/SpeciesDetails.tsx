import { FC, useEffect, useState } from 'react'
import { useParams } from 'react-router'

// create type Species that includes all attributes (name, classification, etc.) from the API
export type Species = {
  name: string
  classification: string
  designation: string
  average_height: string
}

export const SpeciesDetails: FC = () => {
  // get id from the URL using useParams from react-router-dom
  const { id } = useParams()
  // create state for the species that uses the Species type with default value {}
  const [species, setSpecies] = useState<Species>({} as Species)
  // fetch all attributes for the species from https://swapi.dev/documentation#species
  // handle loading and error states
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  useEffect(() => {
    fetch(`https://swapi.dev/api/species/${id}`)
      .then(response => response.json())
      .then(data => {
        setSpecies(data)
        setLoading(false)
      })
      .catch(error => {
        setError(true)
        setLoading(false)
      })
  }, [id])
  // display all attributes for the species on the page (name, classification, etc.) in a table
  // create a button that links back to the SpeciesList page

  if (loading) return <div>Loading...</div>
  if (error) return <div>There was an error!</div>

  return (
    <div>
      <h1>Species Details</h1>
      <table>
        <tbody>
          <tr>
            <td>Name</td>
            <td>{species.name}</td>
          </tr>
          <tr>
            <td>Classification</td>
            <td>{species.classification}</td>
          </tr>
          <tr>
            <td>Designation</td>
            <td>{species.designation}</td>
          </tr>
          <tr>
            <td>Average Height</td>
            <td>{species.average_height}</td>
          </tr>
        </tbody>
      </table>
      <a href='/'>Back to Species List</a>
    </div>
  )
}
