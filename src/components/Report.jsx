const Report = () => {

  return (
    <div className="mt-5 pb-10" id="report">
        <div className='text-blue-900 pb-2'>
            <h2 className='text-2xl font-light'>Reports</h2>
        </div>
        <div className='flex flex-col justify-center items-center lg:flex-row justify-between gap-5'>
            <div className='text-center'>
                <div className='bg-white p-5 pt-2 rounded-md font-light border-l-7 border-blue-500'>
                    <h3 className='text-blue-500 text-2xl mb-2 font-light'>Employees</h3>
                    <p>Top managers are following an aproach to including more challenge and responsability in job to make it more appealing to all employees.
                    The workers have been given opportunity to communicate directly with managers, as well as to other people who use their services.</p>
                </div>
            </div>
            <div className='text-center'>
                <div className='bg-white p-5 pt-2 rounded-md font-light border-l-7 border-yellow-500'>
                    <h3 className='text-yellow-500 text-2xl mb-2 font-light'>Customers</h3>
                    <p>An increased customer satisfaction is one of our goal to achieve. As such, direct feedback and client relationship are focused at first to ensure that.
                    Being aware of an influx of competitors in the field, we are considering to improve all what we have to provide as services, to make difference.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Report;