import React from 'react'
import { withInfo } from '@storybook/addon-info'

import { storiesOf } from '@storybook/react'
import { Button } from './Button'

storiesOf('Button', module)
  .addWithJSX(
    'with background',
    withInfo({
      styles: {
        header: {
          h1: {
            color: 'red'
          }
        }
      },
      text: `
        despcription

        ~~~js
          <Button>Click here</Button>
        ~~~
      `
    })(() => (
      <Button bg={"tomato"}>Hello world</Button>
    )))
  .addWithJSX('with background 2', () => (
    <Button bg={"mediumseagreen"}>Hello world</Button>
  ))
