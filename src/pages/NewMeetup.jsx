import React from "react";
import { useHistory } from "react-router";
import NewMeetupForm from "../components/meetups/NewMeetupForm";

const NewMeetup = () => {
  const history = useHistory();
  const handleAddMeetup = (meetupData) => {
    fetch(process.env.REACT_APP_FIREBASE_URL, {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      history.replace("/");
    });
  };
  return (
    <section>
      <h2 className="add">Add New Event</h2>
      <NewMeetupForm onAddMeetup={handleAddMeetup} />
    </section>
  );
};

export default NewMeetup;
