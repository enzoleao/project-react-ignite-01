import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { useState } from 'react';
import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';


export function Post({ author, publishedAt, content }){  
    const publisedDateFormated = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale:ptBR
    })
    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt,{
        locale:ptBR,
        addSuffix:true
    })
    const [comments, setComments] = useState([
        'Post legal'
    ]);
    
    const handleCreateNewComment = () => {
        event.preventDefault()
        const newCommentValue = event.target.comment.value;
        setComments([...comments, newCommentValue]);
        event.target.comment.value = '';
        
    }

    return (
        <article className={styles.post}>
            <header >
                <div className={styles.author}>
                    <Avatar  src={author.avatarUrl}  />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>


                <time title={publisedDateFormated} dateTime={publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>
            </header>
            <div className={styles.content}>
                {content.map(line => {
                    if (line.type === 'paragraph'){
                        return <p key={line.content}>{line.content}</p>
                    }
                    else if(line.type === 'link'){
                        return <p key={line.content}>{line.content}</p>
                    }
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feeedback</strong>
                
                <textarea
                    name="comment" 
                    placeholder="Deixe um comentário"
                />
                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map(comment => {
                    return <Comment key={comment} content={comment} />
                })}
            </div>
        </article>
    )
}