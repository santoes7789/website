// //Setting up sun object
// let sunDragging = false;
// let sunOffsetX = 0;
// let sunOffsetY = 0;
// const sunObject = document.getElementById("sun");

// sunObject.addEventListener("mouseover", () => {
//     sunObject.style.cursor = "grab";
//     sunObject.style.transform = "scale(1.1)";
// });
// sunObject.addEventListener("mouseout", () => {
//     if (!sunDragging) {
//         sunObject.style.transform = "scale(1)";
//     }
// });

// sunObject.addEventListener("mousedown", (event) => {
//     sunObject.style.animation = "none";
//     sunObject.style.cursor = "none";
//     document.body.style.cursor = "none";
//     const sunDimensions = sunObject.getBoundingClientRect();
//     sunOffsetX = event.clientX - sunDimensions.left;
//     sunOffsetY = event.clientY - sunDimensions.top;
//     sunDragging = true;
// });

// document.addEventListener("mouseup", () => {
// 	sunObject.style.animation = "hover 1s ease-in-out infinite alternate";
//     document.body.style.cursor = "default";
//     sunObject.style.cursor = "grab";
//     sunDragging = false;
// });

// document.addEventListener("mousemove", (event) => {
//     if (sunDragging) {
//         const x = event.clientX - sunOffsetX;
//         const y = (0.0015 * (x - ((window.innerWidth - sunObject.getBoundingClientRect().width)/2))**2 + 120);
//         sunObject.style.left = `${x}px`;
//         sunObject.style.top = `${y}px`;

//     }
// });

