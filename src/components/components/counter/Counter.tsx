import { AppDispatch, RootState } from "@/lib/store";
import { decrement, increment } from "@/redux/counterSlicer";
import { useDispatch, useSelector } from "react-redux";
import { FaMinus, FaPlus } from "react-icons/fa6";

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
    <div className="w-full lg:w-28 py-1 md:py-2 lg:py-1.5 px-3 rounded-full cursor-pointer flex items-center justify-between border border-brandColor">
      <button
        onClick={decrementCount}
        className="border-r pr-3.5 md:pr-1.5  h-full"
      >
        <FaMinus />
      </button>
      <p>{count}</p>
      <button
        onClick={incrementCount}
        className="border-l pl-3.5 md:pl-1.5 h-full"
      >
        <FaPlus />
      </button>
    </div>
  );
};

export default Counter;
