import sun from "../assets/sun.svg";
import water from "../assets/water.svg";

function CareScale({ scaleValue, careType }) {
  const range = [1, 2, 3];
  const scaleType =
    careType === "light" ? (
      <img src={sun} alt="sun" />
    ) : (
      <img src={water} alt="water" />
    );

  const HandleAlertCare = () => {
    let careAction = "";
    careType === "water" ? (careAction = "arrosage") : (careAction = "lumière");

    if (scaleValue === 1) {
      return alert(`Cette plante requiert peu de ${careAction}`);
    } else if (scaleValue === 2) {
      return alert(`Cette plante requiert modèrement de ${careAction}`);
    } else {
      alert(`Cette planet requiert beaucoup de ${careAction}`);
    }
  };

  return (
    <div onClick={HandleAlertCare}>
      {range.map((rangeElem) =>
        scaleValue >= rangeElem ? (
          <span key={rangeElem.toString()}>{scaleType}</span>
        ) : null
      )}
    </div>
  );
}

export default CareScale;
