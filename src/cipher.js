const cipher = (str, shift) => str
  .toUpperCase()
  .replace(/[A-Z]/g, (s) => String.fromCharCode(((s.charCodeAt(0) - 65 + shift) % 26) + 65))
  .toLowerCase();

module.exports = cipher;