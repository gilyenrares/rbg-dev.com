import { MouseEventHandler } from "react"

export interface ButtonProps{
  className?: any
  children: any
  type?: any
  onClick?: MouseEventHandler<HTMLButtonElement>
  buttonStyle: string
  buttonSize: string
}