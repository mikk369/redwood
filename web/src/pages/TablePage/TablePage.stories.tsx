import type { Meta, StoryObj } from '@storybook/react'

import TablePage from './TablePage'

const meta: Meta<typeof TablePage> = {
  component: TablePage,
}

export default meta

type Story = StoryObj<typeof TablePage>

export const Primary: Story = {}
