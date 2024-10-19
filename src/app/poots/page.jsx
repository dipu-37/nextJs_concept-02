import { getPost } from '@/services/postApi';
import Link from 'next/link';
import React from 'react';


const Postpage = async() => {
    const postdata = await getPost();
    console.log(postdata);
    return (
        <div className='h-screen'>
           
            <h6>all post</h6>
            <div className='grid grid-cols-4 gap-6'>
            {
                postdata?.slice(0,10).map(({title,body,id})=> (
                    <div className='border-2 p-6' key={id}>
                        <h6> title:{title}</h6>
                        <h6>description : {body}</h6>
                        <button>
                            <Link 
                            href={`/poots/${id}`}
                            className='bg-red-400 px-4 py-2'>details</Link>
                        </button>
                    </div>
                )) 
            }
            </div>
        </div>
    );
};

export default Postpage;