import { render } from '@test-utils'
import App, { COMPONENT_ID } from '../App'

describe('App rendering correctly', () => {
  it('renders correctly App div', () => {
    const { getByTestId } = render(<App />)
    expect(getByTestId(COMPONENT_ID)).toBeInTheDocument()
  })
})