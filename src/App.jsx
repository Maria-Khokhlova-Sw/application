import React from "react";
import Costs from "./components/Cost/Costs.jsx";
import NewCost from "./components/NewCost/NewCost.jsx";

const App = () => {

    const cost = [
        {
            date: new Date(2021, 5, 23),
            description: 'Холодильник',
            amount:999.99
        },
        {
            date: new Date(2024, 6, 13),
            description: 'Чупа-чупс',
            amount:4.99
        },
        {
            date: new Date(2025, 2, 7),
            description: 'Кириешечки',
            amount:9.99
        },
    ];

    return (
        <div >
            <NewCost/>
            <Costs cost={cost} />
        </div>
    )
}

export default App
