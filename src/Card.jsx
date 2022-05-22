export default function Card() {
  return (
    <div className="w-80 mx-auto px-4 py-10 rounded-lg bg-gray-800">
      <img
        src="https://www.clipartmax.com/png/full/102-1028895_%C2%A0-sunny-and-cloudy.png"
        alt="Sunny and cloudy"
        className="w-20 mx-auto"
      />
      <h1 className="text-3xl text-gray-200 text-center">
        The weather in <span className="text-green-500">Paris </span>
        is a bit sunny with a <span className="text-blue-500">few clouds</span>
      </h1>
      <h2 className="mt-10 text-2xl text-gray-200 text-center">
        The temperature is <span className="text-red-500">30 deg </span>
        Celsius
      </h2>
    </div>
  );
}
