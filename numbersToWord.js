function numberToWords(num) {
    if (num === 0) return "Zero";
    
    const ones = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
    const teens = ["", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
    const tens = ["", "Ten", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
    const thousands = ["", "Thousand", "Million", "Billion"];
    
    function convertChunk(num) {
        if (num === 0) return "";
        else if (num < 10) return ones[num];
        else if (num < 20) return teens[num - 10];
        else if (num < 100) return tens[Math.floor(num / 10)] + " " + convertChunk(num % 10);
        else return ones[Math.floor(num / 100)] + " Hundred " + convertChunk(num % 100);
    }
    
    function convertGroup(num, index) {
        if (num === 0) return "";
        else return convertChunk(num) + " " + thousands[index];
    }
    
    let result = "";
    let chunkIndex = 0;
    
    while (num > 0) {
        const chunk = num % 1000;
        if (chunk !== 0) {
            result = convertGroup(chunk, chunkIndex) + " " + result;
        }
        num = Math.floor(num / 1000);
        chunkIndex++;
    }
    
    return result.trim();
}

// Example usage:
console.log(numberToWords(123));      // Output: "One Hundred Twenty Three"
console.log(numberToWords(12345));    // Output: "Twelve Thousand Three Hundred Forty Five"
console.log(numberToWords(1234567));  // Output: "One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven"
