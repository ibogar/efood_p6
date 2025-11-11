export const postalCodeMask = (value: string) => {
  const digitsOnly = value.replace(/\D/g, '')
  const limited = digitsOnly.slice(0, 8)
  const formatted = limited.replace(/(\d{5})(?=\d)/g, '$1-')

  return formatted
}