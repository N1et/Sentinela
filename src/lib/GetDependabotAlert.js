const { GraphQLClient, gql } = require('graphql-request')

async function GetDependabotAlert(repoName, repoOwner, token) {
    const endpoint = 'https://api.github.com/graphql'
  
    const graphQLClient = new GraphQLClient(endpoint, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    })
  
    const query = gql`{
        repository(name: "${repoName}", owner: "${repoOwner}") {
            vulnerabilityAlerts(first: 20) {
                nodes {
                    id
                    repository {
                      name
                    }
                    createdAt
                    dismissedAt
                    securityVulnerability {
                        package {
                            name
                        }
                        firstPatchedVersion {
                            identifier
                          }
                          
                        advisory {
                            id
                            description
                            severity
                            summary
                            permalink
                            cvss {
                                score
                              }  
                        }
                    vulnerableVersionRange
                    }
                }
            }
        }
    }`
  
    const data = await graphQLClient.request(query)
    return data.repository.vulnerabilityAlerts.nodes
  }
  
module.exports = { GetDependabotAlert }
