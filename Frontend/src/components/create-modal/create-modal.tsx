import { useFoodDataMutate } from "../../hooks/useFoodMutate";
import { FoodData } from "../../interface/FoodData";
import { useState, useEffect } from 'react';
import "./modal.css"

interface InputProps{
    label: string,
    value: string | number,
    updatedValue(value: any): void
}

interface ModalProps {
    closeModal(): void
}

const Input = ({label, value, updatedValue}: InputProps) => {
    return (
        <>
            <label>{label}</label>
            <input value={value} onChange={event => updatedValue(event.target.value)}></input>
        </>
    )
}


export function CreateModal({ closeModal }: ModalProps){
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [image_url, setImage_url] = useState("");
    const { mutate, isSuccess, isLoading } = useFoodDataMutate();

    const submit = () => {
        const foodData: FoodData = {
            title,
            price,
            image_url
        }

        mutate(foodData);
    }

    useEffect( () => {
        if(!isSuccess) return
        closeModal();
    }, [isSuccess]);

    return (
        <>
            <div className="modal-overlay">
               <div className="modal-body">
                    <h2>Register a new item</h2>
                    <form className="form-container" action="">
                        <Input label="title" value={title} updatedValue={setTitle}/>
                        <Input label="price" value={price} updatedValue={setPrice}/>
                        <Input label="image" value={image_url} updatedValue={setImage_url}/>
                    </form>
                    <button onClick={submit} className="btn-secondary">
                        {isLoading ? 'Saving..' : 'Save'}
                    </button>
               </div>
            </div>
        </>
    )
}