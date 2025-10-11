import React from 'react'
import PostAuthor from '../components/PostAuthor'
import { Link } from 'react-router-dom'

const PostDetail = () => {
  return (
     <section className="post-detail">
       <div className="container post-detail__container">
        <div className="post-deatail__header">
            <PostAuthor/>
            <div className="post-detail__buttons">
              <Link to={`/posts/wewer/edit`} className='btn sm primary'>Edit</Link>
              <Link to={`/posts/wewer/delete`} className='btn sm danger'>Delete</Link>

            </div>
        </div>
       </div>
     </section>
  )
}

export default PostDetail
