import React from 'react';
import Pos from './posChip';
import Tag from './tagChip';
import Image, { StaticImageData } from 'next/image';

interface CardProps {
    avatar: StaticImageData | string;
    title: string;
    description: string;
    position: string;
    tags: string[];
    company: string;
    address: string;
}

const Card: React.FC<CardProps> = ({ avatar, title, description, position, tags, company, address }) => {
    

    return (
        <div className="flex px-12 py-6 bg-white rounded-3xl hover:bg-gray-100 space-x-6 max-w-mi border">
            <div className=''>
                <Image src={avatar} className="w-52"
                    alt="Logo" width={66} height={59} />
            </div>
            <div className='flex flex-col space-y-2 mb-1.5'>
                <h2 className='text-xl font-semibold'>{title}</h2>
                <div className='flex space-x-2'>
                    <div className='text-gray-400 text-base'>{company}</div>
                    <span className="my-auto block h-1 w-1 rounded-full bg-gray-500 content-['']"></span>
                    <div className='text-gray-400 text-base'>{address}</div>
                </div>
                <p className='text-base'>{description}</p>
                <div className='flex mt-3 space-x-2'>
                    <Pos position={position}></Pos>
                    <div
                        className="min-h-[1em] w-px self-stretch bg-gray-200">

                    </div>
                    <div className='flex '>
                        {tags.map((tag, index) => (
                            <Tag key={index} num={index} tag={tag} detail={false}></Tag>

                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;