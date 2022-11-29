import { useState } from 'react';
import ColorFilter from '../components/ColorFilter';
import SpeedFilter from '../components/SpeedFilter';
import DateFilter from '../components/DateFilter';
import LaserFilter from '../components/LaserFilter';
import { useNavigate, createSearchParams } from 'react-router-dom';


// Navigate dynamically to the Results page displaying the result of the filter query string passed in the URL
const useNavigateFilter = () => {
    const navigate = useNavigate();
    return (pathname: string, params: { colors: string, date: string, speed: string, laser: string }) =>
        navigate({ pathname, search: `?${createSearchParams(params)}` }); //create URL search parameters and navigate to url containg the filter query
};

// Filter Page displaying the filter UI
const Filter = () => {

    // create dynamic navigation function
    const navigateFilter = useNavigateFilter();

    // set pre-specified collection of colors
    const coloroptions = ['blue', 'purple', 'orange', 'green', 'select all', 'select none']

    // create one state variable for all the filters
    const [filters, setFilters] = useState({
        'colors': [],
        'date': ['2018-1-1', false, false], //contains three elements [date (string), inclue all Before flag (boolean), include all After flag (boolean)]. Defaults to manufactured exactly on 1/1/2018
        'speed': [50, false, false], //contains three elements [speed (int), include all Greater flag (boolean), include all Less flag (boolean)]. Defaults to speed exactly equal to 50
        "laser": "no-laser" //Defaults to no laser
    })



    const handleSubmit = () => {

        // transform filters into string parameters 
        const params = {
            'colors': "",
            'date': "",
            'speed': "",
            "laser": ""
        }
        params['colors'] = filters['colors'].toString()
        params['date'] = filters['date'][0].toString()
        filters['date'][1] && (params['date'] = params['date'] + '-')
        filters['date'][2] && (params['date'] = params['date'] + '+')
        params['speed'] = filters['speed'][0].toString()
        filters['speed'][1] && (params['speed'] = params['speed'] + '+')
        filters['speed'][2] && (params['speed'] = params['speed'] + '-')
        params['laser'] = filters['laser'].toString()

        // pass parameters via URL and navigate to that URL
        navigateFilter('/filter', params);

    }



    return (
        // contains all filtering components
        <div className='pt-32 space-y-20'>
            <h3 className='title-font font-pt-sans font-bold text-3xl text-blue-700'>What features are you looking for? </h3>

            <div className='space-y-10'>
                <ColorFilter colors={coloroptions} filters={filters} setFilters={setFilters} />
                <SpeedFilter filters={filters} setFilters={setFilters} />
                <DateFilter filters={filters} setFilters={setFilters} />
                <LaserFilter filters={filters} setFilters={setFilters} />
            </div >

            <button className="bg-blue-500 hover:bg-blue-700 text-white font-pt-sans w-1/6 font-bold py-2 px-4 rounded" onClick={handleSubmit}> Find Spaceships</button>
        </div>

    )
};

export default Filter