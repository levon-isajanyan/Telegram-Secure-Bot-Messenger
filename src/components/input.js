import React from 'react'
import { InputGroup,FormControl, Form } from 'react-bootstrap'
import '../scss/App.scss'

function inputGroup(props) {
    let isPrepand = props.isPrepand ? true : false ;
    let isAppend = props.isAppend ? true : false;
    let isCommonInput = props.isCommonInput ? true : false;
    if(isPrepand) {
        return (
            <InputGroup className={props.inputGroupClassName || ''}>
                <InputGroup.Prepend>
                    <InputGroup.Text className={props.isPrepandClassname || ''}>{props.prepandCharset || '@'}</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                    placeholder={props.prepandInputPlaceHolder || 'Default placeholder'}
                    aria-label={props.prepandHolderAriaLabel || 'aria-labbel'}
                    aria-describedby={props.ariaLabelDescribe || 'aria-describe'}
                />
            </InputGroup>
        )
    } else if(isAppend) {
        return (
            <InputGroup className={props.inputGroupClassName || ''}>
                <FormControl
                    placeholder={props.appendInputPlaceHolder || 'Default placeholder'}
                    aria-label={props.appendHolderAriaLabel || 'aria-labbel'}
                    aria-describedby={props.appendArialDescribe || 'aria-describe'}
                />
                <InputGroup.Append>
                    <InputGroup.Text className={props.isAppendClassname || ''}>{props.appenddCharset || '@'}</InputGroup.Text>
                </InputGroup.Append>
            </InputGroup>
        )
    } else if(isCommonInput) {
        return (
            <Form.Group controlId={props.commonInputForFormName || 'Default_Form'}>
                <Form.Label>{props.commonLabelName || 'Default label name'}</Form.Label>
                <Form.Control className='shadow-none inputelement' type={props.inputType || 'text'} onChange={props.onChangeFunction || null} placeholder={props.inputTypePlaceholder || 'Default placeholder'}/>
                <Form.Text className={props.FormInputWarningText || 'text-muted'}>
                    {props.inputWarningText || ''}
                </Form.Text>
            </Form.Group>
        )
    } else {
        return (
            <input></input>
        )
    }
}

export default inputGroup