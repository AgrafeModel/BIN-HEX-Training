export function runCode(code: string): string[] {
  const logs: string[] = [];
  const originalLog = console.log;

  try {
    // Redirect console.log
    console.log = (...args: unknown[]) => {
      logs.push(args.map((arg) => String(arg)).join(" "));
      originalLog(...args); // Show them in the console
    };

    // ⚠️ Execute the code (not safe)
    eval(code);
  } catch (error: unknown) {
    if (error instanceof Error) {
      logs.push(`Error: ${error.message}`);
    } else {
      logs.push("Error: An unknown error occurred");
    }
  } finally {
    console.log = originalLog; // Restore console.log
  }

  return logs;
}
