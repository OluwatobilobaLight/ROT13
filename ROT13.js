function rot13(str) { // LBH QVQ VG!
    // replace the string using regex
    return str.replace(/[A-Z]/g, letter => 
        String.fromCharCode((letter.charCodeAt(0) % 26) + 65)
    )}
  
  // Change the inputs below to test
  rot13("URYYB");
  