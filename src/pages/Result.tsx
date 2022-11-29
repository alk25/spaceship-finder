import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import data from '../data/data.json' //import data

// declare type of data objects
type Data = {
    color: string,
    'max speed': number,
    manufactured: string,
    laser: boolean
};

// Results page displaying filtered data
const Result = () => {

    const [searchParams, _] = useSearchParams(); // to read and parse query string at current URL
    const [filtered, setFiltered] = useState<Data[]>([]) //state variable holding filtered results

    // Function returning results from data.json based on filters
    const getData = () => {

        // retrieve data objects from file
        var filteredShips = data.spaceships

        // filter based on color
        if (colors && colors[0].length > 0) {
            filteredShips = data.spaceships.filter((e) => (colors.includes(e.color)))
        }

        // filter based on date of manufacture
        if (date && date.length > 0) {

            if (date.slice(-1) === '-') {
                filteredShips = filteredShips.filter((e) => ((new Date(e.manufactured)).getTime() <= (new Date(date.slice(0, -1))).getTime()))
            } else if (date.slice(-1) === '+') {
                filteredShips = filteredShips.filter((e) => ((new Date(e.manufactured)).getTime() >= (new Date(date.slice(0, -1))).getTime()))
            } else {
                filteredShips = filteredShips.filter((e) => ((new Date(e.manufactured)).getTime() === (new Date(date.slice(0)).getTime())))
            }
        }

        // filter based on speed
        if (speed && speed.toString() !== '0') {
            if (speed.slice(-1) === '-') {
                filteredShips = filteredShips.filter((e) => (e['max speed'] <= parseInt(speed.slice(0, -1))))
            } else if (speed.slice(-1) === '+') {
                filteredShips = filteredShips.filter((e) => (e['max speed'] >= parseInt(speed.slice(0, -1))))
            } else {
                filteredShips = filteredShips.filter((e) => (e['max speed'] === parseInt(speed.slice(0))))
            }
        }

        // filter based on pulse laser availability
        if (laser) {
            if (laser === 'with-laser') {
                filteredShips = filteredShips.filter((e) => (e.laser === true))
            } else {
                filteredShips = filteredShips.filter((e) => (e.laser === false))
            }

        }

        // update state
        setFiltered(filteredShips)


    }

    // parse query string, extract filter parameters and retrieve data on page load
    const colors = searchParams.get('colors')?.split(",")
    const date = searchParams.get('date')
    const speed = searchParams.get('speed')
    const laser = searchParams.get('laser')



    useEffect(() => {
        getData()
    }, [])



    return (
        <div className='space-y-10 pt-32 px-80  w-full objects-center'>
            <h3 className='title-font font-bold font-pt-sans text-xl text-left text-blue-700'>Available Spaceships</h3>
            {filtered.length > 0 ? <div className="mt-2 flex flex-col">
                <div className="-my-2 overflow-x-auto -mx-4 sm:-mx-6 lg:-mx-8">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="shadow overflow-hidden border-b border-grey-200 sm:rounded-lg">

                            <table className="min-w-full divide-y divide-blue-300">
                                <thead className="bg-blue-10">
                                    <tr>
                                        <th scope="col"
                                            className="px-6 py-3 text-center text-sm font-pt-sans text-blue-500 uppercase tracking-wider "
                                        > SpaceShip ID</th>
                                        <th scope="col"
                                            className="px-6 py-3 text-sm font-pt-sans tracking-wider text-center text-blue-500 uppercase "
                                        >Color</th>
                                        <th scope="col"
                                            className="px-6 py-3 text-sm font-pt-sans tracking-wider text-center text-blue-500 uppercase "
                                        >Maximum Speed</th>
                                        <th scope="col"
                                            className="px-6 py-3 text-sm font-pt-sans tracking-wider text-center text-blue-500 uppercase "
                                        >Date of Manufacture</th>
                                        <th scope="col"
                                            className="px-6 py-3 text-sm font-pt-sans tracking-wider text-center text-blue-500 uppercase "
                                        >Has Laser?</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-grey-1">
                                    {filtered.map((ship, key) => (
                                        <tr key={key} className={(key % 2) ? "bg-grey-1" : ""}>
                                            <td className="px-6 py-4 text-grey-700 text-center font-pt-sans whitespace-nowrap">{key}</td>
                                            <td className="px-6 py-4 text-grey-700 text-center font-pt-sans whitespace-nowrap">{ship[`color`]}</td>
                                            <td className="px-6 py-4 text-grey-700 text-center font-pt-sans whitespace-nowrap">{ship[`max speed`]}</td>
                                            <td className="px-6 py-4 text-grey-700 text-center font-pt-sans whitespace-nowrap">{ship[`manufactured`]}</td>
                                            <td className="px-6 py-4 text-grey-700 text-center font-pt-sans whitespace-nowrap">{ship[`laser`] === true ? 'Yes' : 'No'}</td>
                                        </tr>
                                    ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div> :
                <p className='font-pt-sans font-bold text-lg text-grey-600'>No ships found matching requirements</p>}
        </div >
    )
}

export default Result