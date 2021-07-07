import { useState, useEffect } from "react";
import MeetupList from "../components/meetups/MeetupList";

function AllMeetups() {
  const [isLoading, setIsLoading] = useState();
  const [loadMeetups, setLoadMeetups] = useState([]);

  async function allMeetups() {
    const res = await fetch(process.env.REACT_APP_FIREBASE_URL);
    const data = await res.json();
    console.log(data);

    return data;
  }

  useEffect(() => {
    setIsLoading(true);
    allMeetups().then((data) => {
      const meetups = [];
      let sortedMeetups = [];

      for (const key in data) {
        const meetup = {
          id: key,
          ...data[key],
        };

        meetups.push(meetup);

        sortedMeetups = meetups.reverse();
      }

      setIsLoading(false);
      setLoadMeetups(sortedMeetups);
    });

    // fetch(
    //   "https://technomancer-events-default-rtdb.firebaseio.com/meetups.json"
    // )
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((data) => {
    //     // when data is fetched from firebase it is an object and can't be mapped through
    //     const meetups = [];

    //     for (const key in data) {
    //       const meetup = {
    //         id: key,
    //         ...data[key],
    //       };

    //       meetups.push(meetup);
    //     }

    //     setIsLoading(false);
    //     setLoadMeetups(meetups);
    //   });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h2>All Events</h2>
      <MeetupList meetups={loadMeetups} />
    </section>
  );
}

export default AllMeetups;
