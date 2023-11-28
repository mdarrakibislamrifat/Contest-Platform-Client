import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";


const SingleWinner = ({item}) => {
    const {user}=useContext(AuthContext)

    return (
        <div>
            {user?.email == item?.email && item?.winner==='winner' ? <div className="stats shadow">
  
  <div className="stat place-items-center">
    <div className="stat-title">Payments</div>
    <div className="stat-value">$ {item?.price}</div>
    
  </div>
  
  <div className="stat place-items-center">
    <div className="stat-title">Contest Name</div>
    <div className="stat-value text-secondary">{item?.contestName}</div>
    
  </div>
  
  <div className="stat place-items-center">
    <div className="stat-title">Position</div>
    <div className="stat-value">{item?.winner}</div>
    
  </div>
  
</div> : ''}
        </div>
    );
};

export default SingleWinner;