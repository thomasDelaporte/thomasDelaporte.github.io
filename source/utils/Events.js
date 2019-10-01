var timeout = false;
var delay = 250;

window.addEventListener('resize', function(e) {
    clearTimeout(timeout);

    let event = new CustomEvent('resize-end', {detail: e});
    timeout = setTimeout(() => document.dispatchEvent(event), delay);
});

const keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
    e.preventDefault();
    e.stopPropagation();
}

function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e); return false;
    }
}

export const disableScroll = () => {
    if (window.addEventListener)
        window.addEventListener('DOMMouseScroll', preventDefault, { passive: false });

    document.addEventListener('wheel', preventDefault, { passive: false });
}
  
export const enableScroll = () => {
    if (window.removeEventListener)
        window.removeEventListener('DOMMouseScroll', preventDefault, { passive: false });

    document.removeEventListener('wheel', preventDefault, { passive: false }); 
}