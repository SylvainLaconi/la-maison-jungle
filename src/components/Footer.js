import { useState } from "react";
import "../styles/Footer.css";

function Footer() {
  const [inputValue, setInputValue] = useState("");

  const HandleAlertMessage = (e) => {
    e.preventDefault();
    return (
      !inputValue.includes("@") &&
      alert("Attention, il n y'a pas d'@, ceci n'est pas une adresse valide")
    );
  };

  return (
    <footer className="lmj-footer">
      <div className="lmj-footer-elem">
        Pour les passionné·e·s de plantes 🌿🌱🌵
      </div>
      <div className="lmj-footer-elem">Laissez-nous votre mail :</div>
      <form onSubmit={HandleAlertMessage}>
        <input
          type="mail"
          placeholder="jean.durand@mail.com"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <input type="submit" value="Envoyer" />
      </form>
    </footer>
  );
}

export default Footer;
