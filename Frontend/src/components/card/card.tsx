import "./card.css"

interface CardProps{
    title: string,
    price: number,
    image_url: string
}

export function Card({title, price, image_url}: CardProps){
    return (
        <>
            <div className="card">
                <img src={image_url} alt="Food Image" />
                <h2>{title}</h2>
                <p><b>{price}</b></p>
            </div>
        </>
    )
}