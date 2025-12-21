// import './directory.scss';
import DirectoryItem from '../directory-item/Directory-Item';



const Directory = ({ categories }) => {
  return (
    <div className="w-full flex flex-wrap justify-between gap-2">
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </div>
  )
}

export default Directory
