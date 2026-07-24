Target Shooting & Sports Guidance 🎯
🛠️ Step 1: HTML Structure (Sabse Pehle Kya Banaya?)
Humne index.html mein app ka basic dhancha (skeleton) taiyaar kiya:

Header Section (<header>): Sabse upar main heading (<h1>), description (<p>), aur ek poster image (pic.jpg) lagayi.

Button Group (<div class="button-group">): Do main buttons banaye:

Pistol Details Button: onclick="showDetails('pistol')" ke saath.

Rifle Details Button: onclick="showDetails('rifle')" ke saath.

Details Display Box (<div class="details-container" id="detailsBox">): Ek khali section rakha jisme initial placeholder text diya. Jab user button par click karega, toh dynamic details aur images isi box ke andar show hongi.

SweetAlert Script: Top par SweetAlert library (v1 CDN) link ki taaki modern popup alerts dikha sakein.

🎨 Step 2: CSS Styling (Design Kaise Kiya?)
HTML banane ke baad humne style.css se app ko ek clean aur professional sports dashboard ka look diya:

Header & Dark Theme: Top header ko Dark Slate color (#1e293b) diya taaki page ka top banner alag se prominent nazar aaye.

Distinct Color Buttons: * Pistol button ko Blue color (#2563eb) diya.

Rifle button ko Green color (#059669) diya.

Dono buttons par smooth :hover transition effect lagaya.

Card & Image Styling: Dynamic display box ko white card ka look diya, border-radius: 8px aur subtle box-shadow di. Images ko responsive aur rounded corners ke saath style kiya.

🧠 Step 3: JavaScript, Data Object & Dynamic UI Logic (Code Kaise Kaam Karta Hai?)
Jab HTML aur CSS taiyaar ho gaye, toh humne app.js mein poori interactive logic likhi:

sportData Object (Data Storage): Sabse pehle ek JavaScript object banaya jisme Pistol aur Rifle ki saari jaankari (Title, Image paths, Description, Specs array) store kar di.

Page Load Alert (window.onload): Jaise hi website open hoti hai, JavaScript SweetAlert (swal()) ka use karke user ko screen par ek pyara sa "Welcome to Our Website!" alert message dikhata hai.

Dynamic Category Function (showDetails(category)):

Jab user Pistol ya Rifle button par click karta hai, toh yeh function run hota hai.

Pehle SweetAlert ek chota notification toast dikhata hai ("PISTOL Selected!").

Uske baad function sportData[category] se correct data uthata hai.

Array Mapping (.map()): Specs list ke items ko map karke HTML <li> tags mein convert karta hai.

DOM Manipulation: container.innerHTML ke zariye poora HTML template, images, aur specs details live screen par render kar deta hai bina page reload huye.
