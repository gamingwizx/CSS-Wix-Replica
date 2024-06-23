const expandable = document.querySelector(".expandable")
const expandableItems = Array.from(expandable.children)

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
