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
