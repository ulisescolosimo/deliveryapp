import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
    projectId: '4ezjea62',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2022-02-26', 
})
  
const builder = imageUrlBuilder(client)

export const urlFor = (source) => builder.image(source)
