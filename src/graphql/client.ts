 import { GraphQLClient } from 'graphql-request'

const url = process.env.HYGRAPH_HOST || ''

const client = new GraphQLClient(url, {
    headers: {
        Authorization: `Bearer ${process.env.HYGRAPH_TOKEN}`
    }
})

export default client