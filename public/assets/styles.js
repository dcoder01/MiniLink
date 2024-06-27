function clipboard() {
    const url = document.getElementById('generated-url').innerText;
    navigator.clipboard.writeText(url).then(() => {
        alert("Copied the URL");
    }).catch(err => {
        console.error('Could not copy text: ', err);
        alert("Failed to copy the URL");
    });
}
