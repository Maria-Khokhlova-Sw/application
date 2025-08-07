import "./Costs.css";
import CostItem from "./CostItem.jsx";
import Card from "./Card.jsx";

function Costs({ cost }) {
    return (
        <Card className ="costs">
            {cost.map((item, index) => (
                <CostItem
                    key={index}
                    date={item.date}
                    description={item.description}
                    amount={item.amount}
                />
            ))}
        </Card>
    );
}

export default Costs;
