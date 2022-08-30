import { useContext } from "react";
import MeetupList from "../components/meetups/MeetupList";
import FavoritesContext from "../store/favorite-context";

function FavoriteMeetupsPage(){

    const favoriteCtx = useContext(FavoritesContext)

    let content
    if(favoriteCtx.totalFavourites === 0){
        content = <p>uh oh!,You have got no favorites yet!, Start adding some ?</p>
    }else{
        content = <MeetupList meetups={favoriteCtx.favorites} />
    }

    return (
        <section>
            <h1>My Favorites</h1>
            {content}
        </section>
      );
}

export default FavoriteMeetupsPage