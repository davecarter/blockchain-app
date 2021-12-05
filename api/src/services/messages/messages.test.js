import {
  messages,
  message,
  createMessage,
  updateMessage,
  deleteMessage,
} from './messages'

describe('messages', () => {
  scenario('returns all messages', async (scenario) => {
    const result = await messages()

    expect(result.length).toEqual(Object.keys(scenario.message).length)
  })

  scenario('returns a single message', async (scenario) => {
    const result = await message({ id: scenario.message.one.id })

    expect(result).toEqual(scenario.message.one)
  })

  scenario('creates a message', async () => {
    const result = await createMessage({
      input: { hash: 'String', title: 'String', body: 'String' },
    })

    expect(result.hash).toEqual('String')
    expect(result.title).toEqual('String')
    expect(result.body).toEqual('String')
  })

  scenario('updates a message', async (scenario) => {
    const original = await message({ id: scenario.message.one.id })
    const result = await updateMessage({
      id: original.id,
      input: { hash: 'String2' },
    })

    expect(result.hash).toEqual('String2')
  })

  scenario('deletes a message', async (scenario) => {
    const original = await deleteMessage({ id: scenario.message.one.id })
    const result = await message({ id: original.id })

    expect(result).toEqual(null)
  })
})
