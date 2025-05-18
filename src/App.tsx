
import './App.css'
import Button from './components/button'
import './components/button.css'
import  './components/Accor.css'
import Accor from './components/accor'
import DropdownMenu from './components/dropDownMenu'
import Alert from './components/alert'

function App() {
  return (
    <>
    
      <div>
        <DropdownMenu />
        <Button label="Text" variant='text' />
        <Button label="CONTAINED" variant="contained" />
        <Button label="OUTLINED" variant="outlined" />
        <Button label="Disabled" variant="contained" disabled />  
       <Alert/>
      </div>
       <Accor/>
       
       
    </>
  )
}

export default App
