import { useState } from "react";
import "../styles/Footer.css";

function Footer() {
  // imputeValue = "Entrer votre mail"
  // setInputValue =  valeur que l'on va defenir dans le champs
  const [inputValue, setInputValue] = useState("Entrer votre mail");

  function handleInput(e) {
    setInputValue(e.target.value);
  }

  function handleBlur() {
    if (!inputValue.includes("@")) {
      alert(
        "Attention, il n'y a pas d'@, ceci n'est pas une adresse valide 😥"
      );
    }
  }

  return (
    <footer className="lmj-footer">
      <div className="lmj-footer-elem">
        Pour les passionné·e·s de plantes 🌿🌱🌵
      </div>

      <div className='lmj-footer-elem'>Laissez-nous votre mail :</div>
			<input
				placeholder='Entrez votre mail'
				onChange={handleInput}
				value={inputValue}
				onBlur={handleBlur}
			/>

    </footer>
  );
}

//! on teste voir si l'utilisateur a oublié un " @ "

export default Footer;
