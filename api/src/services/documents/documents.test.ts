import type { Document } from '@prisma/client'

import {
  documents,
  document,
  createDocument,
  updateDocument,
  deleteDocument,
} from './documents'
import type { StandardScenario } from './documents.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('documents', () => {
  scenario('returns all documents', async (scenario: StandardScenario) => {
    const result = await documents()

    expect(result.length).toEqual(Object.keys(scenario.document).length)
  })

  scenario('returns a single document', async (scenario: StandardScenario) => {
    const result = await document({ id: scenario.document.one.id })

    expect(result).toEqual(scenario.document.one)
  })

  scenario('creates a document', async () => {
    const result = await createDocument({
      input: { title: 'String', size: 'String', type: 'String' },
    })

    expect(result.title).toEqual('String')
    expect(result.size).toEqual('String')
    expect(result.type).toEqual('String')
  })

  scenario('updates a document', async (scenario: StandardScenario) => {
    const original = (await document({
      id: scenario.document.one.id,
    })) as Document
    const result = await updateDocument({
      id: original.id,
      input: { title: 'String2' },
    })

    expect(result.title).toEqual('String2')
  })

  scenario('deletes a document', async (scenario: StandardScenario) => {
    const original = (await deleteDocument({
      id: scenario.document.one.id,
    })) as Document
    const result = await document({ id: original.id })

    expect(result).toEqual(null)
  })
})
