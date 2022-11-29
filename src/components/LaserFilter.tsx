
// Laser Filter Component
const LaserFilter = ({ filters, setFilters }: { filters: { 'colors': Array<string>, 'date': Array<any>, 'speed': Array<any>, 'laser': string }, setFilters: Function }) => {

    // fuction to update state with changes in laser filter criteria
    const setLaserFilter = (value: string) => {
        setFilters({
            ...filters,
            ['laser']: value
        })
    }

    // handles changes in filter
    const handleChange = (event: any) => {
        if (event.target.checked) {
            setLaserFilter(event.target.value)
        } else {
            setLaserFilter("no-laser")
        }

    }
    return (
        <div className="space-y-4 w-1/2 flex flex-col mx-auto ">
            <h5 className='title-font font-pt-sans font-bold text-l text-blue-400 text-left'>Select Pulse Laser availability</h5>
            <div className="flex flex-col space-y-2" onChange={handleChange}>
                <label className='text-left font-pt-sans text-blue-700'><input type="checkbox" value="with-laser"></input> Has pulse laser</label>


            </div>
        </div>
    )
}

export default LaserFilter