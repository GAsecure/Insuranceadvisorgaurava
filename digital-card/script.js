/* ==========================================
   DIGITAL CARD - SCRIPT.JS
   Author: ChatGPT
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    console.log("Digital Card Loaded Successfully");

    /* ===========================
       Fade In Animation
    =========================== */

    const cards = document.querySelectorAll(
        ".service-card,.partner,.quick-contact a,.action-buttons a,.qr-box"
    );

    cards.forEach((item, index) => {

        item.style.opacity = "0";
        item.style.transform = "translateY(25px)";

        setTimeout(() => {

            item.style.transition = "all .6s ease";

            item.style.opacity = "1";

            item.style.transform = "translateY(0px)";

        }, index * 120);

    });

    /* ===========================
       Secure External Links
    =========================== */

    document.querySelectorAll("a").forEach(link => {

        const href = link.getAttribute("href");

        if (!href) return;

        if (
            href.startsWith("http") ||
            href.startsWith("https")
        ) {

            link.target = "_blank";
            link.rel = "noopener noreferrer";

        }

    });

    /* ===========================
       Button Click Effect
    =========================== */

    document.querySelectorAll(".action-buttons a,.quick-contact a").forEach(btn => {

        btn.addEventListener("click", () => {

            btn.style.transform = "scale(.95)";

            setTimeout(() => {

                btn.style.transform = "";

            }, 180);

        });

    });

    /* ===========================
       QR Hover Animation
    =========================== */

    const qr = document.querySelector(".qr");

    if (qr) {

        qr.addEventListener("mouseenter", () => {

            qr.style.transition = ".35s";

            qr.style.transform = "scale(1.06)";

        });

        qr.addEventListener("mouseleave", () => {

            qr.style.transform = "scale(1)";

        });

    }

    /* ===========================
       Service Card Hover
    =========================== */

    document.querySelectorAll(".service-card").forEach(card => {

        card.addEventListener("mouseenter", () => {

            card.style.transition = ".3s";

            card.style.transform = "translateY(-8px)";

        });

        card.addEventListener("mouseleave", () => {

            card.style.transform = "translateY(0px)";

        });

    });

    /* ===========================
       Smooth Scroll (Future Use)
    =========================== */

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {

                target.scrollIntoView({

                    behavior: "smooth"

                });

            }

        });

    });

});
