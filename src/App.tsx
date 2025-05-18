
import './App.css'
import Button from './components/button'
import './components/button.css'
import  './components/Accor.css'
import Accor from './components/accor'
import DropdownMenu from './components/dropDownMenu'
import Alert from './components/alert'

const accordionItems = [
  {
    title: 'first one',
    content: 'a distinct section of a piece of writing, usually dealing with a single theme and indicated by a new line, indentation, or numbering.'
  },
  {
    title: 'second one',
    content: 'a distinct section of a piece of writing, usually dealing with a single theme and indicated by a new line, indentation, or numbering.'
  },
  {
    title:'third one',
    content:'disticnt section'
  }
];

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
       <Accor items={accordionItems} />
       
       
    </>
  )
}

export default App
