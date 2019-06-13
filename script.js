function getViewportWidth() {
return window.innerWidth || document.documentElement.clientWidth;
}

let viewport = "Die Viewport-Breite beträgt: "+getViewportWidth()+" Pixel";
console.log(viewport);
