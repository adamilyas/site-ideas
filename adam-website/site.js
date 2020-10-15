function showHideAboutMe() {
    var aboutMeCard = document.getElementById("AboutMeCard");
    var aboutMeCard2 = document.getElementById("AboutMeCard2");

    if (aboutMeCard.style.display !== "block"){
        aboutMeCard.style.display = "block";
        aboutMeCard.classList.add('AddAppearEffect');
    } else {

        // aboutMeCard.classList.add('AddDisappearEffect');
        // aboutMeCard.style.display = "none";

        // aboutMeCard2.style.display = "block";
        // aboutMeCard2.classList.add('AddAppearEffect');
    }
}
