// write a unit test for the SpeciesList component
// - mock the fetch call
// - test if name is displayed
// - test if classification is displayed
// - test if designation is displayed
// - test if average height is displayed
import { render, screen } from '@testing-library/react'
import { SpeciesDetails } from './SpeciesDetails'

describe('SpeciesDetails', () => {
  test('renders species details', async () => {
    const species = {
      name: 'Human',
      classification: 'mammal',
      designation: 'sentient',
      average_height: '180',
    }
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn().mockResolvedValue(species),
    } as any)
    render(<SpeciesDetails />)
    expect(await screen.findByText('Human')).toBeInTheDocument()
    expect(await screen.findByText('mammal')).toBeInTheDocument()
    expect(await screen.findByText('sentient')).toBeInTheDocument()
    expect(await screen.findByText('180')).toBeInTheDocument()
  })
})
