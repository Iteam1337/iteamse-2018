export const set = (page: string) => {
  gtag('config', 'UA-2430046-1', {
    page_path: `/${page}`,
    page_title: `Iteam - There's a better way | ${page}`,
  })
}
