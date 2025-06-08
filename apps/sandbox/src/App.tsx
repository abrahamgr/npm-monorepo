import { Button } from '@app/component-library'
import { useRandomNumber } from '@app/utilities'

function App() {
  const randomNumber = useRandomNumber(1, 100)
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Sandbox App</h1>
      <Button>Click Me</Button>
      <p>{randomNumber}</p>
    </div>
  )
}

export default App
