import proto from "./Proto.wav";
import sole from "./Sole.wav";
import losingGravity from "./Losing_Gravity.wav";
import frostwire from "./Frostwire.wav";
import underTheSea from "./Under_the_Sea.wav";
import flush from "./flush.wav";
import suseok from "./Suseok.wav";
import noninertial from "./Noninertial.wav";

import lightBelow from "./Light_Below.wav";
import control from "./Control.wav";
import oneGreaterThanTwo from "./1_greaterthan_2.wav";
import moonlight from "./Moonlight.wav";
import firstClass from "./First_Class.wav";
import cero from "./Cero.wav";
import saloonTerminus from "./Saloon_Terminus.wav";
import shenlong from "./Shenlong.wav";

const immachination = [
	{
		url: proto,
		title: "Proto",
		artist: "Peace Pleasure",
		album: "Immachination",
		tags: ["house"],
	},
	{
		url: sole,
		title: "Sole",
		artist: "Peace Pleasure",
		album: "Immachination",
		tags: ["dnb"],
	},
	{
		url: losingGravity,
		title: "Losing Gravity",
		artist: "Peace Pleasure",
		album: "Immachination",
		tags: ["dubstep"],
	},
	{
		url: frostwire,
		title: "Frostwire",
		artist: "Peace Pleasure",
		album: "Immachination",
		tags: ["dubstep"],
	},
	{
		url: underTheSea,
		title: "Under the Sea",
		artist: "Peace Pleasure",
		album: "Immachination",
		tags: ["dubstep"],
	},
	{
		url: flush,
		title: "flush",
		artist: "Peace Pleasure",
		album: "Immachination",
		tags: ["dubstep"],
	},
	{
		url: suseok,
		title: "Suseok",
		artist: "Peace Pleasure",
		album: "Immachination",
		tags: ["dubstep"],
	},
	{
		url: noninertial,
		title: "Noninertial",
		artist: "Peace Pleasure",
		album: "Immachination",
		tags: ["dubstep"],
	},
];

const theWorldGoesClarifying = [
	{
		url: lightBelow,
		title: "Light Below",
		artist: "Peace Pleasure",
		album: "The World Goes Clarifying",
		tags: ["house", "pop"],
	},
	{
		url: control,
		title: "Control",
		artist: "Peace Pleasure",
		album: "The World Goes Clarifying",
		tags: ["dnb", "dubstep"],
	},
	{
		url: oneGreaterThanTwo,
		title: "1 > 2",
		artist: "Peace Pleasure",
		album: "The World Goes Clarifying",
		tags: ["trip-hop"],
	},
	{
		url: moonlight,
		title: "Moonlight",
		artist: "Peace Pleasure",
		album: "The World Goes Clarifying",
		tags: ["pop"],
	},
	{
		url: firstClass,
		title: "First Class",
		artist: "Peace Pleasure",
		album: "The World Goes Clarifying",
		tags: ["house"],
	},
	{
		url: cero,
		title: "Cero",
		artist: "Peace Pleasure",
		album: "The World Goes Clarifying",
		tags: ["electro"],
	},
	{
		url: saloonTerminus,
		title: "Saloon Terminus",
		artist: "Peace Pleasure",
		album: "The World Goes Clarifying",
		tags: ["pop"],
	},
	{
		url: shenlong,
		title: "Shenlong",
		artist: "Peace Pleasure",
		album: "The World Goes Clarifying",
		tags: ["dubstep"],
	},
];

export const tracks = [...immachination, ...theWorldGoesClarifying];
console.log(tracks);
