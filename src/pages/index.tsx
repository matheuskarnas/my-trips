import { MapProps } from 'components/Map'
import client from 'graphql/client'
import { GetPlacesQuery } from 'graphql/generated/graphql'
import { GET_PLACES } from 'graphql/queries'
import HomeTemplate from 'template/Home'

export default function Home({ places }: MapProps) {
  return <HomeTemplate places={places} />
}

export async function getStaticProps() {
  const { places } = await client.request<GetPlacesQuery>(GET_PLACES)
  console.log(places)

  return {
    revalidate: 60 * 60 * 24, // once per day
    props: { places }
  }
}
