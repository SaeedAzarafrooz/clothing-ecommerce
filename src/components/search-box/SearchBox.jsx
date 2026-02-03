import { useEffect, useState } from "react";
import searchIcon from '../../assets/searchIcon.svg'
import searchIconHover from '../../assets/searchIcon-hover.svg'
import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../../store/categories/category.selector";
import SearchResults from "../SearchResults";

const SearchBox = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState([]);

    const categoriesMap = useSelector(selectCategoriesMap);
    // console.log('categoriesMap:', categoriesMap);


    useEffect(() => {
        if (!searchTerm.trim()) {
            setResults([]);
            return;
        }

        const lowerSearch = searchTerm.toLowerCase();
        const allProducts = Object.values(categoriesMap).flat();
        const filtered = allProducts.filter(product =>
            product.name.toLowerCase().includes(lowerSearch)
        );

        setResults(filtered.slice(0, 5)); // محدود برای dropdown
    }, [searchTerm, categoriesMap]);


    const handleChange = (event) => {
        setSearchTerm(event.target.value)
    }
    return (
        <div className="relative w-[500px]">

            <div className= {`h-12 group ${searchTerm.length ? 'rounded-t-lg border-l border-r border-t': 'rounded-lg border'}  overflow-hidden  border-slate-300 transition-all duration-300 ease-in-out`}>
                <div className=" w-full relative ">

                    <img src={searchIcon} alt="search" className="absolute top-[12px] left-2 w-7 h-7 opacity-100 group-hover:opacity-0 transition-opacity duration-300 ease-in-out pointer-events-none z-10" />
                    <img src={searchIconHover} alt="search" className="absolute top-[12px] left-2 w-7 h-7 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out pointer-events-none z-10" />
                </div>
                <input
                    className={`indent-9 peer block w-full border-b border-gray-500 bg-white py-2.5 pr-2.5 pl-1.5 
                        text-lg text-gray-500 focus:outline-none focus:border-black                        
                        ${searchTerm && String(searchTerm).length ? 'bg-slate-200 ' : ''}`}
                    placeholder="search in products"
                    type='text'
                    value={searchTerm}
                    onChange={handleChange}
                    name="searchTerm"
                />
            </div>

            {/* Results */}
            {results.length > 0 && (
                <SearchResults results={results} searchTerm={searchTerm} />
            )}
        </div>

    )
}

export default SearchBox;