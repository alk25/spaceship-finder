import Datepicker from "react-tailwindcss-datepicker";

// Date filter component
const DateFilter = ({ filters, setFilters }: { filters: { 'colors': Array<string>, 'date': Array<any>, 'speed': Array<any>, 'laser': string }, setFilters: Function }) => {

    // fuction to update state with any of the three changes: (1) date value, (2) include all dates before set date, (3) include all dates after set date
    const setDateFilter = (value: any, idx: number) => {
        let date = filters['date']
        date[idx] = value
        setFilters({
            ...filters,
            ['date']: date
        })
    }

    // handle changes in date value
    const handleValueChange = (newValue: any) => {
        //set new date
        if (newValue.startDate) {
            setDateFilter(newValue.startDate.toString(), 0) //update state
        }
    }

    // handle changes in inclusion criteria
    const handleConditionChange = (event: any) => {
        if (event.target.value === 'before') {
            setDateFilter(true, 1)
            setDateFilter(false, 2)
        } else if (event.target.value === 'after') {
            setDateFilter(false, 1)
            setDateFilter(true, 2)
        } else {
            setDateFilter(false, 1)
            setDateFilter(false, 2)
        }

    }


    return (
        <div className="autcomplete-wrapper">
            <div className="autcomplete">
                <div className="space-y-4 w-1/2 flex flex-col mx-auto ">
                    <h5 className='title-font font-pt-sans font-bold text-l text-blue-400 text-left'>Select date of manufacture</h5>
                    <div className="flex  flex-row space-x-4">
                        <div className=' my-2 p-2 bg-white border border-blue-500 rounded  h-full'>
                            <select className='text-grey-700 font-pt-sans' onChange={handleConditionChange}>
                                <option value="exactly">on</option>
                                <option value="before">before</option>
                                <option value="after">after</option>
                            </select>
                        </div>
                        <div className='my-2 border border-blue-500 rounded  '>
                            <Datepicker
                                useRange={false}
                                asSingle={true}
                                startFrom={new Date('1,1,2018')}
                                value={{ startDate: filters['date'][0], endDate: filters['date'][0] }}
                                onChange={handleValueChange}
                                placeholder={'YYYY-MM-DD'}
                            />
                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
}

export default DateFilter