//! Syntaxe 1 : courte
/*  function CareScale({ scaleValue, careType }) {
  const range = [1, 2, 3];

  const scaleType = careType === "light" ? "☀️" : "💧";

  return (
    <div>
      {range.map((rangeElem) =>
        scaleValue >= rangeElem ? (
          <span key={rangeElem.toString()}>{scaleType}</span>
        ) : null
      )}
    </div>
  );
} */

//! Syntaxe 2 : longue
function CareScale(props) {
  console.log(props);
  //?syntaxe sans desctructutation
  //const scaleValue = props.scaleValue
  //const careType = props.careType

  //?Syntaxe avec destructuration
  const { scaleValue, careType } = props;
  // On évite de multiplier les déclarations qui sans cette syntaxe auraient été :
  // const scaleValue = props.scaleValue et
  // const careType = props.careType

  const scaleType = careType === "light" ? "☀️" : "💧";
  //? on affiche le nombre d'icone methode 1
  /*   const range = [1, 2, 3];
  return (
    <div>
      {range.map((rangeElem) =>
        scaleValue >= rangeElem ? (
          <span key={rangeElem.toString()}>{scaleType}</span>
        ) : null
      )}
    </div>
  ); */

  //? on affiche le nombre d'icone methode 2
  const icons = [];
  for (let i = 1; i <= scaleValue; i++) {
    icons.push(<span key={i}>{scaleType}</span>);
  }

  //ici on une utilise la fonction handleClick qui contient un switch pour gerer l'alert
  return <div onClick={() => handleClick(scaleValue, careType)}>{icons}</div>;

  //autre methode d'affichage mais cette fois avec un objet au lieu d'un switch
  /*   const quantityLabel = {
    1: "peu",
    2: "modérément",
    3: "beaucoup",
  };

  return (
    <div
      onClick={() =>
        alert(
          `Cette plante requiert ${quantityLabel[scaleValue]} ${
            careType === "light" ? "de lumière" : "d'arrosage"
          }`
        )
      }
    >
      {icons}
    </div>
  ); */
}

//! Gestion du clique sur les icones light/water
function handleClick(scaleValue, careType) {
  const scaleType = careType === "light" ? "de lumiere" : "d'arrosage";

  let value;
  switch (scaleValue) {
    case 1:
      value = "peu";
      break;
    case 2:
      value = "modérement";
      break;
    case 3:
      value = "beaucoup";
      break;
    default:
      value = "Jour non valide";
  }

  alert(`Cette plante requiert ${value} ${scaleType}`);
}

export default CareScale;
