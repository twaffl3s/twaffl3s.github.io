---
layout: post
title:  "Youtube Playlist"
permalink: /youtube-playlist/
date:   '2016-02-11'
categories: home works
excerpt_separator: <!--preview-divider-->
---
You can usually find me with my headphones on, listening to something like French rap, Japanese pop, or comedic vlogs. Sadly, not everything is available on streaming medias, such as Spotify or SoundCloud. To remedy this problem, I've built a Chrome extension that enables users to play YouTube Playlists without opening a YouTube tab.
<!--preview-divider-->
## The Goals
The user would install the Chrome extension. Clicking the extension icon in the toolbar would bring up a modal that gave the user two options: search for a playlist or go to a playlist if they, the user, knew the playlist id. Another goal was that they could listen to the playlist whether the extension modal was opened or not. Finally, the user could control the extension with their keyboard, preferably media keys.
## The Process
### **Design**
I approached the design phase as a YouTube user. After thoroughly exploring YouTube, I prioritized three parts in the design: lists, progress bars, and buttons. Lists structured most of the content, including search results and the current playlist. I had to style the lists in a way that didn't sacrifice legibility. The progress bar showed the current song's elapsed time. The buttons aided in usability of the extension.

I chose colors that resonated with the platform. By using similar colors, the user could expect an experience resembling that of YouTube. I used animations to emphasize the visual experience, including the progress bar and page transitions.

### **Development**
I built out the extension as a functional wireframe in HTML. I incorporated the YouTube API to populate the lists. I used a lot of JavaScript functions, focusing heavily on the use of parameters. When returning a playlist through the YouTube API, the child elements, or songs in this case, were not returned as well. This required me to store values to be recalled later. I used <a href="http://julian.com/research/velocity/" target="_blank">VelocityJS</a> for the transitions and built out a custom animation function for the elapsed time.

## The Hurdles
I struggled with keeping the music streaming after the modal has been closed. I overcame this problem by using two amazing Chrome extension features: <a href="https://developer.chrome.com/extensions/event_pages" target="_blank">Event Pages</a> and <a href="https://developer.chrome.com/extensions/messaging" target="_blank">Message Passing</a>. Event Pages enable running a script in the background. This feature allowed the extension to play music continuously, even after the modal is closed. Message passing works by sending a defined message to the event page, where a listening function has been set up. When the function is complete, the event page can return a message. I leveraged the messaging system with media keys (play, pause, and skip keys on a keyboard) and built-in buttons as well as user interface persistence, which is preserving the state of the interface so it can be recalled at a later time.