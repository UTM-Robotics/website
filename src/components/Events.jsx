import { EVENTS } from "./details/eventDetails";

import "../styles/Events.css";

const Events = () => {
  return (
    <div id="eventContainer">
      <h1 id="header">Upcoming events</h1>
      <div id="events">
        {EVENTS.map((event) => (
          <div className="card" key={event.id}>
            <div id="cardface">
              <p>{event.name}</p>
            </div>
            <div id="cardHeader" className="overlay">
              <label id="eventName">{event.name}</label>
            </div>
            <div id="cardFooter" className="overlay">
              <div id="footDetails">
                <label id="eventDetails">{event.description}</label>
                <div id="venueGrid">
                  <label>{event.venue}</label>
                  <label>{event.startTime}</label>
                  <label>{event.date}</label>
                </div>
                <a href={event.url}>
                  <button id="redirect">View Details</button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
