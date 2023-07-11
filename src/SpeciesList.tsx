import { FC, useEffect, useState } from 'react'
import { Species } from './SpeciesDetails'
import './SpeciesList.css'

export const SpeciesList: FC = () => {
  // fetch all species from https://swapi.dev/documentation#species and display them in a list
  // each list item should link to the SpeciesDetails page
  // the list should be sorted by name
  const [species, setSpecies] = useState<Species[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  useEffect(() => {
    setLoading(true)
    fetch('https://swapi.dev/api/species/')
      .then(response => response.json())
      .then(data => {
        setSpecies(data.results)
        setLoading(false)
      })
      .catch(error => {
        setError(true)
        setLoading(false)
      })
  }, [])
  if (loading) return <div>Loading...</div>
  if (error) return <div>There was an error!</div>
  return (
    <div className='species-list'>
      <h1>Species List</h1>
      <ul>
        {/* list should have an anchor and link to the SpeciesDetails page using map index plus 1 as the id */}
        {species.map((species, index) => (
          <li key={index}>
            <a href={`/species/${index + 1}`}>{species.name}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}
