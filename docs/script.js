// Unicode to KrutiDev Converter
// This is a basic mapping for Devanagari font conversion

const krutiToUnicodeMap = {
  // Basic KrutiDev to Unicode mappings
  '�': 'अ', '�': 'आ', '�': 'इ', '�': 'ई', '�': 'उ', '�': 'ऊ',
  '�': 'ए', '�': 'ऐ', '�': 'ओ', '�': 'औ', '�': 'क', '�': 'ख',
  '�': 'ग', '�': 'घ', '�': 'ङ', '�': 'च', '�': 'छ', '�': 'ज',
  '�': 'झ', '�': 'ञ', '�': 'ट', '�': 'ठ', '�': 'ड', '�': 'ढ',
  '�': 'ण', '�': 'त', '�': 'थ', '�': 'द', '�': 'ध', '�': 'न',
  '�': 'प', '�': 'फ', '�': 'ब', '�': 'भ', '�': 'म', '�': 'य',
  '�': 'र', '�': 'ल', '�': 'व', '�': 'श', '�': 'ष', '�': 'स',
  '�': 'ह', '�': '�', '�': '�', '�': '�', '�': '�', '�': '�',
  ' ': ' ', '.': '.', ',': ',', '?': '?', '!': '!'
};

const unicodeToKrutiMap = {
  // Reverse mappings would go here
};

// Initialize converters
document.addEventListener('DOMContentLoaded', function() {
  // KrutiDev to Unicode converter
  const krutiInput = document.getElementById('kruti-input');
  const krutiOutput = document.getElementById('kruti-output');
  
  function convertKruti(direction) {
    const text = krutiInput.value;
    let result = '';
    
    if (direction === 'toKruti') {
      // Convert Unicode to KrutiDev (simplified)
      for (let i = 0; i < text.length; i++) {
        const char = text[i];
        result += krutiToUnicodeMap[char] || char;
      }
    } else {
      // Convert KrutiDev to Unicode
      for (let i = 0; i < text.length; i++) {
        const char = text[i];
        result += unicodeToKrutiMap[char] || char;
      }
    }
    
    krutiOutput.value = result;
  }
  
  // Real-time conversion
  krutiInput.addEventListener('input', function() {
    convertKruti('toUnicode');
  });
});