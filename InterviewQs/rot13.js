function rot13(str) {
    return str.replace(/[A-Z]/g, (char) => {
        const charCode = char.charCodeAt(0)
        const decodedCharCode = charCode < 78 ? charCode + 13 : charCode - 13;
        return String.fromCharCode(decodedCharCode)
    })
}

const encodedString = "GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.";
const decodedString = rot13(encodedString);

console.log(decodedString)