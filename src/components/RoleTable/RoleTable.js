import React from 'react';
import { Table } from 'react-bootstrap';
import RoleTableRow from '../RoleTableRow/RoleTableRow';
import './RoleTable.css';

const RoleTable = ({roles=[], name}) => {

    return (
        <div className="mt-4">
            <Table responsive>
                <thead className="table-header">
                    <tr className='border'>
                        <th>Department/Role Name</th>
                        <th className='text-center'>Access Level</th>
                        <th className='text-center'>{name?'Summary':'No of members'}</th>
                        <th className='text-center'>Last Updated</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody className='table-body'>
                   {
                       roles.map(role =><RoleTableRow role={role} another={name} key={role.id} />)
                   }
                </tbody>
            </Table>
        </div>
    );
};

export default RoleTable;