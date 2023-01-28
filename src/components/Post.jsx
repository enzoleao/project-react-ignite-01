import styles from './Post.module.css'

export function Post(){
    return (
        <article className={styles.post}>
            <header className=''>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/enzoleao.png" alt="" />
                    <div className={styles.authorInfo}>
                        <strong>Enzo Leao</strong>
                        <span>Web Developer</span>
                    </div>
                </div>


                <time title='11 de Maio às 8:13' dateTime='2022-05-11 08:13:25'>Publicado há 1h</time>
            </header>
            <div className={styles.content}>
                <p>Olá galera</p>

                <p>Acabei de enviar um projeto para meu portfolio</p>

                <p><a href="https://portfolioenzo.vercel.app/projetos">portfolioenzo.vercel</a></p>

                <p>Novos projetos sempre</p>
            </div>
        </article>
    )
}