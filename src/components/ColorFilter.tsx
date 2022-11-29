import { useState } from 'react';
import Dropdown from './Dropdown';

// Color Filter Component
const ColorFilter = ({ colors, filters, setFilters }: { colors: Array<string>, filters: { 'colors': Array<string>, 'date': Array<any>, 'speed': Array<any>, 'laser': string }, setFilters: Function }) => {

    // dropdown state open or closed. Closed by default
    const [dropdown, setDropdown] = useState(false);

    // function to toggle dropdown menu
    const toogleDropdown = () => {
        setDropdown(!dropdown)
    }

    // fuction to update state with changes in color filter
    const setColorFilter = (value: Array<string>) => {
        setFilters({
            ...filters,
            ['colors']: value
        })
    }

    // adds colors to Color Filter 
    const addColor = (color: string) => {
        // if option selected is "select all", add all colors to the color filter
        if (color === 'select all') {
            const filtered = colors.filter((e: string) => (e !== color && e !== 'select none'))
            setColorFilter(filtered);
            // else if option selected is " select non", set color filter to empty
        } else if (color === 'select none') {
            setColorFilter([""]);
            // else add color selected to the color filter
        } else {
            setColorFilter(filters['colors'].concat(color));
        }
        // close dropdown after selection
        setDropdown(false);
    }

    // removes color from ColorFilter
    const removeColor = (color: string) => {
        const filtered = filters['colors'].filter((e: string) => e !== color);
        setColorFilter(filtered);
    }

    return (<div className="autcomplete-wrapper">

        <div className="autcomplete">
            <div className='w-1/2 flex flex-col mx-auto space-y-2'>
                <h5 className='title-font font-pt-sans font-bold text-l text-blue-400 text-left'>Select one or more colors</h5>
                <div className="w-full flex flex-col items-center mx-auto">
                    <div className="w-full">
                        <div className="flex flex-col items-center relative">
                            <div className="w-full ">
                                <div className="my-2 p-1 flex border border-blue-500 bg-white rounded ">
                                    <div className="flex flex-auto flex-wrap">
                                        {filters['colors'].length > 0 ?
                                            (filters['colors'].map((color: string, key: number) => {
                                                return (
                                                    <div key={key} className="flex justify-center items-center m-1 font-medium py-1 px-2 bg-white rounded-full text-blue-900 bg-blue-1 border border-blue-200 ">
                                                        <div className="text-xs font-normal leading-none max-w-full flex-initial font-pt-sans text-blue-700">{color}</div>
                                                        <div className="flex flex-auto flex-row-reverse">
                                                            <div onClick={() => removeColor(color)}>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                                                    className="feather feather-x cursor-pointer hover:text-blue-400 rounded-full w-4 h-4 ml-2">
                                                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>)
                                            })) :
                                            <div className="flex-1">
                                                <input placeholder="Color..." disabled={true} className="bg-white p-1 px-2 appearance-none outline-none h-full w-full text-grey-800 font-pt-sans" />
                                            </div>
                                        }

                                    </div>
                                    <div className="text-blue-300 w-8 py-1 pl-2 pr-1 border-l flex items-center border-blue-200" onClick={toogleDropdown}>
                                        <button className="cursor-pointer w-6 h-6 text-grey-600 outline-none focus:outline-none">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-up w-4 h-4">
                                                <polyline points="18 15 12 9 6 15"></polyline>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {dropdown ? <Dropdown list={colors} addColor={addColor}></Dropdown> : null}
                    </div>
                </div>
            </div>

        </div>
    </div>)
};

export default ColorFilter;