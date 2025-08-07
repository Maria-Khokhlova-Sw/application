import './CostItem.css';
import ConstDate from "./ConstDate.jsx";
import Card from "./Card.jsx";

function CostItem(props) {
    return (
        <Card className ="cost-item">
            <ConstDate date = {props.date} />
            <div className='cost-item__description'>
                <h2>{props.description}</h2>
                <div className='cost-item__price'>{props.amount}</div>
            </div>
        </Card>
    );
}

export default CostItem;
