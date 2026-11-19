let files = [];
const MAX_STORAGE = 100 * 1024 * 1024;

function uploadFiles() {
    const input = document.getElementById("fileInput");

    for (let file of input.files) {
        const used = files.reduce((sum, f) => sum + f.size, 0);

        if (used + file.size > MAX_STORAGE) {
            alert("Storage limit exceeded!");
            continue;
        }

        files.push({
            name: file.name,
            size: file.size,
            type: file.type || "Unknown"
        });
    }

    input.value = "";
    updateDashboard();
}

function formatSize(bytes) {
    if (bytes < 1024 * 1024) {
        return (bytes / 1024).toFixed(2) + " KB";
    }
    return (bytes / (1024 * 1024)).toFixed(2) + " MB";
}

function updateDashboard() {
    const used = files.reduce((sum, f) => sum + f.size, 0);
    const percentage = (used / MAX_STORAGE) * 100;

    document.getElementById("totalFiles").innerText = files.length;
    document.getElementById("usedStorage").innerText = formatSize(used);
    document.getElementById("availableStorage").innerText = formatSize(MAX_STORAGE - used);

    document.getElementById("storageText").innerText = formatSize(used) + " used out of 100 MB";

    document.getElementById("progressBar").style.width = percentage + "%";

    displayFiles();
}

function displayFiles() {
    const list = document.getElementById("fileList");
    const search = document.getElementById("search").value.toLowerCase();

    list.innerHTML = "";

    const filtered = files.filter(file =>
        file.name.toLowerCase().includes(search)
    );

    if (filtered.length === 0) {
        list.innerHTML = '<p class="empty">No files found.</p>';
        return;
    }

    filtered.forEach(file => {
        const index = files.indexOf(file);

        list.innerHTML += `
            <div class="file-row">
                <div>
                    📄 <strong>${escapeHTML(file.name)}</strong>
                    <br>
                    <small>${formatSize(file.size)}</small>
                </div>
                <button class="delete" onclick="deleteFile(${index})">
                    Delete
                </button>
            </div>
        `;
    });
}

function deleteFile(index) {
    files.splice(index, 1);
    updateDashboard();
}

function escapeHTML(value) {
    return value.replace(/[&<>"']/g, char => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    })[char]);
}

updateDashboard();
