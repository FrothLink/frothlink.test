document.addEventListener('DOMContentLoaded', function() {
    const userInput = document.getElementById('userInput');
    const output = document.querySelector('.output');
    const terminalBody = document.querySelector('.terminal-body');
    let pageState = 1;
    const delayms = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

    /*
    =========================================================
    |.......................................................|
    |........IF YOU'RE HERE YOU'RE RUINING THE GAME.........|
    |.........LET PEOPLE HAVE FUN, DON'T LEAK SHIT..........|
    |.......................................................|
    =========================================================
    //also yeah my code sucks ass i have no idea what i'm doing
    
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⣿⣿⡷⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⣿⡿⠋⠈⠻⣮⣳⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⣴⣾⡿⠋⠀⠀⠀⠀⠙⣿⣿⣤⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣤⣶⣿⡿⠟⠛⠉⠀⠀⠀⠀⠀⠀⠀⠈⠛⠛⠿⠿⣿⣷⣶⣤⣄⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣴⣾⡿⠟⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠛⠻⠿⣿⣶⣦⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⣀⣠⣤⣤⣀⡀⠀⠀⣀⣴⣿⡿⠛⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠛⠿⣿⣷⣦⣄⡀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣤⣄⠀⠀
⢀⣤⣾⡿⠟⠛⠛⢿⣿⣶⣾⣿⠟⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠛⠿⣿⣷⣦⣀⣀⣤⣶⣿⡿⠿⢿⣿⡀⠀
⣿⣿⠏⠀⢰⡆⠀⠀⠉⢿⣿⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠻⢿⡿⠟⠋⠁  ⠀⠀⢸⣿⠇⠀
⣿⡟⠀⣀⠈⣀⡀⠒⠃⠀⠙⣿⡆⠀⠀⠀⠀⠀⠀⠀⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀  ⠀⠀⠀⢸⣿⠇⠀
⣿⡇⠀⠛⢠⡋⢙⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣾⣿⣿⠄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀  ⠀⠀⠀⣿⣿⠀⠀
⣿⣧⠀⠀⠀⠓⠛⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⠛⠋⠀⠀⢸⣧⣤⣤⣶⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⣿⡿⠀⠀
⣿⣿⣤⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠉⠉⠻⣷⣶⣶⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣿⣿⠁⠀⠀
⠈⠛⠻⠿⢿⣿⣷⣶⣦⣤⣄⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣴⣿⣷⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣾⣿⡏⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠉⠙⠛⠻⠿⢿⣿⣷⣶⣦⣤⣄⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠿⠛⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⢿⣿⡄⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠙⠛⠻⠿⢿⣿⣷⣶⣦⣤⣄⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢿⣿⡄⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠉⠛⠛⠿⠿⣿⣷⣶⣶⣤⣤⣀⡀⠀⠀⠀⢀⣴⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢿⡿⣄
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠉⠛⠛⠿⠿⣿⣷⣶⡿⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀  ⠀⠀⠈⣿⣹
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣀⠀⠀⠀⠀ ⠀  ⠀⢸⣧
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⣿⣆⠀⠀⠀⠀⠀⠀⢀⣀⣠⣤⣶⣾⣿⣿⣿⣿⣤⣄⣀⡀⠀  ⠀⣿
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠻⢿⣻⣷⣶⣾⣿⣿⡿⢯⣛⣛⡋⠁⠀⠀⠉⠙⠛⠛⠿⣿⣿⡷⣶⣿
    */

    //putting this out here so it can be set in multiple functions
    let response = '';
    let typeSpeed = 0;

    //I can just set these when people enter them, check if they match the right combo, and send players to the right page accordingly
    let username = '';
    let password = '';

    // Function to focus on userInput field
    function focusUserInput() {
        userInput.focus();
    }

    // Initial focus on page load
    focusUserInput();

    userInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            const command = userInput.value.trim();
            response = processCommand(command);
            if (command) {
                // Create a new div element for the command entered
                const commandOutput = document.createElement('div');
                commandOutput.classList.add('command-line');
                output.appendChild(commandOutput); // Append command to output
            }
            userInput.value = '';
            focusUserInput(); // Keep focus on input field after enter
            if (response) {
                // Create a new div element for the response
                const responseOutput = document.createElement('div');
                responseOutput.classList.add('response-line');
                output.appendChild(responseOutput); // Append response to output
                animateTypeOut(responseOutput, response); // Trigger typing animation for response
            }
        }
    });

    function processCommand(command) {

        if (pageState === 1) {
            const cmd = command.toLowerCase();
            
            // Handle different commands
            switch (cmd) {
                case 'login':
                    login()
                    return '>' + command;
                case 'info':
                    return '>' + command + `\ndeveloped by Gateway Corp. \n(include a link on the main site to https://frothlinktrial.wixsite.com/gatewaycorp later so users can find it)`
                case 'translate':
                    return '>' + command + `\nhttps://drive.google.com/file/d/1OAz4oaiwQKXGjHEeo84BlkYMU_CE3rj5/view?usp=sharing`
                case 'notes':
                    return '>' + command + `\n- tbh i have absolutely no idea what the gateway developers are doing\n  does anyone else know what all the mind stuff is\n- When are we going to get a graphics team?\n  This looks terrible\n- IMPORTANT NOTE\n  MIND GROWING RESTLESS\n  CRITICAL WORK NEEDED ON ISSUE`
                case 'help':
                    return '>' + command + `\ninfo\ntranslate\nlogin\nnotes`
                case 'clear':
                    clearTerminal();
                    return ''; // Return empty string after clearing terminal
                case '':
                    return '>'; // Handle empty input gracefully
                default:    
                    return '>' + command + `\nCommand not found: ${command}`;
            }
        }
        else if (pageState === 2) {
            pageState = 3;
                    username = command
                    return '>' + command + '\nENTER PASSWORD:';
        }
        else if (pageState === 3) {
            pageState = 0;
            password = command;
            if(username == 'testUser0264' && password == 'gateLog12')
                {
                    login();
                }
            else if(username == 'f#^sp(b_324hA' && password == 'uu7T3@b=mz1$*')
                {
                    loadDev()
                }
            else
                {
                pageState = 2
                return 'INVALID USERNAME OR PASSWORD, PLEASE TRY AGAIN \nENTER USERNAME'
                }
            return '>' + command;
        }
        else {
            return '';
        }
    }

    async function login() {
        //need a delay here
        await delayms(1000)
        response = '\nSTABILIZING FROTH GATE'
        makeElement();
        await delayms(300)
        typeSpeed = 100
        response = '▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓'
        makeElement();
        await delayms(100)
        typeSpeed = 1000
        await delayms(100)
        typeSpeed = 100
        await delayms(1800)
        typeSpeed = 0
        console.log('CONNECTION THROUGH FROTH STABLE, MIND APPEASED, ATTEMPTING NEURAL LINK')
        response = '\nESTABLISHING NEURAL LINK'
        makeElement();
        await delayms(350)
        typeSpeed = 100
        response = '▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓'
        makeElement();
        await delayms(100)
        typeSpeed = 1000
        await delayms(100)
        typeSpeed = 100
        await delayms(2000)
        typeSpeed = 2500
        await delayms(1500)
        typeSpeed = 0
        await delayms(1000)
        console.log('HOST NEURAL LINK STABLE, SECURING CONNECTION')
        response = '\nCONNECTING'
        makeElement();
        await delayms(200)
        typeSpeed = 50
        response = '▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓'
        makeElement();
        await delayms(200)
        typeSpeed = 0
        await delayms(500)
        console.log('CONNECTION TO HOST COMPLETE, CONTROL PROGRAM READY TO LAUNCH')
        response = `\n\nWELCOME ${username}`
        makeElement();
        await delayms(1000)
        loadScene();
    }

    function makeElement() {
        // Create a new div element for the response
        const responseOutput = document.createElement('div');
        responseOutput.classList.add('response-line');
        output.appendChild(responseOutput); // Append response to output
        animateTypeOut(responseOutput, response); // Trigger typing animation for response
    }

    function clearTerminal() {
        output.innerHTML = ''; // Clear the output content
        // Scroll to the top after clearing
        terminalBody.scrollTop = 0;
    }

    // Ensure userInput remains focused when clicking away
    document.addEventListener('click', function(event) {
        if (!userInput.contains(event.target)) {
            focusUserInput();
        }
    });

    function animateTypeOut(element, text) {
        element.innerHTML = ''; // Clear existing text
        let i = 0;

        function type() {
            if (i < text.length) {
                let currentChar = text.charAt(i);
                if (currentChar === '<') {
                    const endTagIndex = text.indexOf('>', i);
                    if (endTagIndex !== -1) {
                        element.innerHTML += text.substring(i, endTagIndex + 1);
                        i = endTagIndex + 1;
                    }
                } else {
                    element.innerHTML += currentChar;
                    i++;
                }
                setTimeout(type, typeSpeed);//adjust typing speed here
            }
        }

        type();
    }

    function loadScene () {
        console.log('loading main...')
        document.getElementById('gamelink').click();
    }
    function loadDev () {
        document.getElementById('devpage').click();
    }
});