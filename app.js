// Data Object holding text info and position image sources
const sportData = {
    pistol: {
        title: "Air Pistol - Shooting Stance & Position",
        image: "pistol.jpg", // Local image path
        bottomImage: "pistolinfo.jpg",
        description: "Pistol target shooting emphasizes a stable, single-handed open stance. Alignment requires core stability and balance.",
        specs: [
            "Stance: Isosceles or Side-on 90-degree alignment to target",
            "Grip: Single-handed relaxed grip",
            "Distance: 10 meters / 25 meters standard",
            "Focus Points: Trigger control and natural point of aim"
        ]
    },
    rifle: {
        title: "Air Rifle - Standing & Support Position",
        image: "rifle.png", // Local image path
        bottomImage: "rifleinfo.jpg",
        description: "Rifle shooting utilizes a balanced stance with shoulder support for maximum stability.",
        specs: [
            "Stance: Standing position with stable support base",
            "Grip: Two-handed support with rifle butt pressed to shoulder",
            "Distance: 10 meters / 50 meters Olympic standard",
            "Focus Points: Breathing pattern rhythm and sight alignment"
        ]
    }
};

// Website load hote hi SweetAlert 1 Welcome Alert show hoga
window.onload = function() {
    // SweetAlert 1 me direct swal({ ... }) call hota hai
    swal({
        title: "Welcome to Our Website!",
        text: "Explore shooting sports disciplines, stances, and technical details.",
        icon: "info",
        button: "Get Started"
    });
};

// Function called on button click
function showDetails(category) {
    const container = document.getElementById('detailsBox');
    const data = sportData[category];

    // SweetAlert 1 notification for button click
    swal({
        title: category.toUpperCase() + " Selected!",
        text: "Loading technical details & position image...",
        icon: "success",
        timer: 1200,
        buttons: false
    });

    // Dynamic HTML injection
    container.innerHTML = `
        <div class="details-card">
            <h2>${data.title}</h2>
            
            <div class="position-img-container">
                <img src="${data.image}" alt="${data.title}" class="position-img">
            </div>

            <p>${data.description}</p>
            
            <h3>Key Position Requirements & Features:</h3>
            <ul>
                ${data.specs.map(spec => `<li>${spec}</li>`).join('')}
            </ul>
        </div>

            <div style="margin-top: 25px; text-align: center;">
                <img src="${data.bottomImage}" alt="${data.title} Bottom View" style="width: 100%; max-width: 500px; border-radius: 8px;">
            </div>
        </div>
    `;
}