import type { Prisma, Document } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.DocumentCreateArgs>({
  document: {
    one: { data: { title: 'String', size: 'String', type: 'String' } },
    two: { data: { title: 'String', size: 'String', type: 'String' } },
  },
})

export type StandardScenario = ScenarioData<Document, 'document'>
