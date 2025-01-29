let boxQuerstions = document.querySelectorAll(".box-querstions");

boxQuerstions.forEach(box => {
    box.addEventListener("click", () => {
        let textContainer = box.querySelector(".text-container");

        if (textContainer.style.maxHeight !== "0px") {
            textContainer.style.maxHeight = "0px";
        } else {
            textContainer.style.maxHeight = textContainer.scrollHeight + "px";
        }
    });
});
