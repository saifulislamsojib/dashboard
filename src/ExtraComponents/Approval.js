import React from 'react';

const Approval = ({color}) => {
    return (
        <svg className="mr-2" width="24" height="20" viewBox="0 0 26 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M0.25 0.25V19.75H25.75V0.25H0.25ZM15.25 3.25V8.5H10.75V3.25H15.25ZM7.75 3.25H3.25V8.5H7.75V3.25ZM3.25 16.75V11.5H7.75V16.75H3.25ZM10.75 11.5V16.75H15.25V11.5H10.75ZM22.75 16.75H18.25V11.5H22.75V16.75ZM18.25 3.25V8.5H22.75V3.25H18.25Z" fill={color||'#CFD3DA'} />
        </svg>
    );
};

export default Approval;