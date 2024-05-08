import { MouseEventHandler } from "react"

export interface ButtonProps{
  className?: any
  children: any
  type?: any
  name?: string
  onClick?: MouseEventHandler<HTMLButtonElement>
  buttonStyle?: string
  buttonSize?: string
}

export interface HeroSectionProps {
  hasTop: boolean
  hasBottom: boolean
  lightBg: boolean
  topLine: string
  headline: string
  description: any
  buttonLink: string
  buttonLabel: string
  buttonStyle: string
  img: string
  alt: string
  imgStart: boolean
}