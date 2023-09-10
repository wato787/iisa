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

  const getCount = trpc.count.getCount;

  const stopCount = trpc.count.stopCount.useMutation({
    onSuccess: (res) => {
      dispatch(setCountData(res));
    },
  });

  const breakCount = trpc.count.breakCount.useMutation({
    onSuccess: (res) => {
      dispatch(setCountData(res));
    },
  });

  return {
    createCount,
    getCount,
    breakCount,
    stopCount,
  };
};
