// Saves options to chrome.storage
const saveOptions = () => {
    const bgcolor = document.getElementById('bgColor').value;
    const textColor = document.getElementById('textColor').value;

    chrome.storage.sync.set(
        { bgcolor: bgcolor, textColor: textColor },
        () => {
            // Update status to let user know options were saved.
            const status = document.getElementById('status');
            status.textContent = 'Options saved.';
            setTimeout(() => {
                status.textContent = '';
            }, 750);
        }
    );
};

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
const restoreOptions = () => {
    chrome.storage.sync.get(
        { bgcolor: null, textColor: null },
        (items) => {
            console.log(items)
            document.getElementById('bgColor').value = items.bgcolor;
            document.getElementById('textColor').value = items.textColor;
        }
    );
};

document.addEventListener('DOMContentLoaded', restoreOptions);
document.getElementById('save').addEventListener('click', saveOptions);