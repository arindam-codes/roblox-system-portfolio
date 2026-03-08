function createCard(title, description, image, link) 
{
    
    return `
        <a href="${link}" class="card">
            <img src="${image}" alt="${title} Image" class="card-image">
            <h3 class="card-title">${title}</h3>
            <p class="card-description">${description}</p>
            <div class="status-indicator">
                <div class="status-dot"></div>
                <div class="status-ring"></div>
            </div>
        </a>
    `;
}

const systems =
[
    {
        title: "Combat Framework",
        description: "Server authoritative combat system",
        image: "assets/combat.png",
        link: "systems/combat-framework.html"
    },
    {
        title: "Inventory System",
        description: "Modular inventory management",
        image: "assets/inventory.png",
        link: "systems/inventory-system.html"
    },
    {
        title: "NPC AI",
        description: "Behavior driven enemy AI",
        image: "assets/npc.png",
        link: "systems/npc-ai.html"
    },
    {
        title: "DataStore Manager",
        description: "Efficient data handling system",
        image: "assets/datastore.png",
        link: "systems/datastore-manager.html"
    },
    {
        title: "Player Stats",
        description: "Comprehensive player stat tracking",
        image: "assets/stats.png",
        link: "systems/player-stats.html"
    },
    {
        title: "Progress Tracker",
        description: "Track player progression and achievements",
        image: "assets/progress.png",
        link: "systems/progress-tracker.html"
    }   
];

const games = 
[
    {
        title: "Project 1",
        description: "An action RPG with dynamic combat",
        image: "assets/project1.png",
        link: "games/project1.html"
    },
    {
        title: "Project 2",
        description: "A social hangout experience",
        image: "assets/project2.png",
        link: "games/project2.html"  
    },
    {
        title: "Project 3",
        description: "A competitive racing game",
        image: "assets/project3.png",
        link: "games/project3.html"
    },
    {
        title: "Project 4",
        description: "A puzzle adventure game",
        image: "assets/project4.png",
        link: "games/project4.html"  
    }
];

const systemsGrid = document.getElementById("systems-grid");
systems.forEach(system => {
    systemsGrid.innerHTML += createCard(system.title, system.description, system.image, system.link);
});

const gamesGrid = document.getElementById("games-grid");
games.forEach(game => {
    gamesGrid.innerHTML += createCard(game.title, game.description, game.image, game.link);
});

