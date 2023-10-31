import type { Prisma, File } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.FileCreateArgs>({
  file: {
    one: {
      data: {
        name: 'String',
        size: 'String',
        type: 'String',
        document: {
          create: { title: 'String', size: 'String', type: 'String' },
        },
      },
    },
    two: {
      data: {
        name: 'String',
        size: 'String',
        type: 'String',
        document: {
          create: { title: 'String', size: 'String', type: 'String' },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<File, 'file'>
