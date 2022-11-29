
// Custom Dropdown component for the color filter
const Dropdown = ({ list, addColor }: { list: Array<string>, addColor: (color: string) => void }) => {
    return (<div id="dropdown" className="absolute shadow top-100 bg-white z-40 w-1/2 lef-0 rounded max-h-select overflow-y-auto ">
        <div className="flex flex-col w-full">
            {list.map((color, key) => {
                return <div key={key}
                    className="cursor-pointer w-full border-blue-400 rounded-t border-y hover:bg-grey-10"
                    onClick={() => (addColor(color))}>
                    <div className="flex w-full items-center p-2 border-blue-200 border-x  relative hover:border-grey-100" >
                        <div className="w-full items-center flex">
                            <   div className="mx-2 leading-6  font-pt-sans text-grey-700">
                                {color}
                            </div>
                        </div>
                    </div>
                </div>
            })}
        </div>
    </div >);

};

export default Dropdown;