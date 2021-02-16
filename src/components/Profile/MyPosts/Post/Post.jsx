import s from './Post.module.css'


const Post = (props) => {
    return (
            <div className={s.item}>
                <img src='https://html5css.ru/w3css/img_avatar3.png'></img>
                {props.message}
                <span> лукасы</span>
                <span> {props.likesCount}</span>
            </div>
    )
}

export default Post

