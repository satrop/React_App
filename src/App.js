import React, { useState } from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMY_EXPENSES = [
    {
        id: "e1",
        title: "Toilet Paper",
        amount: 12,
        date: new Date(2022, 0, 14),
    },
    {
        id: "e2",
        title: "New TV",
        amount: 799.49,
        date: new Date(2022, 5, 12),
    },
    {
        id: "e3",
        title: "Car Insurance",
        amount: 294.67,
        date: new Date(2022, 8, 28),
    },
    {
        id: "e4",
        title: "New Desk (Wooden)",
        amount: 450,
        date: new Date(2022, 9, 12),
    },
    {
        id: "e5",
        title: "Book",
        amount: 20.55,
        date: new Date(2022, 10, 12),
    },
    {
        id: "e6",
        title: "Plant",
        amount: 15,
        date: new Date(2022, 10, 12),
    },

    {
        id: "e7",
        title: "Computer",
        amount: 450,
        date: new Date(2021, 7, 12),
    },
    {
        id: "e8",
        title: "Glasses",
        amount: 20.55,
        date: new Date(2021, 9, 12),
    },
    {
        id: "e9",
        title: "A Thing",
        amount: 15,
        date: new Date(2021, 10, 12),
    },

    {
        id: "e10",
        title: "Books",
        amount: 45,
        date: new Date(2020, 7, 12),
    },
    {
        id: "e11",
        title: "Tress",
        amount: 160,
        date: new Date(2020, 9, 12),
    },
    {
        id: "e12",
        title: "Soap",
        amount: 70,
        date: new Date(2020, 10, 12),
    },
    {
        id: "e13",
        title: "Filters",
        amount: 43,
        date: new Date(2020, 10, 12),
    },
    {
        id: "e14",
        title: "Cheese",
        amount: 18.85,
        date: new Date(2020, 10, 12),
    },
    {
        id: "e15",
        title: "Movies",
        amount: 35.45,
        date: new Date(2020, 11, 12),
    },
];

const App = () => {
    const [expenses, setExpenses] = useState(DUMY_EXPENSES);

    const addExpenseHandler = (expense) => {
        setExpenses((prevExpenses) => {
            return [expense, ...prevExpenses];
        });
    };

    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler} />
            <Expenses items={expenses} />
        </div>
    );
};

export default App;
