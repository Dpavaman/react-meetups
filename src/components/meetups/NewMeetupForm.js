import { useRef } from "react";
import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";
function NewMeetupForm(props) {
  const textInputElementRef = useRef();
  const imageInputElementRef = useRef();
  const addressInputElementRef = useRef();
  const descriptionInputElementRef = useRef();
  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = textInputElementRef.current.value;
    const enteredImage = imageInputElementRef.current.value;
    const enteredAddress = addressInputElementRef.current.value;
    const enteredDescription = descriptionInputElementRef.current.value;

    const meetupData = {
      title : enteredTitle,
      image : enteredImage,
      address :enteredAddress,
      description : enteredDescription,
    };

    props.onAddMeetup(meetupData)
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" ref={textInputElementRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" required id="image" ref={imageInputElementRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Meetup Address</label>
          <input
            type="text"
            required
            id="address"
            ref={addressInputElementRef}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Meetup Descriptipn</label>
          <textarea
            type="text"
            rows="5"
            required
            id="description"
            ref={descriptionInputElementRef}
          />
        </div>
        <div className={classes.actions}>
          <button>Add meetups</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
