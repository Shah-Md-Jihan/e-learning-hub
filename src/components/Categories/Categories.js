import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Categories = () => {
    const categories = useLoaderData();
    return (
        <div>
            <h3>This is Categories{categories.length}</h3>
        </div>
    );
};

export default Categories;