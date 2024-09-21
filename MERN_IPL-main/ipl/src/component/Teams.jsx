import Header from "./Header1";
import { Link } from "react-router-dom";

const Teams = () => {
    const teams = [
        {
            id: 1,
            teamname: "Chennai Super Kings",
            image: 'https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/CSK/logos/Roundbig/CSKroundbig.png',
            colr: "rounded-lg font-serif text-base p-5 shadow-2xl bg-yellow-300 text-orange-800"
        },
        {
            id: 2,
            teamname: "Delhi Capitals",
            image: 'https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/DC/Logos/Roundbig/DCroundbig.png',
            colr: "rounded-lg font-serif text-base p-5 shadow-2xl bg-blue-800"
        },
        {
            id: 3,
            teamname: "Mumbai Indians",
            image: 'https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/MI/Logos/Roundbig/MIroundbig.png',
            colr: "rounded-lg font-serif text-base p-5 shadow-2xl bg-blue-600"
        },
        {
            id: 4,
            teamname: "Royal Challengers Banglore",
            image: 'https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/RCB/Logos/Roundbig/RCBroundbig.png',
            colr: "rounded-lg font-serif text-sm p-5 shadow-2xl bg-red-600"
        },
        {
            id: 5,
            teamname: "Sunrisers Hyderabad",
            image: 'https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/SRH/Logos/Roundbig/SRHroundbig.png',
            colr: "rounded-lg font-serif text-base p-5 shadow-2xl bg-orange-600"
        },
        {
            id: 6,
            teamname: "Punjab Kings",
            image: 'https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/PBKS/Logos/Roundbig/PBKSroundbig.png',
            colr: "rounded-lg font-serif text-base p-5 shadow-2xl bg-red-600"
        },
        {
            id: 7,
            teamname: "Rajasthan Royals",
            image: 'https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/RR/Logos/Roundbig/RRroundbig.png',
            colr: "rounded-lg font-serif text-base p-5 shadow-2xl bg-pink-600"
        },
        {
            id: 8,
            teamname: "Kolkata Knight Riders",
            image: 'https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/KKR/Logos/Roundbig/KKRroundbig.png',
            colr: "rounded-lg font-serif text-base p-5 shadow-2xl bg-violet-900"
        },
        {
            id: 9,
            teamname: "Lucknow Super Giants",
            image: 'https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/LSG/Logos/Roundbig/LSGroundbig.png',
            colr: "rounded-lg font-serif text-base p-5 shadow-2xl bg-indigo-700"
        },
        {
            id: 10,
            teamname: "Gujarat Titans",
            image: 'https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/GT/Logos/Roundbig/GTroundbig.png',
            colr: "rounded-lg font-serif text-base p-5 shadow-2xl bg-blue-950"

        }
    ]
    return (
        <>
            <Header name="TEAMS" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 p-5 text-gray-200  ">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {teams.map((team) => (
                        <Link to={'/TEAMS/' + String(team.id)} >
                            <div key={team.id} className={team.colr}>
                                <div className="flex flex-wrap" >
                                    <img src={team.image} className="max-w-32 shadow-lg rounded-full" />
                                    <div className="flex flex-col justify-center p-5 ">
                                        <h1>{team.teamname}</h1>
                                    </div>

                                </div>


                            </div></Link>
                    ))}
                </div>
            </div>


        </>
    )
}
export default Teams;