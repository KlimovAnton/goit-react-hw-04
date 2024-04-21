import css from "./LoadMoreBtn.module.css";

export default function LoadMoreBtn ({ addArticle }) {
    return (
        <div className={css.container}>
            <button className={css.button} onClick={addArticle} type="button">Load more articles</button>
        </div>
    )
}