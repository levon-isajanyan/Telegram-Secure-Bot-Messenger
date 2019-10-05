import React from 'react'
import { Button, Spinner } from 'react-bootstrap'
import '../scss/App.scss'



function button(props) {
    let isNormalButton = props.isNormalButton ? true : false;
    let isLoadingButton = props.isLoadingButton ? true : false
    if(isNormalButton) {
        return (
            <div className={props.buttonClass || 'button-style'}> 
                <Button href={props.buttonLink || '#'} onClick={props.normalButtonFunction || null}>
                    {props.buttonText || 'Default button text'}
                </Button>
            </div>
        );
    } else if (isLoadingButton) {
        return (
            <div className={props.buttonClass || 'button-style'}>
                <Button href={props.buttonLink || '#'} disabled>
                                <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                    />
                    {props.loadingButtonText || '...Loading'}
                </Button>
            </div>
        )
    }
}

export default button;