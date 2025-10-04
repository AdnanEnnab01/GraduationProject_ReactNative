

# **Cash Core Mobile Application**

**Cash Core Mobile Application** is the mobile version of the Cash Core banking system, designed to deliver a modern and user-friendly banking experience directly on customers' smartphones. This version focuses on enhancing efficiency, security, and accessibility, offering features such as account creation, banking transactions, smart recommendations, AI-powered emergency communication, and bank visit scheduling.

Through the mobile app, customers can manage their accounts (savings, current, or deposit), check balances and transaction history, make payments, interact with bank advertisements, and download official documents as PDF files for future reference.

This mobile version works alongside the employee portal but is specifically tailored for customer use, providing a secure and convenient banking experience on the go.

The project is built using **React Native** for the mobile front-end and **Node.js with SQLite/DB** for the back-end, ensuring a seamless, user-centric banking solution.

---

## **Application Interfaces**

Below, some of the application's interfaces are presented along with a brief description of the functionality of each.

---

### **1. Welcome Screen**

<img width="684" height="346" alt="Welcome Screen" src="https://github.com/user-attachments/assets/567dca60-5b34-4cd4-a13b-67924b60d2a1" />

<img width="386" height="367" alt="Welcome Screen Sections" src="https://github.com/user-attachments/assets/069ba12f-179a-40fc-bad9-76f39429a137" />

This interface has five sections accessible via a bottom navigation button. It serves as a welcome screen, introducing users to the app’s features and services through images.

---

### **2. Login Screen**

<img width="242" height="427" alt="Login Screen" src="https://github.com/user-attachments/assets/4e1a8087-c0fc-463c-a913-a59846704cf8" />

This interface lets users log in to existing accounts if they already have one.

---

### **3. Sign Up Screen**

<img width="276" height="511" alt="Sign Up Screen" src="https://github.com/user-attachments/assets/de476e31-7909-46e5-9b8f-d30b322f8249" />

When the user clicks **'Create Account'** on the previous screen, a new page appears for setting up the account. The fields and rules are as follows:

1. **User ID**: Unique 9-digit number assigned by the app.
2. **User Name**: Name with capital letters for each word and spaces between them.
3. **Email**: Valid and unique email address.
4. **Password**: Minimum 8 characters, with at least one uppercase letter, one number, and one special character.
5. **Confirm Password**: Retype the same password.
6. **Phone Number**: 10-digit mobile number.
7. **Date of Birth**: Must be at least 18 years old.
8. **Account Type**: Choose between **Savings**, **Deposit**, or **Current**.

If any field is incorrect or missing, the app displays:
*"Please fill out all required fields correctly."*

<img width="290" height="482" alt="Sign Up Example" src="https://github.com/user-attachments/assets/2d8576b5-c772-4b7e-b485-ee84fd4e22c0" />

**Regular expressions (regex)** are used to validate that the entered information follows specific rules, ensuring the accuracy of data during the account creation process.

If all information is entered correctly, a confirmation module appears, indicating successful account creation, with a 'Back to Login' button for returning to the login page.

<img width="236" height="410" alt="image" src="https://github.com/user-attachments/assets/fc7ba528-5085-4130-97f3-4b040ebb46f4" />

If a user creates an account but does not activate it, a module appears instructing them to visit the bank and deposit a small amount to activate the account and access the app’s features.

<img width="214" height="343" alt="image" src="https://github.com/user-attachments/assets/e2452553-d689-450f-b023-35843af12cad" />

If the user enters an incorrect email or password, an alert message will appear, indicating that either the email, password, or both have been entered incorrectly.

<img width="241" height="393" alt="image" src="https://github.com/user-attachments/assets/013039ff-249d-4756-9077-1efd9c298b62" />

After entering the correct email and password for an activated account, a welcome module appears for 3 seconds before accessing the main interface.

<img width="532" height="343" alt="image" src="https://github.com/user-attachments/assets/e29b628a-0e72-4b5a-a39f-c7bb0bc1a2f8" />

---

### **Post Content Page**

<img width="368" height="352" alt="image" src="https://github.com/user-attachments/assets/5d8247cb-746c-4023-a5f7-447a83299c83" />

From this interface, users can also access comments made by all users on a particular post.

---

### **Market Page**

Following that, when the user taps on the three horizontal lines located at the top-left corner, a side menu appears displaying various options and features that the user can access and explore.

<img width="322" height="413" alt="image" src="https://github.com/user-attachments/assets/4c79b8e5-cb05-4e90-b4d6-450fec68140a" />

<img width="204" height="359" alt="image" src="https://github.com/user-attachments/assets/8f160c05-990d-4709-93e9-1d054352491b" />

