import "./styles/general.css"
import Header from "./Header"
import Hero from "./Hero"
import Card from "./Card"
import CardData from "./CardData"



export default function App() {
    const cards = CardData.map(item => {
        return (
            <Card 
                key={item.id}
                item={item}
                // openSpots={item.openSpots}
                // location={item.location}
                // country={item.country}
                // price={item.price}
                // reviewCount={item.reviewCount}
                // title={item.title}
                // rating={item.rating}
            />
        )
    })
    return (
        <div>
            <Header />
            <Hero />
            <div className="cardBox">{cards}</div>
        </div>
    )
}
