export const cardNumberMask = (value: string) => {
  const digitsOnly = value.replace(/\D/g, '')
  const limited = digitsOnly.slice(0, 16)
  const formatted = limited.replace(/(\d{4})(?=\d)/g, '$1 ')

  return formatted
}