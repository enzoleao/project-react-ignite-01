import { Header } from "./components/Header"
import { Post } from "./components/Post"
import { Siderbar } from "./components/Sidebar"
import styles from './App.module.css'
import './global.css'

function App() {
  return (
    <div>
        <Header/>
        <div className={styles.wrapper}>
          <Siderbar/>
          <main>
              <Post
                author="Enzo"
                content="Estamos em desenvolvimento"
              />
              <Post
                author="Enzo"
                content="Estamos em desenvolvimento"
              />
          </main>
        </div>
    </div>

  )
}

export default App
