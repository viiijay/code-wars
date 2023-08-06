unction findNeedle(haystack) {
    // your code here
    const N = haystack.length
    for (let i = 0; i < N; i++)
      {
        if (haystack[i] === "needle") {
          return `found the needle at position ${i}`
        }
      }
  }