import "./Post.css"
import styles from "./Post.module.css"
import { useParams, Routes, Route } from "react-router-dom"
import posts from "json/posts.json"
import PostModelo from "components/PostModelo"
import ReactMarkdown from "react-markdown"
import NaoEncontrada from "paginas/NaoEncontrada"
import PaginaPadrao from "components/PaginaPadrao"
import PostCard from "components/PostCard"


const Post = () => {
    const parametros = useParams()

    const postAtual = posts.find((post) => {
        return post.id === Number(parametros.id);
    })

    if (!postAtual) {
        return <NaoEncontrada />
    }

    const postsRecomendados = posts
    .filter((post) => post.id !== Number(parametros.id))
    .sort((a, b) => b.id - a.id)
    .slice(0, 4)

    return (
        <Routes>
            <Route path="*" element={<PaginaPadrao />}>
                <Route index element={
                    <PostModelo fotoCapa={`/assets/posts/${postAtual.id}/capa.png`} titulo={postAtual.titulo}>
                        <div className="post-markdown-container">
                            <ReactMarkdown>
                                {postAtual.texto}
                            </ReactMarkdown>
                        </div>

                    <h2 className={styles.tituloOutrosPosts}>Outros posts que você pode gostar:</h2>
                    <ul className={styles.postsRecomendados}>
                        {postsRecomendados.map((post) => (
                            <li key={post.id}>
                                <PostCard post={post} />
                            </li>
                        ))}
                    </ul>
                    </PostModelo>
                }/>
            </Route>
        </Routes>
    )
}

export default Post