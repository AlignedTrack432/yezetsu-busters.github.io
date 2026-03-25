const display1 = document.getElementById("heading");
const display2 = document.getElementById("bodyText");

window.onload = function() {
    // 1. Get all cookies and find the one named 'front_page'
    const name = "front_page=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(';');
    
    let cookieValue = "";

    for(let i = 0; i < cookieArray.length; i++) {
        let c = cookieArray[i].trim();
        if (c.indexOf(name) == 0) {
            cookieValue = c.substring(name.length, c.length);
            break;
        }
    }

    // 2. If the cookie exists, split it and update the textContent
    if (cookieValue !== "") {
        const parts = cookieValue.split('|'); // Split by the pipe symbol we used earlier
        
        // Ensure we have both parts before trying to write them
        if (parts.length === 2) {
            // Update heading: set the text of the h1 inside the heading div
            const headingH1 = document.querySelector('#heading h1');
            if (headingH1) {
                headingH1.textContent = decodeURIComponent(parts[0]);
            }
            
            // Update bodyText: clear existing content and add new paragraphs
            const bodyDiv = document.getElementById('bodyText');
            if (bodyDiv) {
                bodyDiv.innerHTML = ''; // Clear existing content
                const bodyText = decodeURIComponent(parts[1]);
                const paragraphs = bodyText.split('\n').filter(p => p.trim() !== ''); // Split by newlines and filter empty lines
                paragraphs.forEach(paragraph => {
                    const p = document.createElement('p');
                    p.textContent = paragraph;
                    bodyDiv.appendChild(p);
                });
            }
            
            console.log("UI updated from cookie data.");
        }
    }
};