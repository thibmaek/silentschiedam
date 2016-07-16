# Silent Schiedam

## What is it?
This was the our final to the Major Atelier IV course for [Devine](https://devine.be).
We got the liberty of creating any digital product as deliverable (native app, webapp, website, motion).

## Concept
> Silent Schiedam: a social music platform, based on silent disco, that lives on the internet and is extended
in the Hoogstraat. The platform is the home for the Schiedam music-enthousiast and unites people
in the city centre and trough a web application.

> At the platform's base lies a unique recurring event that's organised troughout the complete Hoogstraat.
Every empty premise hosts a local DJ or musicfan on a stage. Stages are open to everyone, be it a
bedroom DJ or a grandpa and his collection of Blue Note records.

> All the livestreams are collected in a real-time feed served by the online app, where everyone can plug in
with their own headphones to recreate the silent disco effect

## What technologies does it use
SilentSchiedam is mobile webapp fueled by Javascript (ES6) & React. The backend provided is a Firebase realtime store that allowed is to get updates & track requests in real time. This gave us the option of quickly getting data across different apps. The last day we decided to cook up a request feed for the DJ so he could monitor & dissaprove tracks. I hacked this together in about 20 minutes by just using the same store and data was running trough in realtime.

Our audio backend ran off a Raspberry Pi B+ running Jessie Lite. A USB audio card received audio from a Pioneer mixer and broadcasted the stream using [darkice](https://github.com/rafael2k/darkice) which we connected to in the frontend with the HTML5 Media API.

## Screenshots

__See the project displayed in full on [Behance here](https://www.behance.net/gallery/38566299/Silent-Schiedam).__

![](http://i.imgur.com/rMPJZ7s.png)
![](http://i.imgur.com/lPhx5IL.png)
![](http://i.imgur.com/tmW8i3J.png)
![](http://i.imgur.com/MhFTtPo.png)
