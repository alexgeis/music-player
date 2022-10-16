import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Player } from "./App";
import { tracks } from "./assets/audio/audio.js";

// const tracks = [
// 	{
// 		url: "https://audioplayer.madza.dev/Madza-Chords_of_Life.mp3",
// 		title: "Peace Pleasure - Chords of Life",
// 		tags: ["house"],
// 	},
// 	{
// 		url: "https://audioplayer.madza.dev/Madza-Late_Night_Drive.mp3",
// 		title: "Peace Pleasure - Late Night Drive",
// 		tags: ["dnb"],
// 	},
// 	{
// 		url: "https://audioplayer.madza.dev/Madza-Persistence.mp3",
// 		title: "Peace Pleasure - Persistence",
// 		tags: ["dubstep"],
// 	},
// ];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Player trackList={tracks} />
	</React.StrictMode>
);
