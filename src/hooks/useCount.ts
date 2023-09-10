import { useDispatch } from "react-redux";
import { trpc } from "../utils/trpc";
import { setCountData } from "../redux/slice/countSlice";

export const useCount = () => {
  const dispatch = useDispatch();
  const createCount = trpc.count.createCount.useMutation({
    onSuccess: (res) => {
      dispatch(setCountData(res));
    },
  });

  const stopCount = trpc.count.stopCount.useMutation({
    onSuccess: (res) => {
      dispatch(setCountData(res));
    },
  });

  return {
    createCount,

    stopCount,
  };
};
