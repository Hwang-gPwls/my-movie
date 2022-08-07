import Menu from "../components/Menu";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { requestData } from "../modules/news";
import { RootState } from "../modules/index";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const sagaData = useSelector((state: RootState) => state.news);

  useEffect(() => {
    dispatch(requestData());
    console.log(sagaData);
  }, []);

  return (
    <>
      <button
        onClick={() => {
          dispatch(requestData());
        }}
      >
        fetch
      </button>
      <div>{sagaData}</div>
      <Menu />
    </>
  );
};

export default HomeScreen;
