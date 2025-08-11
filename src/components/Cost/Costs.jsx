import "./Costs.css";
import CostItem from "./CostItem.jsx";
import Card from "../ui/Card.jsx";

const Costs = ({ cost }) => {
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
