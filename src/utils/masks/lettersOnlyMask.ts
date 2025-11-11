export const lettersOnlyMask = (value: string) => {
  const formatted = value.replace(/\d/g, '')

  return formatted
}