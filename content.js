console.log("Hello World! \n\n\n\n", window.location.hostname);
function getAllTablesWithinDiv(rootDivId) {
    const rootDiv = document.getElementById(rootDivId);
    if (!rootDiv) {
        console.error(`Div with ID "${rootDivId}" not found.`);
        return [];
    }
    return Array.from(rootDiv.querySelectorAll("table"));
}
function getDivByInnerText(innerText) {
    const divs = document.querySelectorAll("div");
    for (const div of divs) {
        if (div.innerText.toLowerCase().includes(innerText)) {
            return div;
        }
    }
    console.error(`Div with innerText "${innerText}" not found.`);
    return null;
}
if (window.location.hostname.includes("amazon")) {
    console.log("Hello World! \n\n\n\n");
    console.log(window.location.pathname.split("/"));
    console.log("Tables-> ", document.querySelectorAll("table[id]"));
    if(document.querySelectorAll("table[id]").length > 0){
        console.log("Tables-> ", document.querySelectorAll("table[id]"));
        alert("Safeeee")
    }else if([...document.querySelectorAll("h2")].some(h2 => h2.innerText.toLowerCase().includes("product"))){
        [...document.querySelectorAll("h2")].forEach(h2 => h2.innerText.toLowerCase().includes("product") ? console.log(h2) : null);
        alert("Safeeee")
    }
    else{
        alert("EROOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOR")
    }
} 