import React from "react";
import EditProfileBody from "./AccManagerProfile/EditProfile/EditProfileBody";
import ProfileBody from "./AccManagerProfile/ProfileBody";
import UserInfo from "./AccManagerProfile/UserInfo";
import AddOn from "./AddOns/AddOns";
import AllTickets from "./All Tickets/AllTickets";
import Tickets from "./All Tickets/Tickets";
import AllSellers from "./AllSellers/AllSellers";
import Seller from "./AllSellers/Seller";
import UserImage from "./UserImage";
import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";

function viewScreen(x) {
	if (x == 1) return <ProfileBody />;
	else if (x == 2) return <EditProfileBody />;
	else if (x == 3) return <AllTickets />;
	else if (x == 4) return <Tickets />;
	else if (x == 5) return <AllSellers />;
	else if (x == 6) return <Seller />;
}

function AppBody(prop) {
  console.log(prop.screen);
	return (
		// <EditProfileBody />
		// <AllTickets />
		// <Tickets />
		// <AllSellers />
		// <Seller />
		viewScreen(prop.screen)
	);
}

export default AppBody;
