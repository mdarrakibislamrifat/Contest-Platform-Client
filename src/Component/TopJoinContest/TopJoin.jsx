import { Link } from "react-router-dom";

const TopJoin = ({ item }) => {
  const {_id, name, image, count, description } = item || {};

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {name}
          <div className="badge badge-secondary">Hot</div>
        </h2>
        <p>Participants {count} peoples</p>
        <p>{description.slice(0,100)}</p>
        <div className="card-actions justify-end">
          <Link to={`/details/${_id}`}><button className="btn btn-sm">Details</button></Link>
        </div>
      </div>
    </div>
  );
};

export default TopJoin;
