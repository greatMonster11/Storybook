import * as React from 'react'
import './Button.css'

export interface Props {
  children: React.ReactNode,
  onClick: () => void,
  disabled?: boolean
}

const noop = () => { }
export const Button = (props: Props) => {
  const { children, onClick, disabled = false } = props
  const disabledClass = disabled ? 'Button_disabled' : ''
  return (
    <div
      className={`Button ${disabledClass}`}
      onClick={!disabled ? onClick : noop}
    >
      <span>{children}</span>
    </div>
  )
}