import React, { useState, useEffect } from 'react';
import { TreeTable } from 'primereact/treetable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { SelectButton } from 'primereact/selectbutton';
import { TreeNode } from 'primereact/treenode';
import type { CellFailureProps } from '@redwoodjs/web'


import { QUERY } from 'src/components/Post/PostsCell'
import { useQuery } from '@redwoodjs/web';

// const QUERY = gql`
//   query FindPosts {
//     posts {
//       id
//       title
//       body
//       createdAt
//     }
//   }
// `

export const Loading = () => <div>Loading...</div>;

export const Failure = ({ error }: CellFailureProps) => (
    <div>Error loading posts: {error.message}</div>
);

  interface FilterModeOption {
    label: string;
    value: string;
}

  const FilterDemo = () => {
    const [nodes, setNodes] = useState<TreeNode>([]);
    const [globalFilter, setGlobalFilter] = useState<string>('');
    const [filterMode, setFilterMode] = useState('lenient');
    const [filterOptions] = useState<FilterModeOption[]>([
        { label: 'Lenient', value: 'lenient' },
        { label: 'Strict', value: 'strict' }
    ]);

    const { data, error, loading } = useQuery(QUERY);
    const posts = data?.posts;

  useEffect(() => {
    if (posts) {
      const formattedNodes = posts.map((post: any) => {
        return {
          key: post.id,
          data: {
            name: post.title,
            size: post.size,
            type: post.type,
            createdAt: post.createdAt,
          },
        };
      });
      setNodes(formattedNodes);
    }
  }, [posts]);

    const getHeader = () => {
        return (
            <div className="flex justify-content-end">
                <div className="p-input-icon-left">
                    <i className="pi pi-search"></i>
                    <InputText type="search" onInput={(e) => setGlobalFilter(e.target.value)} placeholder="Global Search" />
                </div>
            </div>
        );
    };

    let header = getHeader();

    if (loading) return <Loading />;
    if (error) return <Failure error={error} />;

    return (
        <div className="card ">
            <div className="flex justify-content-center mb-4">
                <SelectButton value={filterMode} onChange={(e) => setFilterMode(e.value)} options={filterOptions} />
            </div>
            <TreeTable value={nodes} globalFilter={globalFilter} header={header} filterMode={filterMode} tableStyle={{ minWidth: '50rem' }}>
                <Column field="name" header="Name" expander filter filterPlaceholder="Filter by name"></Column>
                <Column field="size" header="Size" filter filterPlaceholder="Filter by size"></Column>
                <Column field="type" header="Type" filter filterPlaceholder="Filter by type"></Column>
            </TreeTable>
        </div>
    )
}
export default FilterDemo;