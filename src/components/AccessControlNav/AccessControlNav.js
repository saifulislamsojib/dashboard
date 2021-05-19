import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Approval from '../../ExtraComponents/Approval';
import Network from '../../ExtraComponents/Network';
import sync from '../../images/sync.svg';

const AccessControlNav = () => {

    const [innerActive, setInnerActive] = useState('permissions');

    return (
        <div className="d-sm-flex justify-content-between border-bottom p-2 access-control-nav position-relative">
            <div>
                <Link onClick={() => setInnerActive('permissions')} to='/access-control/permissions' className={`${innerActive==='permissions'&&'inner-active'}`}>
                    <Network color={`${innerActive==='permissions'?'#673ab7':''}`} /> Permissions
                </Link>
                <span className="ml-3 text-secondary">|</span>
                <Link onClick={() => setInnerActive('approval')} to='/access-control/approval' className={`${innerActive==='approval'&&'inner-active'} ml-3`}>
                    <Approval color={`${innerActive==='approval'?'#673ab7':''}`} /> Approval Matrix
                </Link>
            </div>
            <div className='mr-3 mt-3 mt-sm-0'><img src={sync} alt="" className="mr-2" /> Last synced 15 mins ago</div>
        </div>
    );
};

export default AccessControlNav;