import './App.css'
import './Chat.css'
import { BodyChat } from './componets/BodyChat/BodyChat.jsx'
import { ButtonGroup } from './componets/ButtonGroup'
import { FooterChat } from './componets/FooterChat'
import { LoadingChat } from './componets/LoadingChat'
import { TitleBarComponent } from './componets/TitleBar/TitleBarComponent.jsx'

function App() {

  return (
    <>
      <div className='knt-container-chat'>
        <TitleBarComponent />
        <BodyChat />
        <div className="cx-button-container"></div>
        <ButtonGroup />
        <FooterChat />
        <div className="cx-smokescreen"></div>
        <div className="cx-dialog-container"></div>
        <LoadingChat />
      </div>
    </>
  )
}

export default App
