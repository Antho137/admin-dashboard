import Report from "../components/Report";
import Event from "../components/Event";

const Dashboard = () => {

    return (
        <div className="relative py-5 px-7.5 sm:px-15 md:px-20 lg:ml-40">
            <div className='text-blue-900 mb-5'>
                <h2 className='text-3xl font-light'>Dashboard</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 justify-center items-center mt-5 pb-10">
                <div className="bg-blue-700 text-white text-center p-3 rounded-lg">
                    <h3 className="text-xl">Total Events</h3>
                    <p className="text-xl pt-1 font-light">10</p>
                </div>
                <div className="bg-yellow-500 text-white text-center p-3 rounded-lg">
                    <h3 className="text-xl">Upcoming</h3>
                    <p className="text-xl pt-1 font-light">7</p>
                </div>
                <div className="bg-blue-500 text-white text-center p-3 rounded-lg">
                    <h3 className="text-xl">Completed </h3>
                    <p className="text-xl pt-1 font-light">3</p>
                </div>
                <div className="bg-yellow-700 text-white text-center p-3 rounded-lg">
                    <h2 className="text-xl">Total Users</h2>
                    <p className="text-xl pt-1 font-light">840</p>
                </div>
            </div>
            <hr className="text-blue-300" />
            <Event />
            <hr className="text-blue-300" />
            <Report />
        </div>
    );
};

export default Dashboard;
