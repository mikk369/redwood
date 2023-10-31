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

    //USERS
    const users = [
      { id: 1, name: 'john', email: 'john@example.com'},
      { id: 2, name: 'jane', email: 'jane@example.com'},
      { id: 3, name: 'adam', email: 'adam@example.com'},
      { id: 4, name: 'sophia', email: 'sophia@example.com'},
      { id: 5, name: 'alex', email: 'alex@example.com'},
      { id: 6, name: 'olivia', email: 'olivia@example.com'},
      { id: 7, name: 'noah', email: 'noah@example.com'},
      { id: 8, name: 'emma', email: 'emma@example.com'},
      { id: 9, name: 'liam', email: 'liam@example.com'},
      { id: 10, name: 'ava', email: 'ava@example.com'},
        ]

      for (const user of users) {
        // const [hashedPassword, salt] = hashPassword(user.password)
        await db.user.create({
          data: {
            name: user.name,
            email: user.email,
            // hashedPassword,
            // salt
          }
        })
      }

    //POSTS
    const posts = [
      {
        id: 1,
        title: 'First Post',
        size: '10kb',
        type: 'Text'
      },
      {
        id: 2,
        title: 'Second Post',
        size: '20kb',
        type: 'Image'
      },
      {
        id: 3,
        title: 'Third Post',
        size: '15kb',
        type: 'Document'
      },
      {
        id: 4,
        title: 'Fourth Post',
        size: '12kb',
        type: 'Text'
      },
      {
        id: 5,
        title: 'Fifth Post',
        size: '8kb',
        type: 'Image'
      },
      {
        id: 6,
        title: 'Sixth Post',
        size: '18kb',
        type: 'Text'
      },
      {
        id: 7,
        title: 'Seventh Post',
        size: '14kb',
        type: 'Image'
      },
      {
        id: 8,
        title: 'Eighth Post',
        size: '22kb',
        type: 'Document'
      },
      {
        id: 9,
        title: 'Ninth Post',
        size: '9kb',
        type: 'Text'
      },
      {
        id: 10,
        title: 'Tenth Post',
        size: '16kb',
        type: 'Image'
      },
      {
        id: 11,
        title: 'Eleventh Post',
        size: '25kb',
        type: 'Document'
      },
      {
        id: 12,
        title: 'Twelfth Post',
        size: '11kb',
        type: 'Text'
      },
      {
        id: 13,
        title: 'Thirteenth Post',
        size: '19kb',
        type: 'Image'
      },
      {
        id: 14,
        title: 'Fourteenth Post',
        size: '13kb',
        type: 'Document'
      },
      {
        id: 15,
        title: 'Fifteenth Post',
        size: '21kb',
        type: 'Text'
      }
    ];

      for (const post of posts) {
        await db.post.create({
          data: {
            title: post.title,
            size: post.size,
            type: post.type,
            user: {
              connect: {
                id: post.id
              }
            }
          },
        })
      }

    // //DOCUMENTS
    const documents = [
      { id: 1, title: 'Document 1', size: '10kb', type: 'PDF' },
      { id: 2, title: 'Document 2', size: '15kb', type: 'PDF' },
      { id: 3, title: 'Document 3', size: '20kb', type: 'DOCX' },
    ];

    for (const doc of documents) {
      await db.document.create({
        data: {
          title: doc.title,
          size: doc.size,
          type: doc.type,
        },
      })
    }

    //FILES
    const files = [
      { id: 1, title: 'File 1', size: '5kb', type: 'TXT', documentId: 1 },
      { id: 2, title: 'File 2', size: '8kb', type: 'TXT', documentId: 1 },
      { id: 3, title: 'File 3', size: '12kb', type: 'TXT', documentId: 2 },
      { id: 4, title: 'File 4', size: '10kb', type: 'TXT', documentId: 2 },
      { id: 5, title: 'File 5', size: '15kb', type: 'TXT', documentId: 3 },
    ];

    for (const file of files) {
      await db.file.create({
        data: {
          title: file.title,
          size: file.size,
          type: file.type,
          document: {
            connect: {
              id: file.id
            }
          }
        },
      })
    }

  } catch (error) {
    console.warn('Please define your seed data.')
    console.error(error)
  }
}


