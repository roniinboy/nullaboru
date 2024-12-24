function urlSafeBase64(base64) {
    return String(base64).replace(/[^A-Za-z0-9_-]/g, m => {
        return '%' + m.charCodeAt(0).toString(16).toUpperCase();
    });
}

// Example usage:
const base64String = 'aGVsbG8rL28h';
const safeString = urlSafeBase64(base64String);
console.log(safeString); // Output: "aGVsbG8%2BL28%21"
