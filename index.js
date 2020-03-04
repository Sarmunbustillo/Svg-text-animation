const paths = document.querySelectorAll('#logo path');

paths.forEach((path, i) => {
    console.group(`letter ${i} is ${path.getTotalLength()}  `);
})