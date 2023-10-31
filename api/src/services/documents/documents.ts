import type {
  QueryResolvers,
  MutationResolvers,
  DocumentRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const documents: QueryResolvers['documents'] = () => {
  return db.document.findMany()
}

export const document: QueryResolvers['document'] = ({ id }) => {
  return db.document.findUnique({
    where: { id },
  })
}

export const createDocument: MutationResolvers['createDocument'] = ({
  input,
}) => {
  return db.document.create({
    data: input,
  })
}

export const updateDocument: MutationResolvers['updateDocument'] = ({
  id,
  input,
}) => {
  return db.document.update({
    data: input,
    where: { id },
  })
}

export const deleteDocument: MutationResolvers['deleteDocument'] = ({ id }) => {
  return db.document.delete({
    where: { id },
  })
}

export const Document: DocumentRelationResolvers = {
  files: (_obj, { root }) => {
    return db.document.findUnique({ where: { id: root?.id } }).files()
  },
}
