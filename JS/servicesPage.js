import {headers, services} from "./services.js";

addEventListener("DOMContentLoaded", () => {
    const main = document.querySelector("main");
    if (main) {  
        const table = document.createElement("table");
        const thead = document.createElement("thead");
        const headtr = document.createElement("tr");
        const tbody = document.createElement("tbody");

        headers.forEach(header => {
            const th = document.createElement("th");
            th.textContent = header;
            headtr.appendChild(th);
        })

        thead.appendChild(headtr);
        table.appendChild(thead);

        services.forEach(service => {
            const tr = document.createElement("tr");
            service.forEach(txt => {
                const td = document.createElement("td");
                td.textContent = txt;
                tr.appendChild(td);
            })
            tbody.appendChild(tr);
        })

        table.appendChild(tbody);
        
        main.appendChild(table);
    }
    else
        console.error("Hiba történt a szolgáltatások betöltése során!");
})