import React, { useState } from 'react'
import Avatar1 from '../images/avatar1.jpeg'
import Avatar2 from '../images/avatar2.jpeg'
import Avatar3 from '../images/avatar3.jpeg'
import Avatar4 from '../images/avatar4.jpeg'
import Avatar5 from '../images/avatar5.jpg'
import { Link } from 'react-router-dom'

const authorsData = [
  {id: 1, avatar: Avatar3, name: 'Ayra raay' , posts: 3},
  {id: 2, avatar: Avatar3, name: 'Rutvi raay' , posts: 5},
  {id: 3, avatar: Avatar3, name: 'Rayuu raay ' , posts: 0},
  {id: 4, avatar: Avatar3, name: 'Ayana M P ' , posts: 2},
  {id: 1, avatar: Avatar5, name: 'Rashi N P  ' , posts: 1},
]

const Authors = () => {
    const [authors, setAuthors] = useState(authorsData)
  return (
    <section className="authors">
      {authors.length > 0 ?  <div className="container authors__container">
            {
               authors.map( ({id, avatar, name, posts}) => {
                 return <Link key={id} to={`/posts/users/${id}`} className='author'>
                   <div className="author__avatar">
                    <img src={avatar} alt={`image of ${name}`} />
                   </div>
                   <div className="author__info">
                     <h4>{name}</h4>
                     <p>{posts}</p>
                   </div>
                 </Link>
               })
            }     
       </div> : <h2 className='center'>No users/authors found.</h2>}
    </section>
  )
}

export default Authors