import React from 'react'
import {Row, Container, Col} from 'react-bootstrap'
import FormElement from './components/form'
import './scss/App.scss'


function App() {
  return (
    <div className="appWrapper">
      <Container>
        <h1 className='text-center'>
          Information cryptor and sender
        </h1>
        <Row>
          <Col>
            <FormElement>
            </FormElement>
          </Col>
        </Row>
        <p className='text-center introtext'>
          This encryption tool is for sending text to telegram bot . In this case bot represent as <a href='https://telegram.me/BotFather'>@botfather</a>. The main aim of app is to show encryption mechanisms which can prevent MITM attacks. Let's imagine that you have a lot of public keys from persons. Bot operator encrypt it with their secure publick keys and send encrypted text via telegram API to bot. If person has private key, then will be able to decrypt message with it. 
        </p>
      </Container>
    </div>
  );
}

export default App;
