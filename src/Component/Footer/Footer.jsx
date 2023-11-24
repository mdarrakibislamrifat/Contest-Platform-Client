import { Typography } from "@material-tailwind/react";


const Footer = () => {
    return (
        <footer className="bg-indigo-300 w-full rounded-lg shadow-lg p-8 mt-4">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-white text-center md:justify-between">
        <img src="https://i.ibb.co/0CtKFMx/channels4-profile.jpg" alt="logo-ct" className="w-10" />
        <p className="text-2xl font-bold text-blue-500">ContestCrazeHub</p>
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              About Us
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              License
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Contribute
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Contact Us
            </Typography>
          </li>
        </ul>
      </div>
      <hr className="my-8 border-blue-gray-50" />
      <Typography color="blue-white" className="text-center text-white font-normal">
        &copy; All Rights reserved by Rakib Islam Rifat
      </Typography>
    </footer>
    );
};

export default Footer;