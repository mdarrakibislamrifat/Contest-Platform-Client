import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";


const ContestCategory = ({data}) => {

    const {_id,name,image,count,description,status}=data;
    
    return (
        
           <div>{status==='confirmed' ?  <div
           className="card h-[600px]  card-compact  bg-base-100 shadow-xl"
         >
             <Helmet><title>All Contest</title></Helmet>
           <figure>
             <img className="h-[300px]" src={image} alt="Shoes" />
           </figure>
           <div className="card-body">
             <h2 className="card-title">Name: {name}</h2>
             <p>{count ? `Attempt :${count} peoples` : 'No Participent'}</p>
             <p className="w-24">{description.slice(0,100)}</p>
             <div className="card-actions justify-end">
               
               <Link to={`/details/${_id}`}><button className="btn btn-primary">Details</button></Link>
             </div>
           </div>
         </div> : ''}</div>
        
    );
};

export default ContestCategory;