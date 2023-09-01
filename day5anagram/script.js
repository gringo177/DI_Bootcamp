function areAnagrams(str1, str2) {
    
    const cleanStr1 = str1.replace(/\s/g, "").toLowerCase();
    const cleanStr2 = str2.replace(/\s/g, "").toLowerCase();
  
    
    return cleanStr1.split("").sort().join("") === cleanStr2.split("").sort().join("");
  }
  
  
  const string1 = "Astronomer";
  const string2 = "Moon starer";
  
  const result = areAnagrams(string1, string2);
  console.log(result); 