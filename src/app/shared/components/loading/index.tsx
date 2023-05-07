import { IoReloadOutline } from "react-icons/io5";
import "./styles.css";

const Loading = () => {
  return (
    <section className="loading-container">
      <IoReloadOutline className="loading-icon"/>
      <p>please wait</p>
    </section>
  );
};

export default Loading;