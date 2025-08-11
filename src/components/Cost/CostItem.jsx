import './CostItem.css';
import ConstDate from "./ConstDate.jsx";
import Card from "../ui/Card.jsx";
import React, {useState} from "react";

const CostItem = (props) => {

    const [description, setDescription] = useState(props.description);
    const changeDescriptionHandle = () =>{
        setDescription('ddd');
    }
    return (
        <Card className ="cost-item">
            <ConstDate date = {props.date} />
            <div className='cost-item__description'>
                <h2>{description}</h2>
                <div className='cost-item__price'>{props.amount}</div>
            </div>
            <button onClick={changeDescriptionHandle}>Изменить описание</button>
        </Card>
    );
}

export default CostItem;
