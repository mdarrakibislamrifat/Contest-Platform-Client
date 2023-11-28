

const UpComming = () => {
    return (
        <div>
            <h2 className="text-3xl font-semibold text-center underline mb-4">Upcoming Contest</h2>
            <div className="grid grid-cols-1 ml-4 md:grid-cols-2 lg:grid-cols-3 gap-2">
            
            {/* first card */}
            <div className="relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border">
  <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white h-96 rounded-xl bg-clip-border">
    <img
      src="https://i.ibb.co/mT66wsQ/download-2.jpg"
      className="object-cover w-full h-full"
    />
  </div>
  <div className="p-6">
    <div className="flex items-center justify-between mb-2">
      <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
        Free Fire
      </p>
      <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
        $20.00
      </p>
    </div>
    <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
    Free Fire is the ultimate survival shooter game available on mobile. Each 10-minute game places you on a remote island where you are pit against 49 other players, all seeking survival. Players freely choose their starting point with their parachute, and aim to stay in the safe zone for as long as possible.
    </p>
  </div>
  
</div>
            {/* first card */}
            <div className="relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border">
  <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white h-96 rounded-xl bg-clip-border">
    <img
      src="https://i.ibb.co/LxVjfrf/Good-Handwriting.jpg"
      className="object-cover w-full h-full"
    />
  </div>
  <div className="p-6">
    <div className="flex items-center justify-between mb-2">
      <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
       Hand Writing
      </p>
      <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
        $15.00
      </p>
    </div>
    <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
    Handwriting is the act of forming letters and words on a page using a writing tool, such as a pen or pencil. It is an essential skill to develop for all aspects of life, as it allows us to communicate through writing in a way that other people can interpret.
    </p>
  </div>
  
</div>
            {/* first card */}
            <div className="relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border">
  <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white h-96 rounded-xl bg-clip-border">
    <img
      src="https://i.ibb.co/FXqDfB9/pexels-pixabay-40568.jpg"
      className="object-cover w-full h-full"
    />
  </div>
  <div className="p-6">
    <div className="flex items-center justify-between mb-2">
      <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
       Health
      </p>
      <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
        $25.00
      </p>
    </div>
    <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
      Medical refers to the field related to the diagnosis, treatment, and prevention of illnesses, injuries, and diseases in humans. It encompasses various disciplines such as medicine, surgery, pharmacology, pathology, and more, aiming to maintain and improve the health and well-being of individuals through medical practices, procedures, and advancements in healthcare.
    </p>
  </div>
  
</div>
            </div>
        </div>
    );
};

export default UpComming;