export const filterByLocation = (location: string) => (item: any) => {
  if (location === '') {
    return item
  }

  return item.location === location
}
