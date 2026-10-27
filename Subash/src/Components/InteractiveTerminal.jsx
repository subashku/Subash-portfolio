import { useState, useRef, useEffect } from "react";
import { Terminal as TerminalIcon, Minimize2, Maximize2, Trash2, CornerDownLeft } from "lucide-react";

function InteractiveTerminal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [inputVal, setInputVal] = useState("");
  const [history, setHistory] = useState([
    {
      type: "system",
      text: "Welcome to Subash Developer Terminal v1.0.0. Type 'help' to see available commands."
    }
  ]);

  const terminalEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen && !isMinimized) {
      terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [history, isOpen, isMinimized]);

  const handleCommand = (e) => {
    e.preventDefault();
    const cmd = inputVal.trim().toLowerCase();
    if (!cmd) return;

    const newHistory = [...history, { type: "user", text: `$ ${inputVal}` }];

    switch (cmd) {
      case "help":
        newHistory.push({
          type: "system",
          text: `Available Commands:
  • help      : List all available commands
  • about     : Display background & career objective
  • skills    : Show technical skills & tools
  • projects  : List academic and web development projects
  • contact   : Display verified contact information
  • education : Show education history (MCA & BCA)
  • clear     : Clear terminal history
  • exit      : Close the interactive terminal`
        });
        break;

      case "about":
        newHistory.push({
          type: "system",
          text: `Subash | MCA Graduate | Aspiring Software Developer
Dhanalakshmi Srinivasan Engineering College (May 2026).
Passionate about building responsive web applications, learning modern tech stacks, and developing practical software solutions.`
        });
        break;

      case "skills":
        newHistory.push({
          type: "system",
          text: `Technical Competencies:
  • Frontend     : HTML5, CSS3, JavaScript, React.js
  • Programming  : Python, SQL
  • Dev Tools    : VS Code, Git, GitHub`
        });
        break;

      case "projects":
        newHistory.push({
          type: "system",
          text: `Selected Projects:
  1. AI-Based Mental Health Detection System (Python, ML, Flask)
  2. Bird Sound Recognition System (Python, Librosa, Audio DSP)
  3. Courier Management System (PHP, MySQL, JavaScript)
  4. Kaveri Home Care (React, CSS3, JavaScript)
  5. Junglee Shopping (React, Vite, JavaScript)`
        });
        break;

      case "education":
        newHistory.push({
          type: "system",
          text: `Education Background:
  • MCA : Dhanalakshmi Srinivasan Engineering College (May 2026)
  • BCA : Government Arts and Science College, Tittagudi (2024)`
        });
        break;

      case "contact":
        newHistory.push({
          type: "system",
          text: `Get in Touch:
  • Email    : subashkulandaivelan@gmail.com
  • GitHub   : https://github.com/subashku
  • LinkedIn : https://www.linkedin.com/in/subash-kulandaivelan`
        });
        break;

      case "clear":
        setHistory([]);
        setInputVal("");
        return;

      case "exit":
        setIsOpen(false);
        setInputVal("");
        return;

      default:
        newHistory.push({
          type: "error",
          text: `Command not recognized: '${cmd}'. Type 'help' for available commands.`
        });
    }

    setHistory(newHistory);
    setInputVal("");
  };

  return (
    <>
      {/* Floating launcher button */}
      {!isOpen && (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="terminal-launcher-btn"
          aria-label="Open Interactive Developer Terminal"
        >
          <TerminalIcon size={18} />
          <span>Dev Terminal</span>
        </button>
      )}

      {/* Terminal Window */}
      {isOpen && (
        <div className={`terminal-window ${isMinimized ? "minimized" : ""}`} role="region" aria-label="Developer Terminal">
          <div className="terminal-header">
            <div className="terminal-title">
              <TerminalIcon size={16} />
              <span>subash@portfolio:~$</span>
            </div>
            <div className="terminal-controls">
              <button
                type="button"
                onClick={() => setHistory([])}
                title="Clear screen"
                aria-label="Clear Terminal"
              >
                <Trash2 size={14} />
              </button>
              <button
                type="button"
                onClick={() => setIsMinimized(!isMinimized)}
                title={isMinimized ? "Maximize" : "Minimize"}
                aria-label={isMinimized ? "Maximize Terminal" : "Minimize Terminal"}
              >
                {isMinimized ? <Maximize2 size={14} /> : <Minimize2 size={14} />}
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                title="Close"
                aria-label="Close Terminal"
              >
                ✕
              </button>
            </div>
          </div>

          {!isMinimized && (
            <div className="terminal-body" onClick={() => inputRef.current?.focus()}>
              <div className="terminal-logs">
                {history.map((item, idx) => (
                  <div key={idx} className={`terminal-line line-${item.type}`}>
                    <pre>{item.text}</pre>
                  </div>
                ))}
                <div ref={terminalEndRef} />
              </div>

              <form onSubmit={handleCommand} className="terminal-input-form">
                <span className="terminal-prompt">$</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  placeholder="type 'help', 'skills', 'projects'..."
                  className="terminal-input"
                  aria-label="Terminal command input"
                  autoFocus
                />
                <button type="submit" className="terminal-submit-btn" aria-label="Run command">
                  <CornerDownLeft size={14} />
                </button>
              </form>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default InteractiveTerminal;
