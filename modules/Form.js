function createForm(){
    const form = document.querySelector('form');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const input = form.querySelector('input');
        console.log(input.value);
    })
}

export { createForm };