// Task 1 - Creating the Base Structure
	// Created and modified the HTML file

// Task 2 -  Adding Support Tickets Dynamically

document.getElementById("addTicketBtn").addEventListener("click", addTicket);

function addTicket() {
    // Sample data for demonstration (can be modified for user input)
    let customerName = "Jane Doe";
    let issueDescription = "Internet is not responsive.";
    let priority = "High"; // Possible values: "High", "Medium", "Low"

    // Create the ticket div
    let ticket = document.createElement("div");
    ticket.classList.add("ticket");
    if (priority === "High") ticket.classList.add("high-priority");

    // Customer Name (Heading)
    let nameHeading = document.createElement("h3");
    nameHeading.textContent = customerName;

    // Issue Description (Paragraph)
    let issuePara = document.createElement("p");
    issuePara.textContent = issueDescription;

    // Priority Label
    let priorityLabel = document.createElement("span");
    priorityLabel.textContent = `Priority: ${priority}`;
    priorityLabel.classList.add("priority");

    // Resolve Button
    let resolveBtn = document.createElement("button");
    resolveBtn.textContent = "Resolve";
    resolveBtn.classList.add("resolve-btn");

    // Append elements to the ticket
    ticket.appendChild(nameHeading);
    ticket.appendChild(issuePara);
    ticket.appendChild(priorityLabel);
    ticket.appendChild(resolveBtn);

    // Append ticket to the container
    document.getElementById("ticketContainer").appendChild(ticket);
}

// Task 3 - Converting NodeLists to Arrays for Bulk Updates

function highlightHighPriorityTickets() {
    let highPriorityTickets = document.querySelectorAll(".high-priority");
    let ticketsArray = Array.from(highPriorityTickets);
    
    ticketsArray.forEach(ticket => {
        ticket.style.border = "2px solid red";
        ticket.style.backgroundColor = "#ffcccc";
    });
}

// Call function to highlight tickets 
highlightHighPriorityTickets();

// Task 4 - Implementing Ticket Resolution with Event Bubbling

document.getElementById("ticketContainer").addEventListener("click", function(event) {
    console.log("Ticket clicked!");
});

// Remove ticket on "Resolve" button click
document.getElementById("ticketContainer").addEventListener("click", function(event) {
    if (event.target.classList.contains("resolve-btn")) {
        event.target.parentElement.remove();
        event.stopPropagation(); // Prevent bubbling
    }
});

