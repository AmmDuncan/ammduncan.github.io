"use strict";
document.addEventListener("DOMContentLoaded", function () {
  let CHOICE = null;

  const modal = document.querySelector(".modal");
  const choiceCard = document.querySelector(".choice-card");
  const choiceCardCloseBtns = document.querySelectorAll(
    ".choice-card .close, .choice-card .close-btn"
  );
  const fab = document.querySelector("#fab");
  const choices = document.querySelectorAll(".choice");

  /* ============================ *
   * MODAL RELATED UTILITY        *
   * ============================ */
  const closeModal = () => {
    modal.classList.remove("open");
    choiceCard.classList.remove("open");
    choiceCard.classList.add("close");
    showFab();
    // set to freelance if no option is selected
    if (!CHOICE) {
      CHOICE = "freelancer";
      selectChoice();
      removeAll(CHOICE);
    }
  };

  const openModal = () => {
    modal.classList.add("open");
    choiceCard.classList.remove("close");
    choiceCard.classList.add("open");
    hideFab();
  };

  const hideFab = () => {
    fab.classList.add("hide");
  };

  const showFab = () => {
    fab.classList.remove("hide");
  };

  /* ============================ *
   * SELECT CHOICE UTILITY        *
   * ============================ */
  const getFromLocalStorage = () => {
    return localStorage.getItem("CHOICE");
  };

  const checkForChoice = () => {
    const choiceInLocalStorage = getFromLocalStorage();
    if (!choiceInLocalStorage) {
      openModal();
    } else {
      CHOICE = choiceInLocalStorage;
      selectChoice();
    }

    return new Promise((resolve, reject) => {
      resolve();
    });
  };

  const deselectAllChoices = () => {
    choices.forEach((choice) => {
      choice.classList.remove("selected");
    });
  };

  const selectChoice = (choice = null) => {
    deselectAllChoices();
    if (!choice) {
      choice = document.getElementById(CHOICE);
    }
    choice.classList.add("selected");
    CHOICE = choice.id;
    localStorage.setItem("CHOICE", CHOICE);
    // scrollToTopOfPage();
  };

  const scrollToTopOfPage = () => {
    scrollTo(0, 0);
  };

  /* ============================ *
   * SETUP PAGE BASED ON CHOICE   *
   * ============================ */
  const removeAll = (type) => {
    let itemsToRemove = null;
    let itemsToStay = null;
    if (type === "dev") {
      itemsToRemove = document.querySelectorAll(".freelance");
      itemsToStay = document.querySelectorAll(".dev");
    } else if (type === "freelancer") {
      itemsToRemove = document.querySelectorAll(".dev");
      itemsToStay = document.querySelectorAll(".freelance");
    }

    if (itemsToRemove) {
      itemsToRemove.forEach((item) => {
        item.classList.add("remove");
      });
      itemsToStay.forEach((item) => {
        if (item.classList.contains("remove")) {
          item.classList.remove("remove");
        }
      });
    }

    if (itemsToStay) {
      itemsToStay.forEach((item) => {
        if (item.classList.contains("remove")) {
          item.classList.remove("remove");
        }
      });
    }
  };

  /* ============================ *
   * Setup Event Listeners        *
   * ============================ */
  document.addEventListener("click", (e) => {
    const clickedElement = e.target;
    const isClosingElement = clickedElement.classList.contains("modal");
    if (isClosingElement) {
      closeModal();
    }
  });

  // close on click
  choiceCardCloseBtns.forEach((button) => {
    button.addEventListener("click", closeModal);
  });

  // open interest modal on fab click
  fab.addEventListener("click", () => {
    hideFab();
    openModal();
  });

  choices.forEach((choice) => {
    choice.addEventListener("click", () => {
      selectChoice(choice);
      setTimeout(closeModal, 500);
      removeAll(CHOICE);
    });
  });

  /* ============================ *
   * MAIN EXECUTION        *
   * ============================ */
  (function () {
    checkForChoice().then(() => {
      removeAll(CHOICE);
    });
  })();
});
