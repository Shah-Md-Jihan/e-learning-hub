import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SubDetail = () => {
    const sub_details = useLoaderData();
    console.log(sub_details);
    return (
        <div>
            <h2>Sub details</h2>
        </div>
    );
};

export default SubDetail;