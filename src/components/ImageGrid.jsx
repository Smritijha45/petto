import dog from "../assets/dog.jpg";
import cat from "../assets/cat.jpg";
import hamster from "../assets/hamster.jpg";
import rabbit from "../assets/rabbit.jpg";

export default function ImageGrid() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 text-center">
      {/* Heading and Description */}
      <h1 className="text-6xl pt-20 font-bold text-green-900">Strays need love too</h1>
      <p className="text-gray-900 md:text-xl drop-shadow-md pt-5 mt-3">
       Give stray animals some love too, they deserve all your love.
      </p>

      {/* Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8 pt-10">
        {/* Card 1 */}
        <div>
          <img src={dog} alt="Pet 1" className="w-full h-64 object-cover rounded-lg shadow-md" />
          <p className="mt-3 text-gray-700 font-medium">Dogs</p>
        </div>

        {/* Card 2 */}
        <div>
          <img src={cat} alt="Pet 2" className="w-full h-64 object-cover rounded-lg shadow-md" />
          <p className="mt-3 text-gray-700 font-medium">Cats</p>
        </div>

        {/* Card 3 */}
        <div>
          <img src={hamster} alt="Pet 3" className="w-full h-64 object-cover rounded-lg shadow-md" />
          <p className="mt-3 text-gray-700 font-medium">Hamsters</p>
        </div>

        {/* Card 4 */}
        <div>
          <img src={rabbit} alt="Pet 4" className="w-full h-64 object-cover rounded-lg shadow-md" />
          <p className="mt-3 text-gray-700 font-medium">Rabbits</p>
        </div>
      </div>
    </div>
  );
}
