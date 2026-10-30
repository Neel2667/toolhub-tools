// Unicode to KrutiDev Converter
document.addEventListener('DOMContentLoaded', function() {
  // KrutiDev to Unicode converter
  const krutiInput = document.getElementById('kruti-input');
  const krutiOutput = document.getElementById('kruti-output');
  
  // KrutiDev to Unicode mapping
  const krutiToUnicodeMap = {
    '�': 'अ', '�': 'आ', '�': 'इ', '�': 'ई', '�': 'उ', '�': 'ऊ',
    '�': 'ए', '�': 'ऐ', '�': 'ओ', '�': 'औ', '�': 'क', '�': 'ख',
    '�': 'ग', '�': 'घ', '�': 'ङ', '�': 'च', '�': 'छ', '�': 'ज',
    '�': 'झ', '�': 'ञ', '�': 'ट', '�': 'ठ', '�': 'ड', '�': 'ढ',
    '�': 'ण', '�': 'त', '�': 'थ', '�': 'द', '�': 'ध', '�': 'न',
    '�': 'प', '�': 'फ', '�': 'ब', '�': 'भ', '�': 'म', '�': 'य',
    '�': 'र', '�': 'ल', '�': 'व', '�': 'श', '�': 'ष', '�': 'स',
    '�': 'ह', ' ': ' ', '.': '.', ',': ',', '?': '?', '!': '!'
  };
  
  // Unicode to KrutiDev mapping (simplified)
  const unicodeToKrutiMap = {
    'अ': '�', 'आ': '�', 'इ': '�', 'ई': '�', 'उ': '�', 'ऊ': '�',
    'ए': '�', 'ऐ': '�', 'ओ': '�', 'औ': '�', 'क': '�', 'ख': '�',
    'ग': '�', 'घ': '�', 'ङ': '�', 'च': '�', 'छ': '�', 'ज': '�',
    'झ': '�', 'ञ': '�', 'ट': '�', 'ठ': '�', 'ड': '�', 'ढ': '�',
    'ण': '�', 'त': '�', 'थ': '�', 'द': '�', 'ध': '�', 'न': '�',
    'प': '�', 'फ': '�', 'ब': '�', 'भ': '�', 'म': '�', 'य': '�',
    'र': '�', 'ल': '�', 'व': '�', 'श': '�', 'ष': '�', 'स': '�',
    'ह': '�', ' ': ' ', '.': '.', ',': ',', '?': '?', '!': '!'
  };
  
  function convertKruti(direction) {
    const text = krutiInput.value;
    let result = '';
    
    if (direction === 'toKruti') {
      // Convert Unicode to KrutiDev
      for (let i = 0; i < text.length; i++) {
        const char = text[i];
        result += unicodeToKrutiMap[char] || char;
      }
    } else {
      // Convert KrutiDev to Unicode
      for (let i = 0; i < text.length; i++) {
        const char = text[i];
        result += krutiToUnicodeMap[char] || char;
      }
    }
    
    krutiOutput.value = result;
  }
  
  // Real-time conversion
  krutiInput.addEventListener('input', function() {
    convertKruti('toUnicode');
  });
});
