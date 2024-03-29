// ############################################## TOPICS ################################################
createContainer({
    title: "Topics",
    id: "topics"
});

createContent({
    id: "topics",
    color: "white", 
    solidBg: "transparent",
    title: "Project Types",
    desc: `Get to know a little of NaN Scripts project types and its meanings:
        <br>
        <br>- <span class="Preview">Preview</span>
        <br>- <span class="Project">Project</span>
        <br>- <span class="MPP">MPP</span>
        <br>- <span class="Node_JS">Node JS</span>
        <br>- <span class="Userscript">Userscript</span>
        <br>- <span class="Web_App">Web App</span>`,
    onClickType: "content",
    onClick: (name)=>{
        var containersArr = [];
        var contentsArr = [];

        containersArr.push({
            title: "Project Types",
            id: "projectTypes"
        });

        contentsArr.push({
            id: "projectTypes",
            color: "white",
            solidBg: "rgb(90,200,90)",
            title: "Preview",
            desc: "Previewable projects<br><br>Projects that can be previewable just by clicking in its link."
        });

        contentsArr.push({
            id: "projectTypes",
            color: "white",
            solidBg: "rgb(200,90,90)",
            title: "Project",
            desc: "Just project<br><br>Its link send you to its project location."
        });

        contentsArr.push({
            id: "projectTypes",
            color: "rgb(170,170,170)",
            background: "../topics/projectTypes/content/imgs/mppBanner.jpg",
            title: "MPP",
            desc: "Multiplayer Piano<br><br>Projects or scripts made for Multiplayer Piano.",
            onClick: "https://multiplayerpiano.com/"
        });

        contentsArr.push({
            id: "projectTypes",
            color: "white",
            background: "../topics/projectTypes/content/imgs/nodeBanner.png",
            title: "Node JS",
            desc: "Node JS projects<br><br>Server, examples, web service, and desktop apps using Node JS.",
            onClick: "https://nodejs.org/"
        });

        contentsArr.push({
            id: "projectTypes",
            color: "white",
            background: "../topics/projectTypes/content/imgs/tamperBanner.png",
            title: "Userscript",
            desc: "Userscript projects<br><br>Web sites custom scripts using Userscript client.<br><br>Recommended: Tampermonkey.",
            onClick: "https://www.tampermonkey.net/"
        });

        contentsArr.push({
            id: "projectTypes",
            color: "rgb(100,180,255)",
            background: "../topics/projectTypes/content/imgs/webBanner.jpg",
            title: "Web App",
            desc: "Web Projects<br><br>Projects, pages or scripts using HTML, CSS and JavaScript for executing web application." 
        });

        openContentInContainer2(name, containersArr, contentsArr);
    }
});


// ############################################## PROJECTS #############################################
createContainer({
    title: "Projects",
    id: "projects"
});

createContent({
    id: "projects",
    color: "white",
    background: "linear-gradient(white, black)",
    title: "Grey Image Shading",
    type: ["Web App", "Preview"],
    elemTitle: "Elden Ring Countdown",
    desc: "My first project with canvas, it ads some shaders to a grey image, in the future it will work with color images as well, but for now it works only with grey ones, you can change the image src to try with your own images.",
    onClick: "https://nan-nan-sempai.github.io/Canvas_Grey_Image_Shading/"
});

createContent({
    id: "projects",
    color: "#fbeba3",
    background: "../content/imgs/banners/EldenRingCountdownWallpaper.jpg",
    title: "Elden Ring Countdown",
    type: ["Node JS", "Web App", "Preview"],
    elemTitle: "Elden Ring Countdown",
    desc: "Countdown for the launch day of Elden Ring.<br><br>Time is translated to Central Time so it will be accurate indepent of your Time Zone.",
    onClick: "https://elden-ring-countdown.vercel.app/"
});

createContent({
    id: "projects",
    color: "#fc9c28",
    background: "./projects/PJSMP/content/imgs/bg/fullBg.png",
    title: "P J S M P",
    type: ["MPP"],
    elemTitle: "Pure JavaScrip Midi Player (remake)",
    desc: "Follow PJSMPs scripts and releases here!<br><br>PJSMP (RE) is a auto player (MIDI player) made for Multiplayer Piano.",
    onClick: "./projects/PJSMP/"
});

