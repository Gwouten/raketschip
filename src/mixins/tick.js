let ticking = false;

function update() {
    ticking = false;
}

function requestTick() {
    if (!ticking) {
        requestAnimationFrame(update);
    }
    ticking = true;
};

export { ticking, update, requestTick };