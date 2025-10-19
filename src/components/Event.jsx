import { eventData } from './eventData';

function Event() {
    const textColor = eventData.map(each => {
        if (each.status === "Completed") {
            return 'green';
        } else if (each.status === 'Upcoming') {
            return 'orange';
        } else {
            return 'blue';
        }
    });

    return (
        <div className="mt-5 pb-10" id='event'>
            <h2 className="text-2xl text-blue-900 pb-2 font-light">Events</h2>
            <table className="bg-white table-auto border-collapse border-1 border-gray-300 sm:p-5 rounded-lg">
                <thead>
                    <tr className=''>
                        <th className="border-1 border-gray-300 py-2 px-3 font-normal title">Title</th>
                        <th className="border-1 border-gray-300 py-2 px-3  font-normal description">description</th>
                        <th className="border-1 border-gray-300 py-2 px-3  font-normal location">Location</th>
                        <th className="border-1 border-gray-300 py-2 px-3  font-normal capacity">Capacity</th>
                        <th className="border-1 border-gray-300 py-2 px-3 font-normal">Date</th>
                        <th className="border-1 border-gray-300 py-2 px-3 font-normal status">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {eventData.map((event, index) => (
                        <tr key={index}>
                            <td className='border-1 border-gray-300 py-1 px-4 font-light title'>
                                {event.title}
                            </td>
                            <td className="border-1 border-gray-300 py-1 px-4 font-light description">
                                {event.description}
                            </td>
                            <td className='border-1 border-gray-300 py-1 px-4 font-light location'>
                                {event.location}
                            </td>
                            <td className="text-center border-1 border-gray-300 py-1 px-3 font-light capacity">
                                {event.capacity}
                            </td>
                            <td className='text-center border-1 border-gray-300 py-1 px-3 date font-light'>
                                {event.date}
                            </td>
                            <td className="text-center border-1 border-gray-300 py-1 px-3 font-light status" style={{ color: textColor[index] }}>{event.status}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Event;
