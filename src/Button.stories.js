import React from 'react'
//import { withInfo } from '@storybook/addon-info'

import { wInfo } from './utils'
import { storiesOf } from '@storybook/react'
import { Button } from './Button'
import { text, boolean } from '@storybook/addon-knobs'


storiesOf('Button', module)
  .addWithJSX(
    'with background',
    wInfo(`
        despcription

        ~~~js
          <Button>Click here</Button>
        ~~~
      `)
      (() => (
        <Button bg={"tomato"}>Hello world</Button>
      )))
  .addWithJSX('with background 2', () => (
    <Button disabled={boolean('disabled', false)}>{text('text', 'Hello World')}</Button>
  ))