// import styles from './Product.module.css';

// export default function Product(props) {
//     return (
//         <div className= {styles.product}>
//             <img src = {props.image} className = {styles.img}/>
//             <h3> {props.name}</h3>  
//         </div>
//     )
// }
import styles from './Product.module.css';

function Product(props) {
  return (
    <div className={styles.productContainer}>
      <div className={styles.product}>
        <img className={styles.img} src={props.image} alt="image" />
        <h3>{props.name}</h3>
      </div>
    </div>
  );
}
export default Product;