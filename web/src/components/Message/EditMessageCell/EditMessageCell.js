import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'

import MessageForm from 'src/components/Message/MessageForm'

export const QUERY = gql`
  query EditMessageById($id: Int!) {
    message: message(id: $id) {
      id
      hash
      title
      body
      createdAt
    }
  }
`
const UPDATE_MESSAGE_MUTATION = gql`
  mutation UpdateMessageMutation($id: Int!, $input: UpdateMessageInput!) {
    updateMessage(id: $id, input: $input) {
      id
      hash
      title
      body
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ message }) => {
  const [updateMessage, { loading, error }] = useMutation(
    UPDATE_MESSAGE_MUTATION,
    {
      onCompleted: () => {
        toast.success('Message updated')
        navigate(routes.messages())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input, id) => {
    updateMessage({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Message {message.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <MessageForm
          message={message}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
