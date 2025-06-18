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

function ProductList() {
  return (
    <div className={styles.productContainer}>
      <div className={styles.product}>
        <img className={styles.img} src="blackshades.jpg" alt="Product 1" />
        <h3> Black Shades</h3>
      </div>
      <div className={styles.product}>
        <img className={styles.img} src="brownshades.jpg" alt="Product 2" />
        <h3> Brown Shades</h3>
      </div>
      <div className={styles.product}>
        <img className={styles.img} src="polarisedshades.jpg" alt="Product 3" />
        <h3> Polarised Shades</h3>
      </div>
      {/* Add more products as needed */}
    </div>
  );
}
export default ProductList;