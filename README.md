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
--------------------------------------------------------------------------------
# 🎯 Target Shooting & Sports Guidance
--------------------------------------------------------------------------------

+------------------------------------------------------------------------------+
| 📌 PROJECT OVERVIEW                                                          |
|                                                                              |
| Air Pistol aur Air Rifle shooting techniques, stances, aur technical        |
| details ko beginner-friendly tarike se explain karne ke liye yeh interactive  |
| web app banai gayi hai.                                                      |
+------------------------------------------------------------------------------+

---

### 🛠️ Step 1: HTML Structure (Sabse Pehle Kya Banaya?)

+------------------------------------------------------------------------------+
| 🌐 Component Breakdown                                                       |
+------------------------------------------------------------------------------+
| 1. Header Section (<header>):                                                |
|    - App title (<h1>)                                                        |
|    - Short intro (<p>)                                                       |
|    - Poster image (pic.jpg)                                                  |
|                                                                              |
| 2. Button Group (<div class="button-group">):                                |
|    - "Pistol Details" Button (onclick="showDetails('pistol')")               |
|    - "Rifle Details" Button (onclick="showDetails('rifle')")                 |
|                                                                              |
| 3. Dynamic Display Box (<div class="details-container" id="detailsBox">):    |
|    - Empty container jahan JS se dynamic data aur images update hoti hain.   |
|                                                                              |
| 4. SweetAlert CDN:                                                           |
|    - HTML head mein popup library load ki gayi hai.                          |
+------------------------------------------------------------------------------+

---

### 🎨 Step 2: CSS Styling (Design Kaise Kiya?)

+------------------------------------------------------------------------------+
| 🎨 UI & Layout Styling                                                       |
+------------------------------------------------------------------------------+
| • Header Banner: Dark Slate color (#1e293b) se top section highlight kiya.   |
|                                                                              |
| • Button Colors:                                                             |
|   - Pistol Button -> Blue (#2563eb)                                          |
|   - Rifle Button  -> Green (#059669)                                         |
|   - Hover animation visual feedback ke liye lagayi.                          |
|                                                                              |
| • Main Card Box: Background white rakha, border-radius (8px) aur shadow      |
|   dekar ek clean 3D card jaisa look diya.                                    |
+------------------------------------------------------------------------------+

---

### 🧠 Step 3: JavaScript & Dynamic UI Logic (Code Kaise Kaam Karta Hai?)

+------------------------------------------------------------------------------+
| ⚡ JS Execution Flow                                                          |
+------------------------------------------------------------------------------+
| 📦 1. Data Object (sportData)                                                |
|    - Pistol aur Rifle ki saari information (Title, Images, Specs) ko ek      |
|      JavaScript Object ke andar structured form mein store kiya.             |
|------------------------------------------------------------------------------|
| 🔔 2. Welcome Alert (window.onload)                                          |
|    - Website load hote hi SweetAlert swal() run hota hai aur "Welcome"       |
|      msg dikhata hai.                                                        |
|------------------------------------------------------------------------------|
| 🔄 3. Dynamic Function (showDetails)                                         |
|    - User button press karta hai -> Click alert show hota hai.               |
|    - sportData se specific info fetch hoti hai.                              |
|    - .map() function specs array ko <li> list items mein badalta hai.         |
|    - DOM manipulation se HTML bina reload huye update ho jata hai.           |
+------------------------------------------------------------------------------+

--------------------------------------------------------------------------------

Uske baad function sportData[category] se correct data uthata hai.

Array Mapping (.map()): Specs list ke items ko map karke HTML <li> tags mein convert karta hai.

DOM Manipulation: container.innerHTML ke zariye poora HTML template, images, aur specs details live screen par render kar deta hai bina page reload huye.
