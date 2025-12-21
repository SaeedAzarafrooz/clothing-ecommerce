import { useNavigate } from 'react-router-dom';
import './directory-item.scss';



const DirectoryItem = ({ category }) => {
  const navigate = useNavigate();

  const { imageUrl, title } = category;


  const categoryClickHandler = () => {
    console.log(`Category ${title} clicked!`);
    navigate(`/shop/${title.toLowerCase()}`);

  }

  return (
    <div onClick={categoryClickHandler} className="relative group min-w-[30%] h-[240px] flex-1
                                                   flex items-center justify-center border border-black
                                                   mx-[7.5px] mb-[15px] overflow-hidden cursor-pointer">
      <div
        className="w-full h-full bg-cover bg-top transition-transform duration-[3000ms]
                        ease-[cubic-bezier(0.25,0.45,0.45,0.95)] group-hover:scale-110"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="absolute h-[90px] py-0 px-6 flex flex-col justify-center 
                          items-center bg-white/70 border border-black transition-opacity 
                          group-hover:opacity-90">
        <h2 className='font-bold text-2xl text-[#4a4a4a]'>{title}</h2>
        <p className='font-light text-base'>Shop Now</p>
      </div>
    </div>
  )
}

export default DirectoryItem