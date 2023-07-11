// write a unit test for the SpeciesList component
// - mock the fetch call
// - test if name is displayed for each species
import { render, screen } from '@testing-library/react'
import { SpeciesList } from './SpeciesList'

describe('SpeciesList', () => {
  test('renders species list', async () => {
    const species = [
      {
        name: 'Human',
        classification: 'mammal',
        designation: 'sentient',
        average_height: '180',
      },
      {
        name: 'Droid',
        classification: 'artificial',
        designation: 'sentient',
        average_height: 'n/a',
      },
    ]
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn().mockResolvedValue({
        results: species,
      }),
    } as any)
    render(<SpeciesList />)
    expect(await screen.findByText('Human')).toBeInTheDocument()
    expect(await screen.findByText('Droid')).toBeInTheDocument()
  })
})
