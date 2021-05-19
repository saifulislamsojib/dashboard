import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import deleteImg from '../../images/delete.svg';
import edit from '../../images/edit.svg';
import RoleTable from '../RoleTable/RoleTable';

const roles = [
    {
        id: '1',
        name: 'Management Team',
        accessLevel: 'All Access',
        members: '4',
        updated: '1 min'
    },
    {
        id: '2',
        name: 'Procurement Team',
        accessLevel: 'Restricted Access',
        members: '8',
        updated: '1 min'
    },
    {
        id: '3',
        name: 'Project Team',
        accessLevel: 'Restricted Access',
        members: '16',
        updated: '1 min'
    },
    {
        id: '4',
        name: 'IT Team',
        accessLevel: 'Restricted Access',
        members: '4',
        updated: '1 min'
    },
    {
        id: '5',
        name: 'Super Admin',
        accessLevel: 'All Access',
        members: '1',
        updated: '1 min'
    }
]

const Roles = () => {
    return (
        <section className="mt-5">
            <div>
                <button className="btn primary-btn mr-4 px-4">
                    <FontAwesomeIcon icon={faPlus} className="mr-2" /> Add Role
                </button>
                <img className="mr-4 " src={edit} alt="" />
                <img src={deleteImg} alt="" />
            </div>
            <RoleTable roles={roles} />
        </section>
    );
};

export default Roles;