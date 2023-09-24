import CareScale from "./CareScale";
import "../styles/PlantItem.css";


//ajouter les props methode 1 
//function PlantItem({ id, name, cover, water, light }) {

//ajouter les props methode 2 (destructuration)
function PlantItem(props) {
  const {  name, cover, water, light , price } = props;

	return (
		<li className='lmj-plant-item' onClick={() => handleClick(name)}>
			<span className='lmj-plant-item-price'>{price}€</span>
			<img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
			{name}
			<div>
				<CareScale careType='water' scaleValue={water} />
				<CareScale careType='light' scaleValue={light} />
			</div>
		</li>
	)
}

function handleClick(e) {
    console.log('✨ Ceci est mon event :', e)
    alert(`Vous voulez acheter 1 ${e}? Très bon choix 🌱✨`)
}



export default PlantItem;
