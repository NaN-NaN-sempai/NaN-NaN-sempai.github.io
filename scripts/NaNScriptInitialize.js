// ############################################## TOPICS ################################################
createContainer({
    title: "Topics",
    id: "topics"
});

createContent({
    id: "topics",
    color: "white",
    solidBg: "transparent",
    title: "No topics",
    desc: "No topics for now, but future topics and cool stuff will appear here!",
    onClick: ()=>{}
});


// ############################################## PROJECTS #############################################
createContainer({
    title: "Projects",
    id: "projects"
});

createContent({
    id: "projects",
    color: "white",
    background: "./projects/Viewport/imgs/linkProjectBanner.png",
    title: "Viewport", 
    type: "HTML",
    desc: "Little screen for pixel animations.<br><br>Some tools and logics for helping in the animations.",
    onClick: "'./projects/Viewport/'"
});

createContent({
    id: "projects",
    color: "#fc9c28",
    background: "./projects/PJSMP/content/imgs/bg/fullBg.png",
    title: "ＰＪＳＭＰ (RE)",
    type: "MPP",
    elemTitle: "Pure JavaScrip Midi Player (remake)",
    desc: "Follow PJSMP's scripts and releases here!<br><br>PJSMP (RE) is a auto player (MIDI player) made for Multiplayer Piano.",
    onClick: "'./projects/PJSMP/'"
});

createContent({
    id: "projects",
    color: "white",
    solidBg: "white",
    title: "Chat Hyperlinks", 
    type: "MPP",
    desc: "Working in progress!<br><br>Interactive links, images and videos directly from the Multiplayere Piano chat.",
    onClick: "'./projects/ChatHyperlinks/'"
});


// ############################################## MORE #############################################
createContainer({
    title: "More",
    id: "more"
});

createContent({
    id: "more",
    color: "white",
    background: "./more/githug/content/imgs/hugwallpaper.jpeg",
    title: "GitHug", 
    desc: "Charsy 🤗",
    onClick: "'./more/githug/'"
});