import { useFoodDataMutate } from "../../hooks/useFoodMutate";
import { FoodData } from "../../interface/FoodData";
import "./card.css"
import { useState } from 'react';

interface InputProps{
    label: string,
    value: string | number,
    updatedValue(value: any): void
}

const Input = ({label, value, updatedValue}: InputProps) => {
    return (
        <>
            <label>{label}</label>
            <input value={value} onChange={event => updatedValue(event.target.value)}></input>
        </>
    )
}


export function CreateModal(){
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [image_url, setImage_url] = useState("");
    const { mutate } = useFoodDataMutate();

    const submit = () => {
        const foodData: FoodData = {
            title,
            price,
            image_url
        }

        mutate(foodData);
    }

    return (
        <>
            <div className="modal-overflow">
               <div className="modal-body">
                    <h2>Register a new item</h2>
                    <form className="form-container" action="">
                        <Input label="title" value={title} updatedValue={setTitle}/>
                        <Input label="price" value={price} updatedValue={setPrice}/>
                        <Input label="image_url" value={image_url} updatedValue={setImage_url}/>
                    </form>
                    <button onClick={submit} className="btn-secondary">Send</button>
               </div>
            </div>
        </>
    )
}