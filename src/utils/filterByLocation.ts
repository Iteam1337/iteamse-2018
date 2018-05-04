export const filterByLocation = (location: string) => item => {
  if (location === '') {
    return item
  }

  return item.location === location
}
