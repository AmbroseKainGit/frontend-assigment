import { gql } from '@apollo/client';
export const queryCharacters = gql`
   query queryCharacters($page: Int!) {
    characters(page: $page) {
      info {
        count
      }
      results {
        id
        image
        name
        status
        type
        gender
        species
        created,
        location {
          name
        }
      }
    }
  }
`