createContent({
    id: "projects",
    color: "white",
    background: "./projects/Viewport/imgs/linkProjectBanner.png",
    title: "Viewport", 
    type: ["Web App", "Preview"],
    desc: "Little screen for pixel animations.<br><br>Some tools and logics for helping in the animations.",
    onClickType: "content",
    onClick: (name)=>{
        var containersArr = [];
        var contentsArr = [];

        containersArr.push({
            title: "Animations",
            id: "animations"
        });

        contentsArr.push({
            id: "animations",
            color: "white",
            background: "../projects/Viewport/imgs/linkProjectBanner.png",
            title: "Link Animation",
            desc: "Click to open in another tab.<br><br>Little animation of Link head.",
            target: "_blank",
            onClick: '../projects/Viewport/link.html'
        });

        contentsArr.push({
            id: "animations",
            color: "white",
            background: "../projects/Viewport/imgs/fireSimulationBanner.png",
            title: "Fire Simulation",
            desc: "Click to open in another tab.<br><br>Fire simulations attempt that i made.",
            target: "_blank",
            onClick: '../projects/Viewport/fire.html'
        });

        containersArr.push({
            title: "Codes",
            id: "codes"
        });

        contentsArr.push({
            id: "codes",
            color: "white",
            background: "../projects/Viewport/imgs/animationCore.png",
            title: "Animation core codes",
            desc: "Click to open in another tab.<br><br>Animation core code to you know how it works.",
            target: "_blank",
            onClick: "https://github.com/NaN-NaN-sempai/NaN-NaN-sempai.github.io/blob/main/projects/Viewport/internal.js"
        });

        contentsArr.push({
            id: "codes",
            color: "white",
            background: "../projects/Viewport/imgs/linkProjectBanner.png",
            title: "Link animation code",
            desc: "Click to open in another tab.<br><br>Link animation code.",
            target: "_blank",
            onClick: "https://github.com/NaN-NaN-sempai/NaN-NaN-sempai.github.io/blob/main/projects/Viewport/link.js"
        });

        contentsArr.push({
            id: "codes",
            color: "white",
            background: "../projects/Viewport/imgs/fireSimulationBanner.png",
            title: "Fire Simulation code",
            desc: "Click to open in another tab.<br><br>Fire Simulation code.",
            target: "_blank",
            onClick: "https://github.com/NaN-NaN-sempai/NaN-NaN-sempai.github.io/blob/main/projects/Viewport/fire.js"
        });

        contentsArr.push({
            id: "codes",
            color: "white",
            background: "../projects/Viewport/imgs/animationCore.png",
            title: "Project Files",
            desc: "Click to open in another tab.<br><br>Project folder to you to copy and try your self.",
            target: "_blank",
            onClick: "https://github.com/NaN-NaN-sempai/NaN-NaN-sempai.github.io/blob/main/projects/Viewport/"
        });

        openContentInContainer2(name, containersArr, contentsArr);
    }
});

createContent({
    id: "projects",
    color: "white",
    solidBg: "white",
    title: "Dark Pygmy", 
    type: ["Web App", "Node JS", "Project"],
    desc: "Working in progress!<br><br>Plataform Puzzle 2D/3D game with a rich and dense lore.<br><br>The projects will use Three Js for the 3D engine, Box2D for the physics engine and Tone Js for the sound and music engine.",
    onClick: "https://github.com/NaN-NaN-sempai/Dark_Pygmy"
});

createContent({
    id: "projects",
    color: "white",
    solidBg: "white",
    title: "Chat Hyperlinks", 
    type: ["MPP"],
    desc: "Working in progress!<br><br>Interactive links, images and videos directly from the Multiplayere Piano chat.",
    onClick: "./projects/ChatHyperlinks/"
});


// ############################################## STUDIES #############################################
createContainer({
    title: "Studies and Tests",
    id: "studies"
});

createContent({
    id: "studies",
    color: "white",
    background: "studies/HelloWorldVercel/vercel_logo.png",
    solidBg: "white",
    title: "Hello World in Vercel",
    type: ["Node JS", "Web App", "Preview"],
    elemTitle: "Hello World in Vercel",
    desc: "My first deployment of a project with Node JS as back-end in <a href='https://vercel.com/'>Vercel</a>.<br><br>In the front-end, you can hover the Vercel's logo on the middle of the screen to see a cool little effect that i made.<br><br>The back-end doesn't does nothing, it is just for testing the Vercel's deployment system and see how it works.",
    onClick: "https://luisnwshelloworld.vercel.app/"
});

createContent({
    id: "studies",
    color: "white",
    background: "studies/NWSToTheWorld/NWS_to_the_world.png",
    solidBg: "white",
    title: "NWS To The World!",
    type: ["Web App", "Preview"],
    elemTitle: "NWS To The World!",
    desc: "Just a test in <a href='https://www.w3schools.com/'>W3schools</a>'s <a href='https://www.w3schools.com/spaces/'>W3spaces</a>.<br>In the page, there is just an image that send the user to my Discord server.",
    onClick: "https://nwstotheworld.w3spaces.com/"
});

/* createContent({
    id: "studies",
    color: "white", 
    solidBg: "transparent",
    title: "No topics",
    desc: "Theres no topics right now, but, in the future, new topics will appear right here!",
    onClick: ()=>{}
}); */

// ############################################## MORE #############################################
createContainer({
    title: "More",
    id: "more"
});

createContent({
    id: "more",
    color: "var(--titleColor)",
    background: "../content/imgs/banners/luishenriquesite.jpg",
    title: "Luís Henrique - Site",
    desc: "Area for projects in portuguese, my native lenguage.",
    onClick: "./pt/"
});

createContent({
    id: "more",
    color: "white",
    background: "./more/githug/content/imgs/hugwallpaper.jpeg",
    title: "GitHug", 
    desc: "Charsy 🤗",
    onClick: "./more/githug/"
});