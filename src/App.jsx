import { Header } from './components/header/Header'

import './global.css'
import styles from './App.module.css'

import { Post } from './components/post/Post'
import { Sidebar } from './components/sidebar/Sidebar'

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Jean Santos"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem hic, enim voluptatibus cum at corrupti quas vero, libero laudantium debitis, temporibus itaque. At veniam obcaecati ducimus optio tempora alias sed."
          />
          <Post
            author="Bruna Santos"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem hic, enim voluptatibus cum at corrupti quas vero, libero laudantium debitis, temporibus itaque. At veniam obcaecati ducimus optio tempora alias sed."
          />
        </main>
      </div>
    </div>
  )
}
