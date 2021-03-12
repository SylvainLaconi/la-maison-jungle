import '../styles/cart.css'

function Cart() {
    const monsteraPrice = 8;
    const lierrePrice = 10;
    const bouquetPrice = 15;
    return (
      <div className="lmj-cart">
        <h2>Panier</h2>
        <ul>
          <li>Monstera : {monsteraPrice} euros</li>
          <li>Lierre : {lierrePrice} euros</li>
          <li>Bouquet de fleurs : {bouquetPrice} euros</li>
        </ul>
        Total : {monsteraPrice + lierrePrice + bouquetPrice} euros
      </div>
    );
  }

  export default Cart