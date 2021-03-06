import React from "react";
import "../Components/Entries.css";
import AddedExpense from "./AddedExpense";

const Entries = ({
  inputHandler,
  categories,
  amount,
  addBtn,
  expenses,
  deleteHandlerFn,
}) => {


  const deleteClickHandler = (itemIndex) => {
   deleteHandlerFn(itemIndex)
  };

  return (
    <div className="table-display">
      <h1> Enter your expenses </h1>
      <table className="table-dark">
        <thead>
          <tr>
            <th>Expense No.</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <p>#</p>
            </td>
            <td>
              <input
                type="number"
                name="amount"
                placeholder="Amount"
                onChange={inputHandler}
              />
            </td>
            <td>
              <select type="select" name="category" onChange={inputHandler}>
                <option value="Choose...">Choose...</option>
                {categories.map((category) => (
                  <option key={category.id}>{category.name}</option>
                ))}
              </select>
            </td>
            <td>
              <input
                name="description"
                type="text"
                placeholder="Description"
                onChange={inputHandler}
              />
            </td>
            <td>
              <button
                disabled={amount === "" ? true : false}
                className="btn-success"
                onClick={addBtn}
              >
                Add
              </button>
            </td>
          </tr>

          {expenses.map((exp, index) => {
            return (
              <AddedExpense
                key={index}
                index={index + 1}
                amount={exp.amount}
                category={exp.category}
                description={exp.description}
                deleteHandler={() => deleteClickHandler(index)}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Entries;
