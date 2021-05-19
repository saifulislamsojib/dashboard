import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import edit from '../../images/edit.svg';
import RoleTable from '../RoleTable/RoleTable';

const roles = [
    {
        id: '1',
        name: 'Budget',
        accessLevel: 'All Access',
        summary: 'View | Create | Edit | Delete',
        updated: '1 min'
    },
    {
        id: '2',
        name: 'Bidding',
        accessLevel: 'No Access',
        summary: '-',
        updated: '1 min'
    },
    {
        id: '3',
        name: 'Vendor Portal',
        accessLevel: 'Restricted Access',
        summary: 'View | Create',
        updated: '1 min'
    },
    {
        id: '4',
        name: 'Purchase Order/Work Order',
        accessLevel: 'Restricted Access',
        summary: 'View | Create',
        updated: '1 min'
    },
    {
        id: '5',
        name: 'Organizational Profile',
        accessLevel: 'All Access',
        summary: 'View | Create | Edit | Delete',
        updated: '1 min'
    },
    {
        id: '6',
        name: 'Permissions & Access Control',
        accessLevel: 'No Access',
        summary: '-',
        updated: '1 min'
    }
]

const Role = () => {
    const {name} = useParams();
    const history = useHistory();

    const [innerActive, setInnerActive] = useState('permissions');

    return (
        <div className="mt-5">
            <h5>
                <FontAwesomeIcon icon={faArrowLeft} onClick={()=> history.push('/access-control/permissions')} className="mr-3" role="button" />
                {name} Team
                <img className="mr-4 ml-4" src={edit} alt="" />
            </h5>
            <div className="border-bottom p-2 access-control-nav mt-4">
                <Link onClick={() => setInnerActive('permissions')} to={`/access-control/permissions/role/${name}`} className={`${innerActive==='permissions'&&'inner-active'}`}>
                    Access Control
                </Link>
                <span className="ml-3 text-secondary">|</span>
                <Link onClick={() => setInnerActive('approval')} to={`/access-control/permissions/role/${name}`} className={`${innerActive==='approval'&&'inner-active'} ml-3`}>
                    Assigned Members
                </Link>
            </div>
            <RoleTable roles={roles} name={`${name} Team`} />
        </div>
    );
};

export default Role;