export default function Searchbar() {
  return (
    <div className="w-80 mx-auto my-4 flex">
      <input
        type="text"
        placeholder="Enter a city name"
        className="w-5/6 h-10 p-2 bg-gray-800 text-gray-200 rounded-lg focus:outline-none focus:shadow-outline"
      />
      <button className="w-1/6 ml-2 h-10 rounded-lg bg-gray-800 text-gray-200 hover:bg-gray-700 hover:text-gray-300 hover:transition-all hover:duration-200">
        GO
      </button>
    </div>
  );
}
