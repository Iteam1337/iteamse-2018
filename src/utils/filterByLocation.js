export const filterByLocation = location => item => {
  if (location === '') {
    return item
  }

  return item.location === location
}
