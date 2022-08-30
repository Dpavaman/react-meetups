import MeetUpItem from "./MeetupItem"

function MeetupList(props){
    return (
        <ul>
            {props.meetups.map(meetup => <MeetUpItem key={meetup.id} id={meetup.id} address={meetup.address} description={meetup.description} title = {meetup.title} image={meetup.image}/>)}
        </ul>
    )
}

export default MeetupList