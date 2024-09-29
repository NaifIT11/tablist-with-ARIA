

const tabButtons = document.querySelectorAll("button[role='tab']");
const tabPanels = document.querySelectorAll("div[role='tabpanel']");


tabButtons.forEach((tb , index) => {
    tb.addEventListener("click" , () => {
        tabButtons.forEach((tb , index) => {
            if(tb.getAttribute("aria-selected" , "true")){
                tb.setAttribute("aria-selected" , "false");
                tb.setAttribute("data-active" , "false");
                tabPanels[index].setAttribute("data-active" , 'false')
            }
        });
        tb.setAttribute("aria-selected" , "true");
        tb.setAttribute("data-active" , "true");
        tabPanels[index].setAttribute("data-active" , 'true')
    });
});