var timeout = false;
var delay = 250;

window.addEventListener('resize', function(e) {
    clearTimeout(timeout);

    let event = new CustomEvent('resize-end', {detail: e});
    timeout = setTimeout(() => document.dispatchEvent(event), delay);
});

