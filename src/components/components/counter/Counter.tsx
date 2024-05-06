"use client";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { decrement, increment } from "@/redux/counterSlicer";
import { FaMinus, FaPlus } from "react-icons/fa6";

interface CounterProps {
  productId: string;
}

const Counter: React.FC<CounterProps> = ({ productId }) => {
  const count = useSelector(
    (state: RootState) => state.counter[productId]?.quantity || 0
  );
  const productPrice = useSelector(
    (state: RootState) => state.counter[productId]?.price
  );
  const dispatch = useDispatch();

  const [showConfirmation, setShowConfirmation] = useState(false);

  const incrementCount = () => {
    dispatch(increment({ productId, price: productPrice }));
  };

  const openConfirmationModal = () => {
    setShowConfirmation(true);
  };

  const closeConfirmationModal = () => {
    setShowConfirmation(false);
  };

  const decrementCount = () => {
    if (count > 0) {
      if (count === 1) {
        openConfirmationModal();
      } else {
        dispatch(decrement({ productId, price: productPrice }));
      }
    }
  };

  const confirmDecrementToZero = () => {
    closeConfirmationModal();
    dispatch(decrement({ productId, price: productPrice }));
  };

  return (
    <div className="w-full lg:w-28 py-[3px]  lg:py-1.5 px-3 rounded-full cursor-pointer flex items-center justify-between border border-brandColor">
      <button
        onClick={decrementCount}
        className={`border-r pr-3.5 md:pr-6.5 h-full ${
          count === 0 && "opacity-50 cursor-not-allowed"
        }`}
      >
        <FaMinus />
      </button>
      <p>{count}</p>
      <button
        onClick={incrementCount}
        className="border-l pl-3.5 md:pl-6.5 h-full"
      >
        <FaPlus />
      </button>

      {showConfirmation && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-5 rounded-xl shadow-lg max-w-[300px] md:max-w-[400px]  w-full">
            <p className="text-xl mb-5 lg:mb-10">
              Are you sure you want to delete this product from the basket?
            </p>
            <div className="flex justify-end w-full">
              <button
                className="bg-brandColor text-white  w-1/2 px-4 py-2 rounded-full mr-3"
                onClick={confirmDecrementToZero}
              >
                Yes
              </button>
              <button
                className="bg-lineColor w-1/2 px-4 py-2 rounded-full"
                onClick={closeConfirmationModal}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Counter;
