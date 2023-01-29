import { Header } from "./components/Header"
import { Post } from "./components/Post"
import { Siderbar } from "./components/Sidebar"
import styles from './App.module.css'
import './global.css'

function App() {

  const posts = [
    {
      id: 1,
      author:{
        avatarUrl: "https://github.com/enzoleao.png",
        name: "Enzo Leao",
        role: "Developer"
      },
      content:[
        {type:'paragraph', content:'Fala rapaziada'},
        {type:'paragraph', content:'Acabei de postar conteudo novo'},
        {type:'link', content:'https://portfolioenzo.vercel.app/'}
      ],
      publishedAt:new Date('2022-05-03 20:00:00'),
    },
    {
      id: 2,
      author:{
        avatarUrl: "https://github.com/maykbrito.png",
        name: "Mayk Brito",
        role: "Educator"
      },
      content:[
        {id: 1,type:'paragraph', content:'Fala rapaziada'},
        {id: 2,type:'paragraph', content:'Acabei de postar conteudo novo'},
        {id: 3,type:'link', content:'https://portfolioenzo.vercel.app/'}
      ],
      publishedAt:new Date('2023-01-28 20:00:00'),
    },
  ];


  return (
    <div>
        <Header/>
        <div className={styles.wrapper}>
          <Siderbar/>
          <main>
              {
                posts.map(post=>{
                  return (
                  <Post
                    key={post.id}
                    author={post.author}
                    content={post.content}
                    publishedAt={post.publishedAt}
                  
                  />
                  )
                })
              }
          </main>
        </div>
    </div>

  )
}

export default App
