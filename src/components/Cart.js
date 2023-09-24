import "../styles/Cart.css";
import { useState, useEffect } from 'react'
function Cart({ cart, updateCart }) {
  //const monsteraPrice = 8;
  /*   const ivyPrice = 10;
  const flowerPrice = 15; */

  /*
  Tout d'abord, les crochets  []  . Si cette syntaxe peut vous paraître un peu particulière, 
  il s'agit en fait de la même pratique que nous avions vue dans la partie précédente : 
  la déstructuration. Sauf qu'ici, ça s'appelle la décomposition, parce qu'il s'agit d'un tableau et non d'un objet.
  */
  //const [cart, updateCart] = useState(0); //on attribut la valeur initial 0 à la state "cart"
  //console.log(cart);

  const [isOpen, setIsOpen] = useState(true);

  const total = cart.reduce(
    (acc, plantType) => acc + plantType.amount * plantType.price,
    0
  );

  // mettre à jour le titre de l'onglet de mon navigateur.
  useEffect(() => {
    document.title = `LMJ: ${total}€ d'achats`
}, [total])

  return isOpen ? (
    <div className="lmj-cart">
      <button
        className="lmj-cart-toggle-button"
        onClick={() => setIsOpen(false)}
      >
        Fermer
      </button>
      {cart.length > 0 ? (
        <div>
          <h2>Panier</h2>
          <ul>
            {cart.map(({ name, price, amount }, index) => (
              <div key={`${name}-${index}`}>
                {name} {price}€ x {amount}
              </div>
            ))}
          </ul>
          <h3>Total :{total}€</h3>
          <button onClick={() => updateCart([])}>Vider le panier</button>
        </div>
      ) : (
        <div>Votre panier est vide</div>
      )}
    </div>
  ) : (
    <div className="lmj-cart-closed">
      <button
        className="lmj-cart-toggle-button"
        onClick={() => setIsOpen(true)}
      >
        Ouvrir le Panier
      </button>
    </div>
  );
}

export default Cart;
