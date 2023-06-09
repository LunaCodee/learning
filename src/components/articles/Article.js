import styles from "./Article.module.css";

const Article = (props) => {
  console.log("props", props);
  return (
    <div>
      <img className={styles.image} src={props.img} alt='' />
      <h6>{props.author}</h6>
      <h2>{props.title}</h2>
    </div>
  );
};

export default Article;