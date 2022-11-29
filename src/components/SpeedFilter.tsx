
// Speed filter component
const SpeedFilter = ({ filters, setFilters }: { filters: { 'colors': Array<string>, 'date': Array<any>, 'speed': Array<any>, 'laser': string }, setFilters: Function }) => {

    // set min and max speed limits
    const min = 50;
    const max = 200;

    // fuction to update state with any of the three changes: (1) speed value, (2) include all speeds less than set speed, (3) include all speeds greater than set date
    const setSpeedFilter = (value: any, idx: number) => {
        let speed = filters['speed']
        speed[idx] = value
        setFilters({
            ...filters,
            ['speed']: speed
        })
    }


    // handle speed value change
    const handleChange = (event: any) => {
        const value = Math.max(min, Math.min(max, Number(event.target.value))) //always keep value between min and max
        setSpeedFilter(value, 0)
    };

    // handle changes in inclusion criteria
    const handleConditionChange = (event: any) => {
        if (event.target.value === 'less-than') {
            setSpeedFilter(false, 1)
            setSpeedFilter(true, 2)
        } else if (event.target.value === 'greater-than') {
            setSpeedFilter(true, 1)
            setSpeedFilter(false, 2)
        } else {
            setSpeedFilter(false, 1)
            setSpeedFilter(false, 2)
        }

    }


    return (
        <div className="autcomplete-wrapper">
            <div className="autcomplete">
                <div className="space-y-4 w-1/2 flex flex-col mx-auto">
                    <h5 className='title-font font-pt-sans font-bold text-l text-blue-400 text-left'>Select maximum speed</h5>
                    <div className="flex flex-row space-x-4">
                        <div className=' my-2 p-1 bg-white border border-blue-500 rounded  h-full'>
                            <select className='text-grey-700 font-pt-sans' onChange={handleConditionChange}>
                                <option value="exactly">exactly </option>
                                <option value="less-than">less than </option>
                                <option value="greater-than">greater than</option>
                            </select>
                        </div>


                        <input className="my-2 p-1  bg-white  border border-blue-500 rounded  bg-white p-1 px-2 appearance-none outline-none h-full  text-grey-900 font-pt-sans" type="number" placeholder=" Speed... " value={filters['speed'][0] > 0 ? filters['speed'][0] : ""} onChange={handleChange}></input>

                    </div>
                </div >
            </div>
        </div >
    )
}

export default SpeedFilter