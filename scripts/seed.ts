import type { Prisma } from '@prisma/client'
import { db } from 'api/src/lib/db'
// import { hashPassword } from '@redwoodjs/auth-dbauth-api'


export default async () => {
  try {
    //
    // Manually seed via `yarn rw prisma db seed`
    // Seeds automatically with `yarn rw prisma migrate dev` and `yarn rw prisma migrate reset`
    //
    // Update "const data = []" to match your data model and seeding needs
    //
    const data: Prisma.UserExampleCreateArgs['data'][] = [
      // To try this example data with the UserExample model in schema.prisma,
      // uncomment the lines below and run 'yarn rw prisma migrate dev'
      //
      // { name: 'alice', email: 'alice@example.com' },
      // { name: 'mark', email: 'mark@example.com' },
      // { name: 'jackie', email: 'jackie@example.com' },
      // { name: 'bob', email: 'bob@example.com' },
    ]
    console.log(
      "\nUsing the default './scripts/seed.{js,ts}' template\nEdit the file to add seed data\n"
    )

    // Note: if using PostgreSQL, using `createMany` to insert multiple records is much faster
    // @see: https://www.prisma.io/docs/reference/api-reference/prisma-client-reference#createmany
    await Promise.all(
      //
      // Change to match your data model and seeding needs
      //
      data.map(async (data: Prisma.UserExampleCreateArgs['data']) => {
        const record = await db.userExample.create({ data })
        console.log(record)
      })
    )

    //POSTS
    const posts = [
      {
        key: '0',
        title: 'Documents',
        size: '55kb',
        type: 'Folder',
        children: [
          {
            key: '0-0',
            title: 'Work',
            size: '22kb',
            type: 'Folder',
            children: [
              { key: '0-0-0', title: 'Expenses.doc', size: '30kb', type: 'Document' },
              { key: '0-0-1', title: 'Resume.doc', size: '25kb', type: 'Document' }
            ]
          },
          {
            key: '0-1',
            title: 'Home',
            size: '99kb',
            type: 'Folder',
            children: [{ key: '0-1-0', title: 'Invoices.txt', size: '20kb', type: 'Document' }]
          }
        ]
      },
      {
        key: '1',
        title: 'Events',
        size: '33kb',
        type: 'Folder',
        children: [
          { key: '1-0', title: 'Meeting', size: '10kb', type: 'Document' },
          { key: '1-1', title: 'Product Launch', size: '10kb', type: 'Document' },
          { key: '1-2', title: 'Report Review', size: '10kb', type: 'Document' }
        ]
      },
      {
        key: '2',
        title: 'Movies',
        size: '11kb',
        type: 'Folder',
        children: [
          {
            key: '2-0',
            title: 'Al Pacino',
            size: '10kb',
            type: 'Folder',
            children: [
              { key: '2-0-0', title: 'Scarface', size: '10kb', type: 'Document' },
              { key: '2-0-1', title: 'Serpico', size: '10kb', type: 'Document' }
            ]
          },
          {
            key: '2-1',
            title: 'Robert De Niro',
            size: '10kb',
            type: 'Folder',
            children: [
              { key: '2-1-0', title: 'Goodfellas', size: '10kb', type: 'Document' },
              { key: '2-1-1', title: 'Untouchables', size: '10kb', type: 'Document' }
            ]
          }
        ]
      }
    ];

    for (const post of posts) {
      await db.post.create({
        data: {
          title: post.title,
          size: post.size,
          type: post.type,
        },
      });
    }
 } catch (error) {
    console.warn('Please define your seed data.')
    console.error(error)
  }
}


