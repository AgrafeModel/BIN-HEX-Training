import { useEffect, useRef, useState } from "react";
import { runCode } from "../exos/exec";
import { useParams } from "react-router-dom";
import { GetExoByID } from "../exos/list";
import type { Exo } from "../types/exo";
import clsx from "clsx";

export function ExoPage() {
  const { id } = useParams();

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Page states
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | undefined>(undefined);

  // Exo state
  const [exo, setExo] = useState<Exo | undefined>();
  const [res, setRes] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  const [input, setInput] = useState<string>("");

  const [userCode, setUserCode] = useState<string>("");

  function handleSubmit() {
    const text = userCode;

    if (text) {
      const randomInt = Math.floor(Math.random() * 50);
      setInput(randomInt.toString());
      const startingcode = `const input= ${randomInt};`;
      console.log(
        `${startingcode}\n${text}`,
        `${startingcode}\n${exo?.solution || ""}`,
      );
      const uRes = runCode(`${startingcode}\n${text}`);
      const eRes = runCode(`${startingcode}\n${exo?.solution || ""}`);
      console.log(uRes, eRes);
      setRes(uRes.join("\n"));

      if (eRes.join("\n") === uRes.join("\n")) {
        setStatus("Success");
      } else {
        setStatus("Failure");
      }
    }
  }

  useEffect(() => {
    const fetchExo = async () => {
      if (!id) {
        setLoading(false);
        setError("No ID provided");
        return;
      }
      const exo = GetExoByID(parseInt(id));
      setExo(exo);
      setUserCode(exo?.code || "");

      setLoading(false);
    };
    fetchExo();
  }, [id]);

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : error || exo == undefined ? (
        <div className="flex flex-col w-full align-center justify-center">
          <p className="w-max">Error: {error || "Exo not found"}</p>
          <a href="/" className="w-max text-blue-500 hover:underline">
            Go back to home
          </a>
        </div>
      ) : (
        <div className="w-full flex flex-col items-center justify-center p-8 ">
          <div className="flex flex-col items-center justify-center h-full">
            <h2 className="text-2xl font-bold mb-4">{exo?.title}</h2>
            <p className="text-gray-600 mb-4 max-w-2xl">{exo?.description}</p>

            <div className="flex flex-col w-full bg-gray-900">
              <form
                onSubmit={handleSubmit}
                className="w-full max-w-2xl h-full overflow-y-hidden h-64"
              >
                <div className="relative flex flex-row">
                  {/* Line Numbers */}
                  <div className="bg-gray-800 text-gray-400 font-mono text-sm leading-6 py-4 px-2 text-right select-none">
                    {Array.from(
                      { length: userCode.split("\n").length || 1 },
                      (_, i) => (
                        <div key={i}>{i + 1}</div>
                      ),
                    )}
                  </div>

                  {/* Textarea */}
                  <textarea
                    ref={textareaRef}
                    contentEditable={true}
                    content={userCode}
                    defaultValue={userCode}
                    onChange={(e) => setUserCode(e.target.value)}
                    className="border-l border-gray-700 p-4 min-h-64 w-full h-max bg-gray-900 text-white font-mono text-sm leading-6 shadow-inner focus:outline-none focus:ring-0  resize-none"
                  />
                </div>
              </form>
              <div className="w-full bg-gray-800 flex align-center justify-between border border-gray-700">
                <div className="flex items-center">
                  <p
                    className={clsx(
                      status === "Success" && "text-green-500",
                      status === "Failure" && "text-red-500",
                      "text-center p-2 flex-row",
                    )}
                  >
                    <p className="text-gray-200">{"> input = " + input}</p>
                    {res}
                  </p>
                </div>

                <button
                  type="submit"
                  onClick={() => handleSubmit()}
                  className="px-4 py-2 bg-gray-800 text-gray-400 font-mono text-sm leading-6 shadow-inner focus:outline-none focus:ring-0 hover:border-gray-600 rounded-none active:bg-gray-700"
                >
                  Submit
                </button>
              </div>
            </div>

            {status && (
              <div className="mt-4">
                {status === "Success" ? (
                  <span className="text-green-500">Success</span>
                ) : (
                  <span className="text-red-500">Failure</span>
                )}
              </div>
            )}
          </div>
          <div className="flex flex-row w-full justify-between align-center fixed bottom-0 p-8">
            {parseInt(id || "0") - 1 > 0 ? (
              <a
                href={"/exo/" + (parseInt(id || "0") - 1)}
                className="px-4 py-2 bg-gray-800 text-gray-400 font-mono text-sm leading-6 shadow-inner focus:outline-none focus:ring-0"
              >
                Previous
              </a>
            ) : (
              <div></div>
            )}

            {parseInt(id || "0") + 1 > 0 ? (
              <a
                href={"/exo/" + (parseInt(id || "0") + 1)}
                className="px-4 py-2 bg-gray-800 text-gray-400 font-mono text-sm leading-6 shadow-inner focus:outline-none focus:ring-0"
              >
                Next
              </a>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
