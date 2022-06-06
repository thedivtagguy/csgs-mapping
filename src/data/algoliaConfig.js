import 'dotenv/config' // optional
import d3 from 'd3'
async function loadData() {
  // Fetch data from publications.csv and turn it into a JSON array
  const publications = await d3.csv('publications.csv')
    // Turn publications into a JSON array and return it
    return publications.map((publication) => ({
            ...publication,
            // Create new field called ID and create an ID from the publication's row number
            id: publication.row,
    }))
}

const algoliaConfig = {
  appId: process.env.VITE_ALGOLIA_APP_ID,
  // don't prefix admin key with VITE_ else it would get exposed to client-side code
  apiKey: process.env.ALGOLIA_ADMIN_KEY,
  indices: [
    { name: `publications`, getData: loadData },
  ],
  settings: {
    attributesToHighlight: [`title`],
  },
}