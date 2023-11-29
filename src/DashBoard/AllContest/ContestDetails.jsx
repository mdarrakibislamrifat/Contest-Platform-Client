
import { Helmet } from "react-helmet-async";
import { Link, useLoaderData } from "react-router-dom";

const ContestDetails = () => {
  const items = useLoaderData();
  const dateString = items.date; 
  const futureDate = new Date(dateString);
const currentDate = new Date();
const timeDifference = futureDate.getTime() - currentDate.getTime();
const seconds = Math.floor((timeDifference / 1000) % 60);
const minutes = Math.floor((timeDifference / (1000 * 60)) % 60);
const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);


  return (
    <div className="card h-[800px] mt-4 bg-base-100 shadow-xl">
        <Helmet><title>Details Page</title></Helmet>
      <figure>
        <img
          src={items.image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body text-center">
        <h2 className="text-2xl font-semibold">Contest Name: {items.name}</h2>
        <p>Participate: {items?.count}</p>
        <p>Prize Money: ${items.money}</p>
        <p>Email : {items.email}</p>
        <p>{items.photo? items.photo : <div className="flex justify-center"><img className="w-20" src="https://i.ibb.co/DGkp466/blank-profile-picture-mystery-man-avatar-973460.png"></img></div>}</p>
        <p>Deadline : {hours}:{minutes}:{seconds} </p>
        <p>{items.description}</p>

        <div className="card-actions justify-center">
          <Link to={`/dashboard/payment/${items._id}`}><button className="btn btn-primary">Registration</button></Link>
        </div>
      </div>
    </div>
  );
};

export default ContestDetails;
