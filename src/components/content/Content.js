import styles from './Content.module.css'
import Article from "../articles/Article";

const buildingArray = [
  {
    title: "Kaunas castle",
    author: "Vytautas Didysis",
    img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/d1/3e/79/caption.jpg?w=600&h=600&s=1",
    outdated:true,
  },
  {
    title: "Ninth fort",
    author: "War",
    img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/4b/f0/d9/the-ninth-fort-the-fortificati.jpg?w=1000&h=800&s=1",
    outdated:true,
  },
  {
    title: "Old town",
    author: "Mindaugas",
    img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/92/46/e8/caption.jpg?w=1000&h=-1&s=1",
    outdated:false,
  },
  {
    title: "Liberty boulvard",
    author: "People",
    img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/f5/f0/bc/trees-in-centre-of-street.jpg?w=1000&h=800&s=1",
    outdated:false,
  },
  {
    title: "Ciurlionis Art museum",
    author: "kaunas government",
    img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/51/72/c6/caption.jpg?w=1000&h=-1&s=1",
    outdated:true,
  },
  {
   title: "Pazaislis monastery",
   author: "Sisters",
   img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/5c/ec/30/pazaislis-from-the-road.jpg?w=1000&h=-1&s=1",   
   outdated:true,
  }
];

const Content = () => {
    const filteredArray = buildingArray.filter((article) => article.outdated);
  return (
    <div className={styles.content}>
      {filteredArray.map((article) => (
        <Article title={article.title} author={article.author} img={article.img} alt='' />
      ))}
    </div>
  );
};
export default Content;