When the user taps on **‘Market’**, a screen appears showing items for sale, such as **houses** and **cars**, available through the bank’s marketplace.

<img width="205" height="310" alt="image" src="https://github.com/user-attachments/assets/7ca265ee-3f1b-4d92-b2ce-f6e3014e1bd8" />

This page includes a search field where users can enter the item’s name and press the search icon to view results — a feature that will be expanded in future updates.

<img width="207" height="352" alt="image" src="https://github.com/user-attachments/assets/e6e33b16-6f45-4e13-9226-14c7d5c875a7" />

Clicking on an item opens a detailed page displaying its **description** and the **bank-added amount**.

<img width="196" height="349" alt="image" src="https://github.com/user-attachments/assets/9cbcb910-11a1-45a3-b067-cc54b2fca1ee" />

Users can also **like** an item.

<img width="178" height="312" alt="image" src="https://github.com/user-attachments/assets/63d19e3b-785e-4b17-ad7d-dcf33e4d7270" />

Go back to the main page of the market and click on buy a car:

<img width="197" height="305" alt="image" src="https://github.com/user-attachments/assets/b497a82f-a4f4-49fc-9aba-8fb21c4001fc" />

A new interface opens, showcasing all the cars available and presented by the bank:

<img width="202" height="324" alt="image" src="https://github.com/user-attachments/assets/b80890c5-ec85-4870-94de-187e52c5a866" />

Through this interface, users can also **filter cars by price**. For instance, if a user enters **100,000**, the system will display all cars priced at **100,000 or less**.

<img width="268" height="457" alt="image" src="https://github.com/user-attachments/assets/f8a3025b-1294-4042-8d9d-7a4ed2374124" />

As previously mentioned, users can view additional details and specifications of any selected car.

Returning to the **main market page**, there are **three categories**: **Popular**, **Recommended**, and **Top Search**.

1. **Popular:** Displays the top 3 items from the bank that have received the highest number of user likes. Users can scroll to view all items.
2. **Recommended:** Shows the top 3 items from the bank with prices equal to or less than the balance in the user’s account.
3. **Top Search:** Lists the top 5 items most frequently searched by the user. Each search adds points based on user interest — for example, searching for *“Audi 2023”* may earn 2 points for that car and 1 point for others, while homes receive none. Similarly, searching for *“Nablus apartment”* may give 2 points for that apartment and 1 point for others, excluding cars.
   Based on these accumulated points, the system displays the **top 5 items most relevant to the user**, and this list **varies for each user**.

<img width="437" height="521" alt="image" src="https://github.com/user-attachments/assets/adc4c57e-5f8e-453f-8d18-4b37e196b7db" />

---

### **Visit Page**

Returning to the main screen and selecting the “Visit” option allows users to schedule an appointment at the bank.

<img width="239" height="399" alt="image" src="https://github.com/user-attachments/assets/5920a1c0-b9b1-4714-9388-f7fa2d76d92d" />

When you click the Visit button:

<img width="209" height="289" alt="image" src="https://github.com/user-attachments/assets/c9dba4c9-83e1-412f-879b-beda66a6986f" />

This interface can be used by **anyone**, not just specific individuals. Users must enter the **ID number**, select the **branch**, choose the **date**, and ensure at least a **20-minute gap** between consecutive visits. Finally, the **purpose of the visit** is entered.

<img width="171" height="344" alt="image" src="https://github.com/user-attachments/assets/d7982385-a5c8-471c-959e-445e0c58f457" />

If a visit is scheduled within less than 20 minutes, an alert appears prompting the user to schedule another visit with at least a 20-minute gap.

<img width="198" height="305" alt="image" src="https://github.com/user-attachments/assets/a58c99be-2062-4587-ab5e-e2b07af0c5ab" />

---

### **Transaction Page**

Returning to the **main screen** and selecting the **“Transactions”** option allows users to **transfer money to other users** within the system or **pay bills** such as water and electricity.

<img width="197" height="306" alt="image" src="https://github.com/user-attachments/assets/bfdec903-66f6-4977-a2fb-cef91dd0bf8c" />

When you click the Transactions button:

<img width="197" height="285" alt="image" src="https://github.com/user-attachments/assets/3da72029-5339-403c-9a8f-d56c747f8bc7" />

Using this interface, users can **send money to other system users**, making transfers simple and helping earn points for potential rewards. To make a transfer, enter the **amount**, add a **description**, select the **transfer type** (to another user or bill payment), and choose the **recipient’s account number**.

<img width="313" height="418" alt="image" src="https://github.com/user-attachments/assets/a51a201e-1e1e-4f5c-8ee9-d2af4f59d821" />

