import React, { useState} from "react";
import './CostForm.css';
const CostForm =()=>{
    const [inputName, setName] = useState('');
    const [inputAmount, setAmount] = useState('');
    const [inputDate, setDate] = useState('');

    // const [userInput, setUserInput] = useState({
    //     name:'',
    //     amount:'',
    //     date:'',
    // });
    //
    const nameChangeHandler = (e) => {
        setName(e.target.value);
        // setUserInput((previousState)=>{
        //     return {
        //         ...previousState,
        //         name: e.target.value,
        //     }
        // });
    };
    const amountChangeHandler  = (e) => {
        setAmount(e.target.value);
        // setUserInput((previousState)=>{
        //     return {
        //         ...previousState,
        //         amount: e.target.value,
        //     }
        // });
    };
    const dateChangeHandler  = (e) => {
        setDate(e.target.value);
        // setUserInput((previousState)=>{
        //     return {
        //         ...previousState,
        //         date: e.target.value,
        //     }
        // });
    };
    const submitHandler = (e) => {
        e.preventDefault();
        const costData = {
            name: inputName,
            amount: inputAmount,
            date: new Date(inputDate),
        };
        console.log(costData);
        setName('');
        setAmount('');
        setDate('');
    }
    return (
        <form onSubmit={submitHandler}>
            <div className="new-cost__controls">
                <div className="new-cost__control">
                    <label>Название</label>
                    <input type='text' value={inputName} onChange={nameChangeHandler}/>
                </div>
                <div className="new-cost__control">
                    <label>Сумма</label>
                    <input type='number' value={inputAmount} min='0.01' step='0.01' onChange={amountChangeHandler}/>
                </div>
                <div className="new-cost__control">
                    <label>Дата</label>
                    <input type='date' value={inputDate} min='2019-01-01' step='2022-12-21' onChange={dateChangeHandler}/>
                </div>
                <div className="new-cost__actions">
                    <button type='submit'>Добавить Расход</button>
                </div>
            </div>
        </form>
    )
}
export default CostForm;