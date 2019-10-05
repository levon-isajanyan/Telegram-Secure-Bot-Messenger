
## Proejct description

This app allows to encrypt file or text via pgp public key and with sha-256 hash result send to telegram channel. 

## Purpose

Protect against man in the middle attack

## Setup

Before setup need to use [@botfather](https://telegram.me/BotFather) official telegram channel to create your bot. After setting telegram bot you need to get its' **Token**. After token retrieveing write token in safe place or somewhere inside document, we'll need this to send message from form. After saving somwhere your token create Telegram public channel. And add **telegram bot as administrator of our new public channel**.</br> Go to `server/index.js` and add into 23 row name of your public channel with `@` ('@yourPublicChannelName')</br>
Example of public channel name</br>
![Image description](/tme.png)
Happy encrypting !!!!


## Install
Install packages
` npm i --save`</br>
run client 
`npm start`</br>
run backend
`npm run server`

Technologies
------

1. ReactJS - [https://reactjs.org](https://www.reactjs.org "React")
2. NodeJS - [https://nodejs.org/](https://nodejs.org/ "NodeJS")
3. Sass - [https://sass-lang.com/](https://sass-lang.com/ "Sass")
4. Redux - [https://redux.js.org/](https://redux.js.org/ "Redux")
5. Telegram - [https://www.npmjs.com/package/telegram-api](https://www.npmjs.com/package/telegram-api "Telegram api")
6. OpenPGPJS - [https://github.com/openpgpjs/openpgpjs](https://github.com/openpgpjs/openpgpjs "OpenPGP")

Used packages
------

1. Sass - [https://www.npmjs.com/package/node-sass](https://www.npmjs.com/package/node-sass "Sass npm")
2. React-router-dom - [https://www.npmjs.com/package/react-router-dom](https://www.npmjs.com/package/react-router-dom "React-router-dom  npm")
3. Bootsrap-react - [https://www.npmjs.com/package/react-bootstrap](https://www.npmjs.com/package/react-bootstrap "Bootrap-react")
4. React-redux - [https://www.npmjs.com/package/react-redux](https://www.npmjs.com/package/react-redux "React redux")
5. Telegram - [https://www.npmjs.com/package/telegram-api](https://www.npmjs.com/package/telegram-api "Telegram api")
6. Expressjs - [https://www.npmjs.com/package/expressjs](https://www.npmjs.com/package/expressjs "ExpressJs")
7. Body-parser - [https://www.npmjs.com/package/body-parser](https://www.npmjs.com/package/body-parser "Body-parser")
8. Node-env-run - [https://www.npmjs.com/package/node-env-run](https://www.npmjs.com/package/node-env-run "Node-env-run")
9. Nodemon - [https://www.npmjs.com/package/nodemon](https://www.npmjs.com/package/nodemon "Nodemon")
10. Npm-run-tool - [https://www.npmjs.com/package/npm-run-all](https://www.npmjs.com/package/npm-run-all "Npm-run-tool")
11. Express-pino-logger - [https://www.npmjs.com/package/express-pino-logger](https://www.npmjs.com/package/express-pino-logger "Express-pino-logger")
12. Pino-colada - [https://www.npmjs.com/package/pino-colada](https://www.npmjs.com/package/pino-colada "Pino-colada")

Components
------

| Name        | child           | Props Type   | props |
| ------------- |-------------:| -----:| --------: |
| Form.js      | button.js, input.js |          |               |
| button.js      |  None |     Boolean     |   props type name: isNormalButton, (props.buttonClass || 'button-style'), (props.buttonLink || '#'), props.buttonText || 'Default button text', props type name: isLoadingButton, (props.buttonClass || 'button-style'), (props.buttonLink || '#'), (props.loadingButtonText || '...Loading')           |
| input.js      | None |     Boolean     |  props type name: isPrepand, (props.inputGroupClassName || ''), (props.isPrepandClassname || ''), (props.prepandCharset || '@'), (props.prepandInputPlaceHolder || 'Default placeholder'), (props.prepandHolderAriaLabel || 'aria-labbel'), (props.ariaLabelDescribe || 'aria-describe'), props type name: isAppend, (props.inputGroupClassName || ''), (props.appendInputPlaceHolder || 'Default placeholder'), (props.appendHolderAriaLabel || 'aria-labbel'), (props.appendArialDescribe || 'aria-describe'), (props.isAppendClassname || ''), (props.appenddCharset || '@'), props type name: isCommonInput, (props.commonInputForFormName || 'Default_Form'), (props.commonLabelName || 'Default label name'), (props.inputType || 'text'), (props.inputType || 'Default placeholder'), (props.FormInputWarningText || 'text-muted'), (props.inputWarningText || 'We ll never share your email with anyone else.')|

* If props text is not seen please open readme.md file 

Colors
------
| Name        | Hex code       | Sass variable name |
| ------------- |-------------:| -------------: |
| WHITE SMOKE | #F4F5F0 | $white |
| MEDIUM VERMILION | #E2583E | $red |
| JET | #342E37 | $black |
| French Lime | #96F550 | $green |

![Image description](/colors.png)

Sass mixins
------
| Name        | Function name       | Values |
| ------------- |-------------:| -------------: |
| Border color | border-color($width, $border-style, $border-color) | $width, $border-style, $border-color |
| Border radius | border-radius($radius) | $radius |
| Padding | padding($left, $right, $top, $bottom) | $left, $right, $top, $bottom |
| textNormalSize(), textBigSize(), textGiantSize() |  None | 12px, 16px, 18px |

Backend
------
| Endpoint url        | Parameter name       | Additional information |
| ------------- |-------------:| -------------: |
| /api/greeting | message, botToken |  |

Project purpose
------
![Image description](/Purpose.png)

Encryption principles
------
![Image description](/principles.png)

UI & result
------
![Image description](/Telegram.png)
![Image description](/Client.png)

Setup video
------
[![Youtube Video](https://i.ytimg.com/vi/-F3j1bmpOAE/maxresdefault.jpg)](http://www.youtube.com/watch?v=RjA5At13qqU)


## Please read carefully 

In this project we have used openPGPJS libarary which has some limitation on variety browser . If you see issues please contact with me ot other contributors.

