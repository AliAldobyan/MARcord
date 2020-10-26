import React, { useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";


// Components
import ChannelCard from "./ChannelCard";
import SearchBar from "./SearchBar";
import Sidebar from "./Sidebar";
import Loading from "./Loading";

const ChannelList = ({ channels, loading, user }) => {
  const [query, setQuery] = useState("");

  const filterChannels = channels.filter((channel) => {
    return `${channel.name}`.toLowerCase().includes(query.toLowerCase());
  });
    if (!user) return <Redirect to="/login" />
    if (loading) return <Loading/>
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
    user: state.user,
    channels: state.channels,
    loading: !state.channels.length
  };
};
export default connect(mapStateToProps)(ChannelList);
