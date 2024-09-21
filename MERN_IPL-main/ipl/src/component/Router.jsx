import { Link, Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import Schedule from "./Schedule";
import Teams from "./Teams";
import Team from "./Team";
import Videos from "./Videos";
import TopPlayersByRuns from "./Stats";
import PlayerForm from "./Add_team";
function Router() {



    return (<div>

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/SCHEDULE" element={<Schedule />} />
            <Route path="/TEAMS" element={<Teams />} />
            <Route path="/TEAMS/1" element={<Team id={1} />} />
            <Route path="/TEAMS/2" element={<Team id={2} />} />
            <Route path="/TEAMS/3" element={<Team id={3} />} />
            <Route path="/TEAMS/4" element={<Team id={4} />} />
            <Route path="/TEAMS/5" element={<Team id={5} />} />
            <Route path="/TEAMS/6" element={<Team id={6} />} />
            <Route path="/TEAMS/7" element={<Team id={7} />} />
            <Route path="/TEAMS/8" element={<Team id={8} />} />
            <Route path="/TEAMS/9" element={<Team id={9} />} />
            <Route path="/TEAMS/10" element={<Team id={10} />} />
            <Route path="/VIDEOS" element={<Videos />} />
            <Route path="/add" element={<PlayerForm/>} />
            {/* <Route path="/TEAMS/:id" element={<Team id={1} />} /> */}
            <Route path="/STATS" element={ <TopPlayersByRuns/>} />

        </Routes>

    </div>)
}
export default Router;

