export type TailwindBreakpoints = 'sm' | 'md' | 'lg' | 'xl' | '2xl'

export type SendEmailResponse = {
  success: boolean
  message: string
}

export type SendEmailData = {
  name: string
  email: string
  message: string
}
