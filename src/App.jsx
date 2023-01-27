import { Header } from "./components/Header"
import { Post } from "./Post"
import './global.css'
import styles from './App.module.css'
import { Siderbar } from "./components/Sidebar"

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
