import { useNavigate } from 'react-router-dom';

const SearchResults = ({ results, searchTerm }) => {
  const navigate = useNavigate();

  const handleResultClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  const handleEnter = () => {
    navigate(`/search?query=${searchTerm}`);
  };

  return (
    <div className="absolute top-full mt-0 w-full bg-white border-b border-l border-r border-slate-300 rounded-b-lg shadow-lg z-20">
      <ul>
        {results.map(product => (
          <li
            key={product.id}
            onClick={() => handleResultClick(product.id)}
            className="px-4 py-2 cursor-pointer hover:bg-slate-100 flex items-center gap-3"
          >
            <img src={product.imageUrl} alt={product.name} className="w-10 h-10 object-cover rounded" />
            <span className="text-sm text-gray-700">{product.name}</span>
          </li>
        ))}

        <li
          onClick={handleEnter}
          className="px-4 py-2 text-sm text-blue-600 cursor-pointer hover:bg-slate-100 border-t"
        >
          View all results for "{searchTerm}"
        </li>
      </ul>
    </div>
  );
};

export default SearchResults;
