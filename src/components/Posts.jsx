import React, { useState } from 'react'

import Thumbnail1 from '../images/blog1.jpg'
import Thumbnail2 from '../images/blog2.jpg'
import Thumbnail3 from '../images/blog3.jpg'
import Thumbnail4 from '../images/blog4.jpg'
import PostItem from './PostItem'

const DUMMY_POSTS = [
    {
        id: '1',
        thumbnail: Thumbnail1,
        category: 'education',
        title: 'This is the title of the very first post on this blog',
        desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque iure rerum pariatur nam officiis error veritatis quidem, sit ex unde aliquid labore optio quod incidunt ab aspernatur quos? Dolore, pariatur. ',
        authorID: 3
    },
        {
        id: '2',
        thumbnail: Thumbnail2,
        category: 'science',
        title: 'This is the title of the very first post on this blog',
        desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque iure rerum pariatur nam officiis error veritatis quidem, sit ex unde aliquid labore optio quod incidunt ab aspernatur quos? Dolore, pariatur. ',
        authorID: 1
    },
        {
        id: '3',
        thumbnail: Thumbnail3,
        category: 'weather',
        title: 'This is the title of the very first post on this blog',
        desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque iure rerum pariatur nam officiis error veritatis quidem, sit ex unde aliquid labore optio quod incidunt ab aspernatur quos? Dolore, pariatur. ',
        authorID: 13
    },
        {
        id: '4',
        thumbnail: Thumbnail4,
        category: 'farming',
        title: 'This is the title of the very first post on this blog',
        desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque iure rerum pariatur nam officiis error veritatis quidem, sit ex unde aliquid labore optio quod incidunt ab aspernatur quos? Dolore, pariatur. ',
        authorID: 11
    },
]

const Posts = () => {
    const [posts, setPosts] = useState(DUMMY_POSTS)
  return (
    <section className='posts'>
         {
            posts.map((id, thumbnail, category, title, description, authorID)=>
                 <PostItem key={id} postID={id} thumbnail={thumbnail} category={category} title={title} 
                 description={description} authorID={authorID}/> )
         }
    </section>
  )
}

export default Posts