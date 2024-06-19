import ReactDOM from "react-dom";
import classes from "./notification.module.css";

export default function Notification(props) {
  let statusClasses = "";
  if (props.status === "success") {
    statusClasses = classes.success;
  }
  if (props.status === "error") {
    statusClasses = classes.error;
  }

  return ReactDOM.createPortal(
    <div className={`${classes.notification} ${statusClasses}`}>
      <h2>{props.title}</h2>
      <p>{props.message}</p>
    </div>,
    document.getElementById("notifications")
  );
}
