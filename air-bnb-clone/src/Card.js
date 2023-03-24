import star from "./images/star.png"
import cardImage from "./images/card-image.png"
import "./styles/card.css"


export default function Card(cards){
    console.log(cards)
    let badgeText
    if(cards.item.openSpots ===0){
        badgeText = "SOLD OUT"
    }else if(cards.item.location=="online"){
        badgeText = "ONLINE"
    }else{
        
    }
    return (
        <div className="card">
            <div className="card-img-container">
                <img className="card-img" src={cardImage}/>
                {badgeText &&<p className="sold-out">{badgeText}</p>}
            </div>
            <div className="overall">
                <img className="star" src={star}/>
                <p className="point">{cards.item.rating}</p>
                <p className="country">({cards.item.reviewCount}) &#183; {cards.country}</p>
            </div>
            <p className="description">{cards.item.title}</p>
            <p className="price">From ${cards.item.price}/ <span>person</span></p>
        </div>
    )
}