const API_URL = "https://your-backend-url.com/generate"; // Replace with your backend API URL

async function generateImages() {
    const prompt = document.getElementById("prompt").value;
    const numImages = document.getElementById("num_images").value;
    const imageResults = document.getElementById("imageResults");
    imageResults.innerHTML = "<p>Generating images...</p>";

    const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt, num_images: parseInt(numImages) })
    });

    if (response.ok) {
        const data = await response.json();
        imageResults.innerHTML = "";
        data.images.forEach(url => {
            const img = document.createElement("img");
            img.src = url;
            img.style.width = "100%";
            imageResults.appendChild(img);
        });
    } else {
        imageResults.innerHTML = "<p>Error generating images. Please try again.</p>";
    }
}