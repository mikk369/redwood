import React, { useState, useEffect } from 'react'

import { Column } from 'primereact/column'
import { InputText } from 'primereact/inputtext'
import { TreeNode } from 'primereact/treenode'
import { TreeTable } from 'primereact/treetable'

import { NodeService } from './../../service/NodeService'
import 'primeicons/primeicons.css'

export default function FilterDemo() {
  const [nodes, setNodes] = useState<TreeNode>([])
  const [globalFilter, setGlobalFilter] = useState<string>('')

  useEffect(() => {
    NodeService.getTreeTableNodes().then((data) => setNodes(data))
  }, [])

  const getHeader = () => {
    return (
      <div className="flex justify-content-end">
        <div className="p-input-icon-left ">
          <i className="pi pi-search" style={{ paddingLeft: '1rem' }}></i>
          <InputText
            type="search"
            onInput={(e) => setGlobalFilter(e.target.value)}
            placeholder="Global Search"
            style={{ textAlign: 'right' }}
          />
        </div>
      </div>
    )
  }

  const header = getHeader()

  return (
    <div className="card">
      <TreeTable
        value={nodes}
        globalFilter={globalFilter}
        header={header}
        tableStyle={{ minWidth: '50rem' }}
      >
        <Column
          field="name"
          header="Name"
          expander
          filter
          filterPlaceholder="Filter by name"
        ></Column>
        <Column
          field="size"
          header="Size"
          filter
          filterPlaceholder="Filter by size"
        ></Column>
        <Column
          field="type"
          header="Type"
          filter
          filterPlaceholder="Filter by type"
        ></Column>
      </TreeTable>
    </div>
  )
}
