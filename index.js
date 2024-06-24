const expandable = document.querySelector(".expandable")
const expandableItems = Array.from(expandable.children)
const hamburger = document.querySelector(".hamburger")
const nav = document.querySelector(".nav")
const containerHeader = document.querySelector(".container--header")

expandableItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    const targetParent = e.target.parentNode
    const detail = targetParent.querySelector(".details")
    const expandIcon = targetParent.querySelector(".expand-icon")
    const detailDisplay = window
      .getComputedStyle(detail)
      .getPropertyValue("display")
    if (detailDisplay === "none") {
      detail.style.display = "block"
      expandIcon.src = "img/closeicon.png"
    } else {
      detail.style.display = "none"
      expandIcon.src = "img/expandable-icon.png"
    }
  })
})

hamburger.addEventListener("click", function (e) {
  e.preventDefault()
  const navShown = window.getComputedStyle(nav).getPropertyValue("display")
  console.log(navShown)
  if (navShown === "flex") {
    nav.style.display = "none"
    containerHeader.style.removeProperty("height")
    document.body.style.overflow = "auto"
  } else {
    nav.style.display = "flex"
    containerHeader.style.height = "100vh"
    document.body.style.overflow = "hidden"
  }
})
