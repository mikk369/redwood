import type { Prisma, Post } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.PostCreateArgs>({
  post: {
    one: {
      data: {
        title: 'String',
        size: 'String',
        type: 'String',
        user: { create: { name: 'String', email: 'String' } },
      },
    },
    two: {
      data: {
        title: 'String',
        size: 'String',
        type: 'String',
        user: { create: { name: 'String', email: 'String' } },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Post, 'post'>
