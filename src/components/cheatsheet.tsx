import clsx from "clsx";
import { Book, X } from "lucide-react";
import { useState } from "react";

export default function BitwiseCheatSheet() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="
        flex flex-row align-middle items-center
        text-black hover:text-gray-800 focus:ring-0 focus:ring-opacity-50 focus:outline-none border border-gray-300 rounded p-2 hover:bg-gray-100"
      >
        <Book className="h-4 w-4 mr-2" />
        Cheat Sheet
      </button>
      <div
        style={{
          transform: open ? "translateX(0)" : "translateX(200%)",
        }}
        className={clsx(
          "max-w-4xl mx-auto p-6 bg-white rounded-2xl shadow-xl space-y-6 fixed inset-0 z-50 overflow-y-auto transition-transform duration-300 ease-in-out",
        )}
      >
        <div className="flex justify-start items-center gap-2">
          <button
            onClick={() => setOpen(!open)}
            className="text-gray-800 hover:text-gray-800 focus:ring-0 focus:ring-opacity-50 focus:outline-none border border-gray-300 rounded p-2 hover:bg-gray-100"
          >
            <X className="h-4 w-4" />
          </button>
          <h1 className="text-2xl font-bold text-gray-800">
            🧠 Bitwise Cheat Sheet (JavaScript)
          </h1>
        </div>

        {/* Opérateurs de base */}
        <div className="text-black">
          <h2 className="text-xl font-semibold text-blue-700 mb-2">
            🔹 Opérateurs binaires de base
          </h2>
          <table className="w-full text-sm border border-gray-300 rounded overflow-hidden">
            <thead className="bg-gray-100 text-left">
              <tr>
                <th className="p-2">Op</th>
                <th className="p-2">Nom</th>
                <th className="p-2">Exemple</th>
                <th className="p-2">Résultat</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="p-2">&amp;</td>
                <td className="p-2">ET (AND)</td>
                <td className="p-2">6 &amp; 1</td>
                <td className="p-2">0</td>
              </tr>
              <tr>
                <td className="p-2">|</td>
                <td className="p-2">OU (OR)</td>
                <td className="p-2">6 | 1</td>
                <td className="p-2">7</td>
              </tr>
              <tr>
                <td className="p-2">^</td>
                <td className="p-2">XOR</td>
                <td className="p-2">6 ^ 3</td>
                <td className="p-2">5</td>
              </tr>
              <tr>
                <td className="p-2">~</td>
                <td className="p-2">NOT</td>
                <td className="p-2">~6</td>
                <td className="p-2">-7</td>
              </tr>
              <tr>
                <td className="p-2">&lt;&lt;</td>
                <td className="p-2">Décalage G</td>
                <td className="p-2">6 &lt;&lt; 1</td>
                <td className="p-2">12</td>
              </tr>
              <tr>
                <td className="p-2">&gt;&gt;</td>
                <td className="p-2">Décalage D</td>
                <td className="p-2">6 &gt;&gt; 1</td>
                <td className="p-2">3</td>
              </tr>
              <tr>
                <td className="p-2">&gt;&gt;&gt;</td>
                <td className="p-2">Décalage D (0)</td>
                <td className="p-2">6 &gt;&gt;&gt; 1</td>
                <td className="p-2">3</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Masques */}
        <div className="text-black">
          <h2 className="text-xl font-semibold text-blue-700 mb-2">
            🔧 Masques binaires pratiques
          </h2>
          <table className="w-full text-sm border border-gray-300 rounded overflow-hidden">
            <thead className="bg-gray-100 text-left">
              <tr>
                <th className="p-2">Action</th>
                <th className="p-2">Code</th>
                <th className="p-2">Effet</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="p-2">Tester bit n</td>
                <td className="p-2">(x &amp; (1 &lt;&lt; n)) !== 0</td>
                <td className="p-2">true si actif</td>
              </tr>
              <tr>
                <td className="p-2">Activer bit n</td>
                <td className="p-2">x |= (1 &lt;&lt; n)</td>
                <td className="p-2">met bit n à 1</td>
              </tr>
              <tr>
                <td className="p-2">Désactiver bit n</td>
                <td className="p-2">x &amp;= ~(1 &lt;&lt; n)</td>
                <td className="p-2">met bit n à 0</td>
              </tr>
              <tr>
                <td className="p-2">Inverser bit n</td>
                <td className="p-2">x ^= (1 &lt;&lt; n)</td>
                <td className="p-2">flip bit n</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Exemple de code */}
        <div className="text-black">
          <h2 className="text-xl font-semibold text-blue-700 mb-2">
            💡 Exemple rapide
          </h2>
          <pre className="bg-gray-100 rounded p-4 text-sm font-mono overflow-auto">
            {`let x = 5;           // 0101
x |= (1 << 1);       // → 0111 => 7
x &= ~(1 << 0);      // → 0110 => 6
x ^= (1 << 2);       // → 0010 => 2
console.log(x);      // 2`}
          </pre>
        </div>
      </div>
    </>
  );
}
