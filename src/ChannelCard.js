import React from "react";
import { Link } from "react-router-dom";

const ChannelCard = ({ channel }) => {
  return (
    <div className="card">
      <Link to={`/channels/${channel.id}`} className="card">
        <div className="image">
          <img
            className="card-img-top img-fluid"
            src={channel.image}
            alt={channel.name}
          />
        </div>
        <div className="card-body">
          <h5 className="card-title">
            <span>{channel.owner}</span>
          </h5>
        </div>
      </Link>
    </div>
  );
};

export default ChannelCard;
