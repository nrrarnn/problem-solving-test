# Balanced Bracket Checker

Balanced Bracket Checker adalah program untuk memeriksa apakah string memiliki susunan bracket yang seimbang. Program ini mendukung bracket jenis `{}`, `[]`, dan `()`. 

## Fitur
- **Pemeriksaan Bracket Seimbang**: Program ini memverifikasi bahwa setiap bracket pembuka memiliki pasangan bracket penutup yang sesuai.
- **Algoritma Yang Optimal**: Menggunakan algoritma berbasis stack.

## Algoritma dan Kompleksitas

### Algoritma
Program ini menggunakan struktur data stack untuk melacak bracket pembuka dan menyesuaikan setiap bracket penutup dengan bracket pembuka yang terakhir masuk. Dengan pendekatan ini, kompleksitas program menjadi sangat efisien.

#### Langkah-Langkah:
1. Iterasi melalui setiap karakter dalam string:
   - Jika karakter adalah bracket pembuka (`{`, `[`, atau `(`), tambahkan ke stack.
   - Jika karakter adalah bracket penutup (`}`, `]`, atau `)`):
     - Periksa apakah stack kosong. Jika kosong, ini berarti bracket tidak seimbang, dan fungsi mengembalikan `"NO"`.
     - Jika stack tidak kosong, periksa apakah bracket teratas pada stack cocok dengan bracket penutup saat ini. Jika cocok, keluarkan bracket dari stack. Jika tidak, fungsi mengembalikan `"NO"`.
2. Setelah seluruh string diproses, jika stack kosong, maka seluruh bracket seimbang, dan fungsi mengembalikan `"YES"`. Jika stack masih berisi elemen, fungsi mengembalikan `"NO"`.

### Kompleksitas
- **Kompleksitas Waktu**: O(n), di mana `n` adalah panjang string input. Fungsi hanya melakukan satu kali iterasi terhadap setiap karakter dalam string.
- **Kompleksitas Ruang**: O(n), karena dalam kasus terburuk, seluruh bracket pembuka akan ditambahkan ke stack.

## Implementasi

Berikut adalah kode JavaScript untuk fungsi `isBalanced`:

```javascript
function isBalanced(brackets) {
  const stack = [];
  const matchingBrackets = {
    ')': '(',
    '}': '{',
    ']': '['
  };

  for (let char of brackets) {
    if (char === '(' || char === '{' || char === '[') {
      stack.push(char); // Tambahkan bracket pembuka ke stack
    } else if (char === ')' || char === '}' || char === ']') {
      // Jika stack kosong atau bracket tidak cocok, return "NO"
      if (stack.length === 0 || stack.pop() !== matchingBrackets[char]) {
        return "NO";
      }
    }
  }

  // Jika stack kosong, maka semua bracket seimbang
  return stack.length === 0 ? "YES" : "NO";
}
