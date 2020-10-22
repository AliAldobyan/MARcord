import React, { useState } from "react";
import { connect } from "react-redux";

// Components
import ChannelCard from "./ChannelCard";
import SearchBar from "./SearchBar";
import Sidebar from "./Sidebar";

const ChannelList = ({ channels }) => {
  const [query, setQuery] = useState("");

  const filterChannels = channels.filter((channel) => {
    return `${channel.name}`.toLowerCase().includes(query.toLowerCase());
  });

  //   console.log("test", channels);
  //   console.log(filterChannels);
  const Channelcards = filterChannels.map((channel) => (
    <ChannelCard key={channel.id} channel={channel} />
  ));
  return (
    <div className="container">
      <div className="p-3 mb-2 bg-dark text-white">
        <h3 className="d-flex justify-content-center">Channel</h3>
      </div>
      <SearchBar onChange={setQuery} />
      <div className="row">{Channelcards}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    channels: state.channels,
  };
};
export default connect(mapStateToProps)(ChannelList);
