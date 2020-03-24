import gql from "graphql-tag";


export const getCaseSection = gql`
      {
        cases_section {
            name
            number
            date
            color
          }
      }
    `;

export const getAgeCases = gql`
    {
        cases_age {
            number
            backgroundColor
            age
          }
    }
  `;


export const getProvinceCases = gql`
     {
        cases_province {
          number
          province
          region
        }
      }
  `;

export const getGenderCases = gql`
  {
    cases_gender {
        gender
        number
      }
  }
`;

export const getNews = gql`
{
    news {
        id
        date
        description
        link
        provider_news
        title
      }
}
`;