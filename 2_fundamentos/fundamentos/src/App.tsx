// Components
import FirstComponent from './components/FirstComponent'
import TemplateExpressions from './components/TemplateExpressions'
import MyComponent from './components/MyComponent'
import Events from './components/Events'


//Styles
import './App.css'

function App() {
  return (
    <>
      <div> 
        {/*exemplo de comentário*/}
        <h1>Fundamentos do React</h1>
        <FirstComponent />
        <TemplateExpressions />
        <MyComponent />
        <Events />
      </div>
    </>
  )
}

export default App
