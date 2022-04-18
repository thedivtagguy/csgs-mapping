import storiesData from "$data/stories.csv";

export async function get({ params }) {
  // const { slug } = params;
  // const article = await db.get(slug);

  return {
    body: storiesData
  };
}
