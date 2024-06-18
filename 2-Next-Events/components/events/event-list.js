import classes from "./event-list.module.css";
import EventItem from "./event-item";

export default function EventList(props) {
  return (
    <ul className={classes.list}>
      {props.items.map((event) => (
        <EventItem
          key={event.id}
          id={event.id}
          title={event.title}
          location={event.location}
          date={event.date}
          image={event.image}
        />
      ))}
    </ul>
  );
}
