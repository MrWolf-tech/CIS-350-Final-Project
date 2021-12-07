function mobileBtn() { //toggles show class on the mobile navbar to make it visible in a responsive manner

    var mobileDropdown = document.getElementById("mobileNavBar"); //gets the mobile nav bar
    if (mobileDropdown.classList.contains('show')) { //if mobile drop down visible
        mobileDropdown.classList.remove('show'); //removes show class to make hidden
    }
    else
    {
        mobileDropdown.classList.add('show'); //add show class to make visible
    }

  }