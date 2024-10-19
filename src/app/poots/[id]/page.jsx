import React from 'react';

const getDetailsPost = async (id)=>{
   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
   const data = await res.json()
   return data;
}
const PostDetailspage =async ({params}) => {
    const {title,body}= await getDetailsPost(params.id)
    console.log(params.id)
    return (
        <div>
            post details of {params.id}
            <h5>title : {title}</h5>
            <p>body: {body}</p>
        </div>
    );
};

export default PostDetailspage;