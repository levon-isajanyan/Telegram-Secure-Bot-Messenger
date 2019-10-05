import React, { useState, useEffect  } from 'react' 
import { Form } from 'react-bootstrap'
import ButtonElement from './button'
import FormInputElement from './input'
import '../scss/App.scss'
const openpgp = require('openpgp')




function FormElement() {
  const [file, setFile] = useState('');
  const [textInputWarning, setTextInputWarning] = useState(false);
  const [tokenTextWarning, setTokenTextWarning] = useState(false)
  // Check input value empty function
  function checkInput(formName) {
    // Find inputs and check which input is empty or has value
    let currentFormInputs = document.forms[formName].getElementsByTagName('input');
    for(var i = 0; i < currentFormInputs.length; i++) {
      if(currentFormInputs[i].value === '') {
        currentFormInputs[i].classList.add('warning-input');
      } else if(currentFormInputs[i].value !== '') {
        currentFormInputs[i].classList.remove('warning-input');
      } 
    }
  }
  // Onchange file function
  function attachFile(e) {
    let targetKey = e.target.files[0];
    if(targetKey.name.split('.').pop() === 'asc' | 'pgp') {
      setFile(targetKey);
    } else {
      alert('Please choose right public key type');
      let currentFile = e.target.files;
      // If input file will be wrong, then reset its value
      currentFile = [];
      document.getElementById('formpublickey').value = '';
    }
  }
  // Encrypt file function
  function encryptMe(publickey, messageText) {
    let encrypted;
    const pubkey = publickey;
    const encryptDecryptFunction = async() => {
        const options = {
            message: openpgp.message.fromText(messageText),       // input as Message object
            publicKeys: (await openpgp.key.readArmored(pubkey)).keys, // for encryption
        }
        // Promise to retirn encrypted data
        return openpgp.encrypt(options).then(ciphertext => {
            encrypted = ciphertext.data
            return encrypted
        })
    };
    return  encryptDecryptFunction()
  } 
  // Submit fform function
  function sendForm(e) {
    e.preventDefault();
    // Before send for check input
    checkInput('formUpload');
    // Get form all inputs
    let formInput = document.forms['formUpload'].getElementsByTagName('input');
    for(var i = 0; i < formInput.length; i++) {
      // Check for inputs value and add warning
      if(formInput[i].value === '') {
        if(formInput[i].type === 'text' && textInputWarning === false) {
          setTextInputWarning(true)
        }
      } else {
        if(formInput[i].type === 'text' && textInputWarning === true) {
          setTextInputWarning(false)
        }
      }
    }
    // Bot token
    let botInput = document.getElementById('formbottoken').value;
    // Message text
    let botText = document.getElementById('formbottext').value;
    // Crytography [ublic key]
    let botPublicKey = document.getElementById('formpublickey');
    if(botPublicKey.files.length > 0) {
      let input = botPublicKey.files[0];
      if(botInput !==  '' && botInput !==  null && botInput !==  undefined &&  botText !== '' && botText !== undefined && botText !== null && botPublicKey !== '' && botPublicKey !== undefined && botPublicKey !== null ) {
        let reader  = new FileReader();
        reader.onload = function(e) {
          let PgpFile = e.target.result;
          encryptMe(PgpFile, botText).then(response => {
            let encryptedText = response;
            fetch(`/api/greeting?message=${encodeURIComponent(encryptedText)}&botToken=${encodeURIComponent(botInput)}`)
            .then(function (response) { 
              if(response.status === 200) {
                alert('Your message was sent')
              } else {
                alert('Error status code'  + response.status)
              }
            })
          });
        };
        reader.readAsText(input)
      }
    }
  }
  useEffect(() => {
    // Find inputs
    let currentForm = document.forms[0].getElementsByTagName('input');
    // Iterate over inputs
    for(var i = 0; i < currentForm.length; i++) {
      if(currentForm[i].type.toLowerCase() === 'file') {
          // input file type add accept attribute for PGP keys
          currentForm[i].setAttribute('accept', ['application/pgp-keys', 'application/pgp-signature', 'application/pgp-keys']);
      }
    }
  }, [file]);
  return (
    <Form className="form" name="formUpload">
      <FormInputElement  commonInputForFormName="formbottoken" commonLabelName="Bot token" inputType="text" inputTypePlaceholder="Enter botfather channel token" FormInputWarningText='warning-text' inputWarningText={tokenTextWarning ? 'Please enter valid token' : null}  isCommonInput={true}>
      </FormInputElement>
      <FormInputElement commonInputForFormName="formbottext" commonLabelName="Text input" inputType="text" inputTypePlaceholder="Enter text" FormInputWarningText='warning-text' inputWarningText={textInputWarning ? 'Enter Message' : null}  isCommonInput={true}>
      </FormInputElement>
      <FormInputElement commonInputForFormName="formpublickey"  commonLabelName="Public key" onChangeFunction={attachFile} inputType="file"   isCommonInput={true} required>
      </FormInputElement>
      <Form.Row>
          <ButtonElement buttonText="Send" normalButtonFunction={sendForm} isNormalButton={true}>
          </ButtonElement>
      </Form.Row>
    </Form>
  );
}

export default FormElement;
