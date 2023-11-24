

const Banner = () => {
    return (
        <div className="bg-gradient-to-r from-purple-500 to-indigo-500 shadow-lg rounded-lg mt-4 py-12">
        <div className="container mx-auto flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">Find what you need</h1>
          <p className="text-lg lg:text-xl text-white mb-8">Discover amazing contest and more..</p>
          <form className="max-w-lg mx-auto">
            <div className="flex items-center bg-white rounded-full shadow-xl overflow-hidden">
              <input type="text" placeholder="Search..." className="px-6 py-4 w-full outline-none" />
              <button type="submit" className="bg-indigo-600 text-white px-6 py-4 hover:bg-indigo-700 transition duration-300">Search</button>
            </div>
          </form>
        </div>
      </div>
    );
};

export default Banner;