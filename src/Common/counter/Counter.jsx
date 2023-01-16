import React from "react";
import { useContext } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import AppContext from "../../GlobalStates/GlobalState";
import "./counter.css";

export default function Counter(props) {
  const { Increaseqty, Decreaseqty } = useContext(AppContext);

  return (
    <div className="counter_cont">
      <span
        className="values_calc"
        onClick={() => (props.item.qty > 1 ? Decreaseqty(props.item.id) : "")}
      >
        <AiOutlineMinus />
      </span>
      <span className="value">{props.item.qty}</span>

      <span className="values_calc" onClick={() => Increaseqty(props.item.id)}>
        <AiOutlinePlus />
      </span>
    </div>
  );
}
