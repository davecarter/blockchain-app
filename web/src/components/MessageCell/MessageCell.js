export const QUERY = gql`
  query FindMessageQuery($id: Int!) {
    message: message(id: $id) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ message }) => {
  return <div>{JSON.stringify(message)}</div>
}
