import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import AllMeetupsPage from "./pages/AllMeetups";
import FavoriteMeetupsPage from "./pages/FavoriteMeetups";
import NewMeetupPage from "./pages/NewMeetup";
function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" exact element={<AllMeetupsPage />} />
        <Route path="/new-meetup" element={<NewMeetupPage />} />
        <Route path="favorite-meetups" element={<FavoriteMeetupsPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
