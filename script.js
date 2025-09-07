const buttons = document.querySelectorAll("[data-carousel-button]"); //select HTML elements based on attributes
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1;
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]");
    //button.closest("[data-carousel]") goes up the DOM tree, finds the nearest ancestor that matches attribute 'data-carousel' i.e. the div. Then searches inside the div for the first descendant with data-slides attribute i.e. <ul data-slides>...</ul>
    //this ensures the button is always linked to the correct slideshow even if there were multiple carousels on the page
    //'slides' variable returns the <ul>...</ul>

    const activeSlide = slides.querySelector("[data-active]");
    //selects the li element that is active inside ul
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;
    //finds the index of the current active li element, adds or subtracts 1 , assign to newIndex
    if (newIndex >= slides.children.length) newIndex = 0;
    //if newIndex is greater than the number of li elements, go back to the first li element.
    if (newIndex < 0) newIndex = slides.children.length - 1;
    //if newIndex is less than 0, goes to the last slide.
    slides.children[newIndex].dataset.active = true;
    //all DOM elements has a property call dataset that maps all 'data-' attributes on that element
    delete activeSlide.dataset.active;
    //deletes the data-active attribute from the original active li element.
  });
});
