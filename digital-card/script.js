/* =====================================================
   GA SECURE DIGITAL CARD V5
   SCRIPT
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    if (typeof CONFIG === "undefined") {
        console.error("Configuration.js not loaded");
        return;
    }

    /* ===============================
       BASIC INFORMATION
    =============================== */

    document.title =
        CONFIG.brand + " | " + CONFIG.owner;

    document.getElementById("ownerName").textContent =
        CONFIG.owner;

    document.getElementById("designation").textContent =
        CONFIG.designation;

    document.getElementById("tagline").textContent =
        CONFIG.slogan;

    document.getElementById("profileImage").src =
        CONFIG.profileImage;

    document.getElementById("qrImage").src =
        CONFIG.qrImage;

    document.getElementById("address").textContent =
        CONFIG.address;

    /* ===============================
       CONTACT BUTTONS
    =============================== */

    const phone = CONFIG.phone;
    const whatsapp = CONFIG.whatsapp;
    const email = CONFIG.email;

    document.getElementById("callBtn").href =
        "tel:" + phone;

    document.getElementById("socialCall").href =
        "tel:" + phone;

    document.getElementById("floatingCall").href =
        "tel:" + phone;

    document.getElementById("mailBtn").href =
        "mailto:" + email;

    document.getElementById("socialEmail").href =
        "mailto:" + email;

    document.getElementById("websiteLink").href =
        CONFIG.website;

    document.getElementById("socialWebsite").href =
        CONFIG.website;

    document.getElementById("saveBtn").href =
        CONFIG.contactFile;

    /* ===============================
       WHATSAPP LINKS
    =============================== */

    function wa(message){

        return "https://wa.me/"
        + whatsapp +
        "?text=" +
        encodeURIComponent(message);

    }

    document.getElementById("waBtn").href =
        wa(CONFIG.messages.consultation);

    document.getElementById("socialWhatsapp").href =
        wa(CONFIG.messages.consultation);

    document.getElementById("floatingWhatsapp").href =
        wa(CONFIG.messages.consultation);

    document.getElementById("quoteBtn").href =
        wa(CONFIG.messages.quote);

    document.getElementById("claimBtn").href =
        wa(CONFIG.messages.claim);

    document.getElementById("calculatorBtn").href =
        wa(CONFIG.messages.calculator);

    document.getElementById("renewBtn").href =
        wa(CONFIG.messages.renewal);
       /* ===============================
       PARTNER LOGOS
    =============================== */

    const partnerGrid = document.getElementById("partnerGrid");

    if (partnerGrid && CONFIG.companies) {

        partnerGrid.innerHTML = "";

        CONFIG.companies.forEach(company => {

            const item = document.createElement("div");
            item.className = "partner";

            item.innerHTML = `
                <img
                    src="${company.logo}"
                    alt="${company.name}"
                    title="${company.name}">
            `;

            partnerGrid.appendChild(item);

        });

    }

    /* ===============================
       FADE IN ANIMATION
    =============================== */

    const animatedItems = document.querySelectorAll(
        ".service-card,.partner,.quick-actions a,.action-buttons a,.qr-card,.social-links a"
    );

    animatedItems.forEach((item,index)=>{

        item.style.opacity="0";
        item.style.transform="translateY(20px)";

        setTimeout(()=>{

            item.style.transition=".5s ease";

            item.style.opacity="1";

            item.style.transform="translateY(0)";

        },80*index);

    });

    /* ===============================
       RIPPLE CLICK EFFECT
    =============================== */

    document.querySelectorAll("a").forEach(link=>{

        link.addEventListener("click",()=>{

            link.style.transform="scale(.96)";

            setTimeout(()=>{

                link.style.transform="";

            },180);

        });

    });

    /* ===============================
       QR ANIMATION
    =============================== */

    const qr=document.querySelector(".qr-card");

    if(qr){

        qr.addEventListener("mouseenter",()=>{

            qr.style.transform="scale(1.04)";

            qr.style.transition=".35s";

        });

        qr.addEventListener("mouseleave",()=>{

            qr.style.transform="scale(1)";

        });

    }

    /* ===============================
       SERVICE CARD EFFECT
    =============================== */

    document.querySelectorAll(".service-card").forEach(card=>{

        card.addEventListener("mouseenter",()=>{

            card.style.transform="translateY(-8px)";

        });

        card.addEventListener("mouseleave",()=>{

            card.style.transform="translateY(0px)";

        });

    });

    /* ===============================
       EXTERNAL LINKS
    =============================== */

    document.querySelectorAll("a").forEach(link=>{

        const href=link.getAttribute("href");

        if(!href) return;

        if(href.startsWith("http")){

            link.target="_blank";

            link.rel="noopener noreferrer";

        }

    });

    /* ===============================
       CURRENT YEAR
    =============================== */

    const year=document.getElementById("year");

    if(year){

        year.textContent=new Date().getFullYear();

    }

    console.log(
        CONFIG.brand +
        " Digital Card Loaded Successfully"
    );

});
/* ==========================================
   PREMIUM FEATURES
========================================== */

/* Loading Animation */

window.addEventListener("load",()=>{

    document.body.classList.add("loaded");

});

/* Floating Buttons Animation */

document.querySelectorAll(".float").forEach(btn=>{

    btn.addEventListener("mouseenter",()=>{

        btn.style.transform="scale(1.12)";

    });

    btn.addEventListener("mouseleave",()=>{

        btn.style.transform="scale(1)";

    });

});

/* Service Card Click */

document.querySelectorAll(".service-card").forEach(card=>{

    card.addEventListener("click",()=>{

        card.style.transition=".25s";

        card.style.transform="scale(.97)";

        setTimeout(()=>{

            card.style.transform="";

        },180);

    });

});

/* Lazy Images */

document.querySelectorAll("img").forEach(img=>{

    img.loading="lazy";

});

/* Console */

console.log("====================================");
console.log("GA Secure Digital Card V5");
console.log("Developer : ChatGPT");
console.log("Status : Running");
console.log("====================================");
