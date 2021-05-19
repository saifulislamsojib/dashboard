import React, { useState } from 'react';

const permissions = [
    'View items in access',
    'Edit items in access',
    'Create items in access',
    'Delete items in access'
]

const RowDetails = ({accessLevel, setChecked}) => {

    const [access, setAccess] = useState(accessLevel);

    const handleAccess = (e) => {
        setAccess(e.target.id);
        setChecked(true)
    }

    return (
        <tr className="border">
            <td colSpan="5">
                <small>All aspects in the bidding module</small>
                <div className="row container mt-3 mx-auto">
                    <div className="col-md-5">
                        <h6>Access Control</h6>
                            <div className="mt-3 form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="All Access" checked={access==='All Access'} onChange={handleAccess} />
                                <label className="form-check-label" htmlFor="All Access">
                                All Access <small className="text-muted d-block">Can access all items</small>
                                </label>
                            </div>
                            <div className="mt-3 form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="Restricted Access" checked={access==='Restricted Access'} onChange={handleAccess} />
                                <label className="form-check-label" htmlFor="Restricted Access">
                                    Restricted Access <small className="text-muted d-block">Can access only assigned or created items</small>
                                </label>
                            </div>
                    </div>
                    <div className="col-md-1 d-md-block d-none">
                        <div className="separator"></div>
                    </div>
                    <div className="col-md-5 mt-3 mt-md-0">
                        <h6>Permissions</h6>
                        {
                            permissions.map((permission, index) => (
                                <div key={index} className="form-check mt-3">
                                    <input className="form-check-input" type="checkbox" id={`flexCheckDefault${index+3}`} />
                                    <label className="form-check-label" htmlFor="flexCheckDefault3">
                                        {permission}
                                    </label>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </td>
        </tr>
    );
};

export default RowDetails;