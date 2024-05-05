import { AppDispatch, RootState } from "@/lib/store";
import { decrement, increment } from "@/redux/counterSlicer";
import { useDispatch, useSelector } from "react-redux";

interface CounterProps {
  productId: string;
}

const Counter: React.FC<CounterProps> = ({ productId }) => {
  const count = useSelector(
    (state: RootState) => state.counter[productId] || 0
  );
  const dispatch = useDispatch<AppDispatch>();

  const incrementCount = () => {
    dispatch(increment(productId));
  };

  const decrementCount = () => {
    dispatch(decrement(productId));
  };

  return (
    <div className="w-full lg:w-28 py-1 lg:py-2 px-6 rounded-full cursor-pointer flex items-center justify-between border border-lineColor">
      <button onClick={decrementCount}>-</button>
      {count}
      <button onClick={incrementCount}>+</button>
    </div>
  );
};

export default Counter;
