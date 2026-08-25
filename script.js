/* =========================================
   GUJPHARM JAVASCRIPT
========================================= */


/* MOBILE MENU */

function toggleMenu() {

    const menu =
        document.getElementById("navMenu");

    menu.classList.toggle("open");

}


/* CLOSE MOBILE MENU
   WHEN LINK IS CLICKED
*/

document
    .querySelectorAll("#navMenu a")
    .forEach(function(link) {

        link.addEventListener(
            "click",
            function() {

                const menu =
                    document.getElementById(
                        "navMenu"
                    );

                menu.classList.remove("open");

            }
        );

    });


/* CONTACT FORM */

const contactForm =
    document.getElementById(
        "contactForm"
    );


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();

            const message =
                document.getElementById(
                    "formMessage"
                );

            message.innerHTML =
                "Thank you! Your enquiry has been received. Our GUJPHARM team will contact you.";

            message.style.color =
                "#08783c";

            contactForm.reset();

        }
    );

}