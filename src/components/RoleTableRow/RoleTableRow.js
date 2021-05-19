import { faMinusCircle, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import eye from '../../images/eye.svg';
import RowDetails from '../RowDetails/RowDetails';

const RoleTableRow = ({role, another}) => {

    const history = useHistory();

    const {name, accessLevel, members, summary, updated} = role;

    const [checked, setChecked] = useState(accessLevel!=='No Access');

    const [showDetails, setShowDetails] = useState(false);

    const handleChange = (e) => {
        setChecked(e.target.checked);
    }

    const handleClick = () => {
        if (another) {
            setShowDetails(!showDetails);
        }
        else{
            history.push(`/access-control/permissions/role/${name.split(' ')[0]}`);
        }
        
    }

    return (
        <>
            <tr onClick={handleClick} role="button" className='border'>
                <td className={!another?'role-name':''}><span className={!another?'name':''}>
                    {another&&<FontAwesomeIcon icon={showDetails?faMinusCircle:faPlusCircle} className='mr-2' />}
                    {name}
                </span></td>
                <td className='text-center'>
                    {!showDetails&&<span className={`${accessLevel==='All Access'?'alert-success text-success':accessLevel==='No Access'?'alert-secondary text-secondary':'alert-danger text-danger'} access-level`}>{accessLevel}</span>}
                </td>
                <td className='text-center'>{!showDetails?members||summary:''}</td>
                <td className='text-center'>{updated}</td>
                <td className='text-center'>
                    {
                        another?
                        <Form.Check
                        type="switch"
                        id={name.split(' ')[0]}
                        checked={checked}
                        onChange={handleChange}
                        />
                        :<img src={eye} alt="" />
                    }
                </td>
            </tr>
            {showDetails&&<RowDetails accessLevel={accessLevel} setChecked={setChecked} />}
        </>
    );
};

export default RoleTableRow;