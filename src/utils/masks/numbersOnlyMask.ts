export const numbersOnlyMask = (value: string, slicer?:number) => {
  const digitsOnly = value.replace(/\D/g, '')
  const formatted = digitsOnly.slice(0, slicer)

  return formatted
}