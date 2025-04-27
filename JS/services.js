addEventListener("DOMContentLoaded", () => {
    const main = document.querySelector("main");
    if (main) {
        const headers = [
            "Szolgáltatás neve",
            "Kategória",
            "Ár (Ft)",
            "Időtartam",
            "Elérhetőség",
            "Akciós ár (Ft)",
            "Megjegyzés"
          ];
          
          const services = [
            ["Hajvágás - férfi", "Fodrászat - Alap", "3500", "30 perc", "Hétfő-Péntek", "3200", "Új vendégeknek"],
            ["Hajvágás - női", "Fodrászat - Alap", "5000", "45 perc", "Hétfő-Péntek", "4500", "-"],
            ["Hajvágás - gyerek", "Fodrászat - Alap", "2500", "20 perc", "Hétfő-Péntek", "2000", "-"],
            ["Hajfestés - teljes", "Fodrászat - Festés és formázás", "12000", "120 perc", "Kedd-Péntek", "11000", "Hosszú haj +3000 Ft"],
            ["Hajfestés - tőfestés", "Fodrászat - Festés és formázás", "9000", "90 perc", "Kedd-Péntek", "8500", "-"],
            ["Melír készítése", "Fodrászat - Festés és formázás", "15000", "150 perc", "Kedd-Péntek", "14000", "Hosszú haj +4000 Ft"],
            ["Hajvasalás", "Fodrászat - Festés és formázás", "4000", "30 perc", "Hétfő-Péntek", "3800", "-"],
            ["Hajformázás / beszárítás", "Fodrászat - Festés és formázás", "5000", "40 perc", "Hétfő-Péntek", "4500", "-"],
            ["Fejbőrmasszázs", "Fodrászat - Kiegészítő kezelések", "3500", "20 perc", "Hétfő-Péntek", "3200", "-"],
            ["Szakáll igazítás", "Fodrászat - Kiegészítő kezelések", "2500", "15 perc", "Hétfő-Péntek", "2300", "-"],
            ["Borotválás - hagyományos", "Fodrászat - Kiegészítő kezelések", "4000", "30 perc", "Hétfő-Péntek", "3700", "-"],
            ["Hajszerkezet javító kezelés", "Fodrászat - Kiegészítő kezelések", "8000", "60 perc", "Kedd-Péntek", "7500", "-"],
            ["Hajpakolás (hidratáló)", "Fodrászat - Kiegészítő kezelések", "5000", "30 perc", "Hétfő-Péntek", "4500", "-"],
            ["Manikűr - klasszikus", "Kéz- és lábápolás", "4000", "40 perc", "Hétfő-Péntek", "3700", "-"],
            ["Manikűr - gél lakkozás", "Kéz- és lábápolás", "6000", "60 perc", "Hétfő-Péntek", "5500", "-"],
            ["Pedikűr - esztétikai", "Kéz- és lábápolás", "5000", "50 perc", "Hétfő-Péntek", "4500", "-"],
            ["Pedikűr - gyógypedikűr", "Kéz- és lábápolás", "6500", "60 perc", "Hétfő-Péntek", "6000", "-"],
            ["Arcápolás - hidratáló kezelés", "Arcápolás és smink", "7000", "60 perc", "Kedd-Péntek", "6500", "-"],
            ["Arcápolás - tisztító kezelés", "Arcápolás és smink", "9000", "70 perc", "Kedd-Péntek", "8500", "-"],
            ["Smink - nappali", "Arcápolás és smink", "10000", "60 perc", "Hétvége", "9500", "-"],
            ["Smink - alkalmi", "Arcápolás és smink", "15000", "90 perc", "Hétvége", "14000", "Esküvői smink külön ár"],
            ["Szemöldök formázás", "Szem és szempilla kezelések", "2000", "15 perc", "Hétfő-Péntek", "1800", "-"],
            ["Szemöldök festés", "Szem és szempilla kezelések", "2500", "20 perc", "Hétfő-Péntek", "2300", "-"],
            ["Szempilla lifting", "Szem és szempilla kezelések", "8000", "60 perc", "Kedd-Péntek", "7500", "-"],
            ["Teljes átalakítás csomag", "Csomagajánlat", "30000", "180 perc", "Előzetes egyeztetés alapján", "27000", "Tartalmaz hajvágást, festést, sminket"]
          ];
          
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