For added security, an email confirmation is sent to both the sender and the recipient.

<img width="533" height="442" alt="image" src="https://github.com/user-attachments/assets/7948fbd3-c417-4b20-8e20-a5b939ee24cb" />

This interface can also be used to **pay bills**. Users enter the **amount**, add **notes**, select **‘Bill Payment’** as the transaction type, and specify the **bill type** (e.g., electricity, water).

<img width="236" height="282" alt="image" src="https://github.com/user-attachments/assets/8b6649fb-8aa6-4c94-93cf-a542f1822891" />

Additionally, an email is sent to the person who paid the bill for confirmation.

<img width="225" height="338" alt="image" src="https://github.com/user-attachments/assets/b01e047e-0f26-4ac9-a2a5-b469a2711c82" />

---

### **Notification Interface**

From the **main page**, clicking on notifications allows the user to view all notifications received.

<img width="258" height="335" alt="image" src="https://github.com/user-attachments/assets/589420fe-6eec-4ec6-87c9-a81fa5530753" />

Red messages indicate unread items, and once closed, they are marked as seen and appear in white when reopened.

<img width="550" height="373" alt="image" src="https://github.com/user-attachments/assets/2eb98de0-8591-4bc3-8291-144b2dccf2d6" />

Clicking on a notification displays the post and its contents.

<img width="248" height="427" alt="image" src="https://github.com/user-attachments/assets/9f2496d6-2ecd-45a9-98ee-51e4764e4ecb" />

---

### **Show My Transaction**

<img width="205" height="279" alt="image" src="https://github.com/user-attachments/assets/f22584c2-4d70-42bc-9aa9-35140aef08c1" />

Pressing this button opens an interface where users can view account transactions, including amounts and type (bills or transfers).

<img width="205" height="298" alt="image" src="https://github.com/user-attachments/assets/69485a92-b690-4e2d-8b83-8121253a1ae7" />

---

### **Map Page**

Clicking on the **map** allows users to **view bank branches** and find the **route to the nearest branch** from their current location.

<img width="171" height="264" alt="image" src="https://github.com/user-attachments/assets/d6a799d1-4fc6-4dc9-8d7e-ed5f0e4d59dc" />

The map interface includes **three buttons**:

1. **Current Location** – determines the user’s location.
2. **Bank Locations** – places points on the map for all bank branches.
3. **Find Route** – helps navigate to the nearest branch.

This functionality is powered using an **external API**.

<img width="409" height="306" alt="image" src="https://github.com/user-attachments/assets/c6971eb6-eba8-486e-ae64-aa9ac72c2c80" />

---

### **Exchange Currency**

Clicking on **“Currency Exchange”** opens an interface that enables **currency conversion**.

<img width="237" height="321" alt="image" src="https://github.com/user-attachments/assets/e6856581-0f52-4e9e-b51d-5721606c5dcf" />

Users can **check the dollar value** and **convert dollars to other currencies**.

<img width="235" height="313" alt="image" src="https://github.com/user-attachments/assets/be6f6b25-9745-424e-9156-222ce65dddd3" />

---

### **View Profile**

Clicking on 'View Profile' enables the user to see some of their profile information.

<img width="280" height="305" alt="image" src="https://github.com/user-attachments/assets/94ecf451-a3d4-4aca-a64f-57f4ded0b244" />

Users can **edit their password, email, or phone number**, ensuring the **email is not already used** by another account.

<img width="412" height="290" alt="image" src="https://github.com/user-attachments/assets/39091e0d-b370-49bf-a48d-3e0b3045b6ea" />

---

### **ChatBot Page**

Clicking on the **chatbot** allows users to **quickly inquire for information** or **submit complaints**.

<img width="435" height="323" alt="image" src="https://github.com/user-attachments/assets/7beedda8-acad-4798-bc65-39d704134f6f" />

<img width="221" height="353" alt="image" src="https://github.com/user-attachments/assets/af141892-93af-47a9-9af1-6f0de042b218" />

The **emergency chat interface** allows users to quickly inquire about booked visits, retrieve forgotten details, check recent activities, view account balance, stay informed about bank prizes, and more. The automated responses are **personalized for each user**.

<img width="253" height="415" alt="image" src="https://github.com/user-attachments/assets/03b21319-dd7a-4a62-8980-1ab9aa3014cd" />

Through the **emergency chat**, users can **submit complaints** to the bank. These complaints are visible to employees, who can track the **percentage of complaints per topic**.

<img width="237" height="381" alt="image" src="https://github.com/user-attachments/assets/4eac1a8b-f58a-4ffb-b88b-af7559f0a486" />

---

### **Logout Tab**

Pressing the 'Logout' button logs
