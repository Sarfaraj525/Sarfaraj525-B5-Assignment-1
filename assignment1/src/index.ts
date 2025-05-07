function formatString(input: string, toUpper?: boolean): string {
  return toUpper === false ? input.toLowerCase() : input.toUpperCase();
}

console.log(formatString("Hello"));
console.log(formatString("Hello", false));


