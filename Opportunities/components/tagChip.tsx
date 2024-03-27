import React from 'react';

interface TagProps {
    tag: string;
    num: number;
    detail: boolean; 
}

const Tag: React.FC<TagProps> = ({ tag, num, detail }) => {

    if (detail) { 
        return (
            num%2 == 0 ? <div className="flex text-amber-400 text-xs font-semibold me-2 px-2.5 py-2 rounded-full  bg-amber-50 mb-2 mr-2">{tag}</div>:
                        <div className=" text-emerald-500 text-xs font-semibold me-2 px-2.5 py-2 rounded-full bg-emerald-50 mb-2 mr-2">{tag}</div>

        );
    } 

    return (
        num%2 == 0 ? <div className="text-amber-400 text-xs font-semibold me-2 px-2.5 py-2 rounded-full border border-amber-400">{tag}</div>:
        <div className=" text-indigo-600 text-xs font-semibold me-2  py-2 rounded-full border border-indigo-600 px-6">{tag}</div>
    );
};

export default Tag;