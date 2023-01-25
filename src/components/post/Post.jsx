import { Avatar } from '../avatar/Avatar'
import { Comment } from '../comentPost/Comment'
import style from './Post.module.css'

export function Post() {
  return (
    <article className={style.post}>
      <header>
        <div className={style.author}>
          <Avatar
        
            src="https://avatars.githubusercontent.com/u/43581104?v=4"
           
          />
          <dir className={style.authorInfo}>
            <strong>Jean Santos</strong>
            <span>Developer</span>
          </dir>
        </div>
        <time title="25 de Janeiro ás 11:11h" dateTime="2023-01-25 11:11:45">
          Publicado há 1h
        </time>
      </header>
      <div className={style.content}>
        Fala galeraa 👋
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>
          {' '}
          <a href=""> 👉 jane.design/doctorcare</a>
        </p>
        <p>
          {' '}
          <a href=""> #novoprojeto #nlw #rocketseat</a>
        </p>
      </div>
      <form className={style.commentForm}>
        <strong>Deixe seu Feedback</strong>
        <textarea placeholder="Deixe seu comentário" />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
      <div className={style.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}
