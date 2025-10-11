import React from 'react'
import PostAuthor from '../components/PostAuthor'
import { Link } from 'react-router-dom'
import Tumbnail from '../images/logo22.jpeg'

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
          <h1>volkswagen Bus</h1>
          <div className="post-detail__thumbnail">
              <img src={Tumbnail} alt="" />
          </div>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Voluptates doloribus quia consectetur sequi voluptas, ullam nihil,
             adipisci laudantium distinctio corrupti doloremque ab consequatur. 
            Natus nisi ipsum aspernatur nihil quo? Consectetur, soluta incidunt? 
            Sunt assumenda tenetur obcaecati reiciendis
             maiores? Accusantium, alias!
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam expedita porro illo explicabo velit laudantium odio autem, magnam beatae? Praesentium minus assumenda aspernatur illo ipsum quos ad deserunt corrupti ut earum repudiandae possimus soluta nobis, numquam eum? Beatae obcaecati cum voluptatem vitae, perspiciatis laborum aperiam ratione praesentium sunt dignissimos accusantium rem veniam ducimus soluta. Omnis?
          </p>
        
         <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo sint repudiandae vero consectetur, odit cupiditate placeat quas aliquam dolore optio accusamus, facilis eum commodi eveniet reprehenderit temporibus sunt quos soluta dolores libero, veniam harum tempore. Eos nisi laboriosam laborum quis. Suscipit quibusdam dignissimos, tempora nobis, pariatur laudantium reiciendis commodi, aspernatur incidunt voluptates praesentium qui. Nulla dignissimos, quia placeat vitae saepe impedit velit commodi veniam numquam aut dolore nesciunt suscipit reiciendis iste cumque rem atque provident aspernatur tempora molestiae nam eveniet! Libero cumque dolor similique voluptatum quam doloremque alias, aut magni dolore? Nihil consectetur eos, neque aliquid odio, dolor pariatur at deleniti possimus esse fugiat totam delectus molestias laborum nulla illum maiores? </p> 

       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum vero numquam enim nisi corrupti magnam facilis, vel fuga incidunt inventore?</p>
       <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi sapiente earum velit hic labore unde quos vero, eius quidem dolores dicta voluptatem. Voluptatum, animi. Repudiandae, assumenda eveniet molestiae vel veritatis quibusdam similique, aperiam nihil labore ut, minus soluta laudantium. Obcaecati aperiam eius neque. Officia laudantium rem cumque aut quas obcaecati reprehenderit consequuntur unde voluptatibus dolorum repellat vel voluptatum totam, natus aperiam consectetur repellendus deleniti quasi veritatis sapiente reiciendis suscipit! Consequatur repellat earum doloremque culpa molestias temporibus ipsam aperiam iste, corrupti nobis excepturi, nisi reprehenderit aliquam error adipisci! Repellat quibusdam necessitatibus vel consequatur inventore ab, enim, nisi voluptatibus molestiae beatae culpa amet, quas ullam laudantium vitae eos quia alias blanditiis consequuntur. Tempore eligendi quibusdam expedita, totam, quas minima veniam laudantium quisquam, vel natus velit incidunt nisi culpa. Nulla, molestias accusantium. Modi, neque atque iste, quis ipsam nulla incidunt et maxime eius soluta harum provident omnis labore reprehenderit quia laborum. Nemo placeat, ab corporis deleniti repellendus id laudantium enim architecto eveniet eius, ipsam voluptates corrupti iste. Dolorum quae cupiditate iste, temporibus, corporis repudiandae architecto beatae mollitia excepturi error at ducimus nulla rerum necessitatibus voluptatibus rem quidem expedita dolores ratione facilis amet esse. Aspernatur fugiat eius dolore dolorum ipsam autem ipsa facere ullam!
       </p>
       </div>

       
     </section>
  )
}

export default PostDetail
