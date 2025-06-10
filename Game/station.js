const rooms = {
    "test1" : {
        "name" : "Froth Link Test Robot Storage",
        "id": "test1",
        "description" : "You're standing in a charging dock on the wall, lined up next to several other Gateway robots. The room is dimly lit, but it's enough for you to see. The room is mostly empty, aside from the other robots, whose charging stations cover three of the room's four walls. A small table sits in the center occupied only by a few scattered documents. There is a door on the opposite wall.",
        "look" : `That door is definitely open. Your attention turns to the documents on the table. The document on top reads: 'Froth Remote Neural Link Testing Protocols.' Beneath this title, it continues, 'When conducting tests with participants using the Froth Link, run through the standard set of motor control, reflex, and pathing tests.' Below this is a list of fairly standard testing procedures, including moving small objects, following a line, and catching a ball. Finally, at the bottom of the page, is 'Testing robots are to be powered down completely at the end of each test session.'`,
        "n" : "hallway"
    },
    "hallway": {
        "name" : "Hallway",
        "id": "hallway",
        "description" : "This room is mostly open space. There's a large walkway through the middle, leading to a few other rooms. Around that are some small high tables and chairs. A set of two doors is on the wall to the north. A single door, open to the room you came from, is to the south, another single door, closed, is to the southeast, and a large door sits on the east wall.",
        "n" : "devroom",
        "e" : "entry",
        "se" : "test2",
        "s" : "test1"
    },
    "entry": {
        "name" : "Gateway Development Office Entryway",
        "id": "entry",
        "description" : "You walk into the office's entryway. The room is open, with clean, smooth stone floors and a higher than average ceiling for an office in the Hub. Space is valuable on a space station, no matter how large. The large front doors look out onto a large, well-lit, and fairly open area outside. A security desk sits on the wall opposite with a hallway beyond to its right.",
        "e" : "outside",
        "w" : "hallway"
    },
    "outside": {
        "name" : "Hub Corporate Office Square",
        "id": "outside",
        "description" : "At the front of the Gateway office, you can feel your connection to the Link system weakening a little. The area outside is a corporate office square. Stone, less polished than inside the office, though the same type, makes up the floor once again. Metal scaffolding spiderwebs across the ceiling, holding the lights illuminating the area. A few people are walking in the square, but none look your way. Most of the square is surrounded by offices similar to the one you just came from, though a few look more like shops. A section of the wall to the northwest seems to be taken up by a maintenance corridor, while to a more well-polished path trails off to the southwest.",
        "sw" : "path",
        "w" : "entry",
        "nw" : "maintenance"
    },
    "test2": {
        "name" : "Froth Link Test Robot Storage 2",
        "id": "test2",
        "description" : "This room is much like the room you came from originally. Charging stations for robots line the walls, though unlike the other room, these are empty. There is also no table in this room.",
        "n" : "hallway"
    },
    "devroom": {
        "name" : "Gateway FL Developer Room",
        "id": "devroom",
        "description" : "The main development office is dark, lit only by the glow of a few of the computer monitors left awake. Papers are scattered across the desks along with empty coffee mugs and the occasional food wrapper. Light is leaking in through the doors.",
        "look" : `You read the various papers littered around the room. Several stand out to you. A printed article on one of the desks sports the title 'Another Union War Incoming?' The article discusses a group of systems seceding from the remains of the Nemen Empire. Further down the page is another title noting 'Froth Instabilities.' This has been circled in pen and underlined several times. A paper titled 'Development partner StarpointWare Document for Translation' details a schedule for future testing times. The date and time formats are in the Galactic Standard Time format and are not able to be translated to Earth time standards. A few other documents contain mentions of 'Froth Cranial Puncture' and 'mind appeasement.'`,
        "s" : "hallway"
    },
    "maintenance": {
        "name" : "Maintenance Corridor",
        "id" : "maintenance",
        "description" : `Pipes and panels jut from the walls as you walk through the maintenance hallway. The soft background rumble of the Hub comes to the forefront here, amplified by the pipes snaking deep through its walls. An occasional clank sounds as someone somewhere else bonks against a connecting pipe. A large ventillation duct sits high up on the wall, but you could probably climb in.`,
        "look" : `A label on one of the walls reads "DUCT 84" with a label slapped on underneath that adds "UPPER CORPORATE REGION." A few balled up pieces of foil lie scattered in a corner with some crumbs from someone's lunch.`,
        "e" : "outside",
        "w" : "vents"
    },
    "path": {
        "name" : "Path From Corporate Square",
        "id" : "path",
        "description" : `The path away from the corporate square twists downward as it snakes through the Hub's stone interior. The sound of people slowly grows as you walk, contrasted by the slowly weakening connection through the Froth Link. You stretch your connection farther and farther as you continue. Finally, you come to the end of the path. Another square, even larger than the corporate square, emerges as you round the corner. Tons of people are wandering through, some walking in and out of stores, some just going about their day. The crowd is mostly human, though there are quite a few that look more like cats, and the occasional robot. Unfortunately, you can't go any further.`,
        "n" : "outside"
    },
    "vents": {
        "name" : "Ventilation Duct",
        "id" : "vents",
        "description" : `Climbing into the duct, your connection through the Froth begins flickering. This is about as far as you can go. The smooth metal duct extends into the wall a bit farther before disappearing beyond an intersection.`,
        "e" : "maintenance"
    }
}

export {rooms};