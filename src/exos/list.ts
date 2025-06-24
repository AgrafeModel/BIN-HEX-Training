import { Difficulty, type Exo } from "../types/exo";

export function GetExoByID(id: number): Exo | undefined {
  return binaryExos.find((exo) => exo.id === id);
}

const binaryExos: Exo[] = [
  {
    id: 1,
    title: "Tester si un bit est à 1",
    hint: "Utilisez un masque pour vérifier si le bit est à 1.",
    description:
      "Écris une fonction qui affiche 'ON' si le 3e bit (bit 2) est à 1 dans une variable `x`, sinon affiche 'OFF'.",
    difficulty: Difficulty.EASY,
    tags: ["bitwise", "binary", "mask"],
    code: `let x = input;
// Ton code ici
`,
    solution: `let x = input;
if (x & (1 << 2)) {
  console.log("ON");
} else {
  console.log("OFF");
}`,
  },
  {
    id: 2,
    title: "Activer un bit",
    description:
      "Écris une fonction qui active le 1er bit (bit 0) de `x`, puis affiche `x`.",
    hint: "Utilisez un masque pour activer le bit.",
    difficulty: Difficulty.EASY,
    tags: ["bitwise", "binary", "set bit"],
    code: `let x = input;
// Ton code ici
`,
    solution: `let x = input;
x |= (1 << 0);
console.log(x);`,
  },
  {
    id: 3,
    title: "Désactiver un bit",
    description: "Enlève le 2e bit (bit 1) de `x` et affiche sa valeur.",
    hint: "Utilisez un masque pour désactiver le bit.",
    difficulty: Difficulty.MEDIUM,
    tags: ["bitwise", "binary", "clear bit"],
    code: `let x = input;
// Ton code ici
`,
    solution: `let x = input;
x &= ~(1 << 1);
console.log(x);`,
  },
  {
    id: 4,
    title: "Compter les bits à 1",
    description:
      "Compte le nombre de bits à 1 dans un entier `x` et affiche le résultat.",
    hint: "Utilisez un masque pour compter les bits à 1.",
    difficulty: Difficulty.MEDIUM,
    tags: ["bitwise", "loop", "count"],
    code: `let x = input;
// Ton code ici
`,
    solution: `let x = input, count = 0;
while (x) {
  count += x & 1;
  x >>= 1;
}
console.log(count);`,
  },
  {
    id: 5,
    title: "Basculer un bit (toggle)",
    description:
      "Inverse le 0e bit de `x` (si 0 → 1, si 1 → 0), puis affiche le résultat.",
    hint: "Utilisez un masque pour basculer le bit.",
    difficulty: Difficulty.MEDIUM,
    tags: ["bitwise", "toggle"],
    code: `let x = input;
// Ton code ici
`,
    solution: `let x = input;
x ^= (1 << 0);
console.log(x);`,
  },

  {
    id: 6,
    title: "Trouver le bit le plus significatif",
    description:
      "Écris une fonction qui trouve le bit le plus significatif (MSB) dans un entier `x` et affiche sa position.",
    hint: "Utilisez une boucle pour décaler les bits jusqu'à ce que `x` devienne 0.",
    difficulty: Difficulty.HARD,
    tags: ["bitwise", "loop", "MSB"],
    code: `let x = input;
// Ton code ici
`,
    solution: `let x = input, position = -1;
while (x > 0) {
  position++;
  x >>= 1;
}
console.log(position);`,
  },
  {
    id: 7,
    title: "Vérifier si un nombre est une puissance de 2",
    description:
      "Écris une fonction qui vérifie si un entier `x` est une puissance de 2.",
    hint: "Utilisez une opération bitwise pour vérifier si `x & (x - 1)` est égal à 0.",
    difficulty: Difficulty.EASY,
    tags: ["bitwise", "binary", "power of 2"],
    code: `let x = input;
// Ton code ici
`,
    solution: `let x = input;
if (x > 0 && (x & (x - 1)) === 0) {
  console.log("Yes");
} else {
  console.log("No");
}`,
  },
  {
    id: 8,
    title: "Inverser tous les bits",
    description:
      "Écris une fonction qui inverse tous les bits d'un entier `x` et affiche le résultat.",
    hint: "Utilisez l'opérateur NOT (~) pour inverser les bits.",
    difficulty: Difficulty.MEDIUM,
    tags: ["bitwise", "binary", "invert bits"],
    code: `let x = input;
// Ton code ici
`,
    solution: `let x = input;
console.log(~x);`,
  },
  {
    id: 9,
    title: "Compter les bits à 0",
    description:
      "Compte le nombre de bits à 0 dans un entier `x` sur 32 bits et affiche le résultat.",
    hint: "Utilisez une boucle pour parcourir les bits et comptez ceux qui sont 0.",
    difficulty: Difficulty.HARD,
    tags: ["bitwise", "loop", "count"],
    code: `let x = input;
// Ton code ici
`,
    solution: `let x = input, count = 0;
for (let i = 0; i < 32; i++) {
  if ((x & (1 << i)) === 0) {
    count++;
  }
}
console.log(count);`,
  },
  {
    id: 10,
    title: "Basculer les bits pairs",
    description:
      "Inverse tous les bits pairs d'un entier `x` et affiche le résultat.",
    hint: "Utilisez un masque pour cibler les bits pairs.",
    difficulty: Difficulty.MEDIUM,
    tags: ["bitwise", "toggle", "mask"],
    code: `let x = input;
// Ton code ici
`,
    solution: `let x = input;
let mask = 0xAAAAAAAA; // Masque pour les bits pairs
console.log(x ^ mask);`,
  },
  {
    id: 11,
    title: "Multiplier par 2 sans opérateur *",
    description:
      "Écris une fonction qui multiplie un entier `x` par 2 sans utiliser l'opérateur `*`.",
    hint: "Utilisez une opération de décalage à gauche.",
    difficulty: Difficulty.EASY,
    tags: ["bitwise", "shift", "multiply"],
    code: `let x = input;
// Ton code ici
`,
    solution: `let x = input;
console.log(x << 1);`,
  },
  {
    id: 12,
    title: "Diviser par 2 sans opérateur /",
    description:
      "Écris une fonction qui divise un entier `x` par 2 sans utiliser l'opérateur `/`.",
    hint: "Utilisez une opération de décalage à droite.",
    difficulty: Difficulty.EASY,
    tags: ["bitwise", "shift", "divide"],
    code: `let x = input;
// Ton code ici
`,
    solution: `let x = input;
console.log(x >> 1);`,
  },
  {
    id: 13,
    title: "Trouver le bit impair le plus bas",
    description:
      "Écris une fonction qui trouve le bit impair le plus bas dans un entier `x`.",
    hint: "Utilisez un masque pour cibler les bits impairs.",
    difficulty: Difficulty.MEDIUM,
    tags: ["bitwise", "mask", "binary"],
    code: `let x = input;
// Ton code ici
`,
    solution: `let x = input;
let mask = 0x55555555; // Masque pour les bits impairs
console.log(x & mask);`,
  },
  {
    id: 14,
    title: "Échanger les bits pairs et impairs",
    description:
      "Écris une fonction qui échange les bits pairs et impairs d'un entier `x`.",
    hint: "Utilisez des masques pour séparer les bits pairs et impairs, puis décalez-les.",
    difficulty: Difficulty.HARD,
    tags: ["bitwise", "swap", "mask"],
    code: `let x = input;
// Ton code ici
`,
    solution: `let x = input;
let evenBits = x & 0xAAAAAAAA;
let oddBits = x & 0x55555555;
console.log((evenBits >> 1) | (oddBits << 1));`,
  },
  {
    id: 15,
    title: "Trouver le bit unique",
    description:
      "Dans un tableau où tous les nombres apparaissent deux fois sauf un, trouve le nombre unique.",
    hint: "Utilisez l'opérateur XOR pour annuler les paires.",
    difficulty: Difficulty.HARD,
    tags: ["bitwise", "XOR", "array"],
    code: `let arr = [2, 3, 5, 4, 5, 3, 4];
// Ton code ici
`,
    solution: `let arr = [2, 3, 5, 4, 5, 3, 4];
let unique = 0;
for (let num of arr) {
  unique ^= num;
}
console.log(unique);`,
  },
];

export { binaryExos };
