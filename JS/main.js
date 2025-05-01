addEventListener("DOMContentLoaded", () => {
    const footer = document.querySelector("footer");
    if (footer) {
        const div1 = document.createElement("div");
        const div2 = document.createElement("div");

        const p1 = document.createElement("h4");
        p1.textContent = "Készítette:";
        div1.appendChild(p1);

        const p2 = document.createElement("p");
        p2.textContent = "Tari Gergely - K1L4WM";
        div1.appendChild(p2);

        const p3 = document.createElement("h4");
        p3.textContent = "Képek forrása:";
        div2.appendChild(p3);
        
        const a = document.createElement("a");
        a.textContent = "pexels.com";
        a.href = "https://www.pexels.com/";
        a.target = "blank";
        a.rel = "noopener noreferrer";
        div2.appendChild(a);

        footer.appendChild(div1);
        footer.appendChild(div2);
    }
})