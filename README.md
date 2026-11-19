# CloudBox - Cloud Storage System

A modern, responsive web-based cloud storage dashboard interface built with vanilla HTML, CSS, and JavaScript. It simulates file uploads, displays real-time storage metrics, calculates remaining quota, and enables file searching and deletion.

---

## 🚀 Features

- **Interactive Dashboard:**
  - Sidebar navigation with quick links.
  - Live metric cards showing **Total Files**, **Storage Used**, and **Storage Available**.
- **Real-Time Storage Calculation:**
  - Visual progress bar showing storage usage percentage out of a 100 MB limit.
  - Dynamic file size formatting (`KB` / `MB`).
  - Validation to prevent uploads that exceed total storage limit.
- **File Management:**
  - Multi-file upload support (`+ Upload File`).
  - Instant live file search and filtering.
  - Delete file action that dynamically updates storage metrics.
  - HTML entity escaping to protect against XSS injections in filenames.
- **Responsive Design:**
  - Optimized layout for desktop and smaller tablet/mobile screen sizes.

---

## 📁 Project Structure

```text
cloud_projet/
│
├── index.html       # Application markup and UI structure
├── style.css        # Layout styling, themes, and responsive design
├── script.js        # File upload logic, storage calculation, and DOM manipulation
└── README.md        # Project documentation and instructions
```

---

## 🛠️ Technologies Used

- **HTML5:** Semantic layout and file input integration.
- **CSS3:** Modern flexbox and grid layouts, custom styling, and media queries.
- **JavaScript (ES6):** State management, storage computation, dynamic DOM updates, and string sanitization.

---

## 💻 How to Run

No build tools or external dependencies are required.

1. **Directly via Browser:**
   - Double-click `index.html` or right-click and select **Open with** -> your favorite browser (Chrome, Edge, Firefox, Safari).

2. **Using a Local Development Server (Optional):**
   - **VS Code:** Right-click `index.html` and click **Open with Live Server**.
   - **Python:**
     ```bash
     python -m http.server 8000
     ```
     Then open `http://localhost:8000` in your browser.
   - **Node.js (npx):**
     ```bash
     npx serve
     ```

---

## 🔮 Future Roadmap

- [ ] Connect with cloud storage backends (AWS S3, Google Cloud Storage, or Firebase Storage).
- [ ] User authentication and multi-user tenancy.
- [ ] File previewing (images, PDFs, text) and download options.
- [ ] Drag-and-drop upload zone.
- [ ] Persistent storage using `localStorage` or IndexedDB.
