  // Бургер меню //
  function handleBurgerClick() {
    const navbarEl = document.getElementById("navbar");
    if (navbarEl.classList.contains("burgerView")) {
      navbarEl.classList.remove("burgerView");
    } else {
      navbarEl.classList.add("burgerView");
    }
  
    const burgerItemEl = document.getElementById("navbar-burger-item");
    if (burgerItemEl.classList.contains("burgerView")) {
      burgerItemEl.classList.remove("burgerView");
    } else {
      burgerItemEl.classList.add("burgerView");
    }
  }


  // Подключение файлов //
  const contentFilesById = {
    about_us: "about.html",
    catalog: "catalog.html",
    autorize: "autorize.html",
    recover: "recover.html",
    register: "register.html",
    acusticcat: "acusticcatal.html",
    camping: "camping.html",
    kidscat: "kidscatal.html",
    powertools: "powertools.html",
  };

  const fetchContent = (id) => {
    fetch(contentFilesById[id])
      .then((response) => response.text())
      .then((html) => (document.getElementById("content").innerHTML = html));
  };
  
  const navigationHandleClick = (event) => {
    const navbarLinkId = event.target.id;
    fetchContent(navbarLinkId);
    handleBurgerClick();
  };

  const handleForgotClick = () => {
    fetchContent("recover");
  }

  const handleSignUpClick = () => {
    fetchContent("register");
  }

  const handleKidsClick = () => {
    fetchContent("kidscat");
  }

  const handlePowerToolsClick = () => {
    fetchContent("powertools");
  }

  const handleAcusticClick = () => {
    fetchContent("acusticcat");
  }

  const handleBackBtnClick = () => {
    fetchContent("autorize");
  }

  const handleCampingClick = () => {
    fetchContent("camping");
  }

  const handleBackBtn = () => {
    fetchContent("catalog");
  }
  
  function ready() {
    fetchContent("about_us"); // on initial page load
    const navbarItemEls = document.getElementsByClassName("link");
    for (let item of navbarItemEls) {
      item.onclick = navigationHandleClick;
    }

    const navbarItemEls1 = document.getElementsByClassName("navbar-item");
    for (let item of navbarItemEls1) {
      item.onclick = handleBurgerClick;
    }
  
    const burgerIconEl = document.getElementById("navbar-burger-icon");
    burgerIconEl.onclick = handleBurgerClick;
  }
 
  document.addEventListener("DOMContentLoaded", ready);
  