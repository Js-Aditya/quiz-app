import "./app.css";
import { useEffect, useMemo, useState } from "react";
import Start from "./components/Start";
import Timer from "./components/Timer";
import Trivia from "./components/Trivia";

function App() {
  const [username, setUsername] = useState(null);
  const [timeOut, setTimeOut] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [earned, setEarned] = useState("$ 0");

  const data = [
        {
          "id": 1,
          "question": "Which scheduling algorithm provides the highest level of control over system resources but is the most complex?",
          "answers": [
            {
              "text": "Round Robin",
              "correct": false
            },
            {
              "text": "Priority Scheduling",
              "correct": false
            },
            {
              "text": "Shortest Job Next (SJN)",
              "correct": false
            },
            {
              "text": "Multilevel Queue Scheduling",
              "correct": true
            }
          ]
        },
        {
          "id": 2,
          "question": "What is the purpose of the 'fork()' system call in Unix-like operating systems?",
          "answers": [
            {
              "text": "To create a new process",
              "correct": true
            },
            {
              "text": "To create a new thread",
              "correct": false
            },
            {
              "text": "To allocate memory",
              "correct": false
            },
            {
              "text": "To terminate a process",
              "correct": false
            }
          ]
        },
        {
          "id": 3,
          "question": "Which memory management scheme allows a process to be swapped temporarily out of the main memory?",
          "answers": [
            {
              "text": "Paging",
              "correct": false
            },
            {
              "text": "Segmentation",
              "correct": false
            },
            {
              "text": "Virtual Memory",
              "correct": false
            },
            {
              "text": "Demand Paging",
              "correct": true
            }
          ]
        },
        {
          "id": 4,
          "question": "What is the primary function of the 'inode' in a Unix-like file system?",
          "answers": [
            {
              "text": "File permissions",
              "correct": false
            },
            {
              "text": "File data blocks",
              "correct": false
            },
            {
              "text": "File metadata",
              "correct": true
            },
            {
              "text": "File names",
              "correct": false
            }
          ]
        },
        {
          "id": 5,
          "question": "Which of the following is NOT a state in the process life cycle?",
          "answers": [
            {
              "text": "Blocked",
              "correct": false
            },
            {
              "text": "Running",
              "correct": false
            },
            {
              "text": "Terminated",
              "correct": false
            },
            {
              "text": "Halted",
              "correct": true
            }
          ]
        },
        {
          "id": 6,
          "question": "In virtual memory, what is the role of the 'page table'?",
          "answers": [
            {
              "text": "To store pages in secondary memory",
              "correct": false
            },
            {
              "text": "To map virtual addresses to physical addresses",
              "correct": true
            },
            {
              "text": "To manage page replacement",
              "correct": false
            },
            {
              "text": "To control the CPU scheduling",
              "correct": false
            }
          ]
        },
        {
          "id": 7,
          "question": "Which file system is commonly used in Linux distributions?",
          "answers": [
            {
              "text": "FAT32",
              "correct": false
            },
            {
              "text": "NTFS",
              "correct": false
            },
            {
              "text": "EXT4",
              "correct": true
            },
            {
              "text": "HFS+",
              "correct": false
            }
          ]
        },
        {
          "id": 8,
          "question": "What is the purpose of the 'thrashing' phenomenon in virtual memory systems?",
          "answers": [
            {
              "text": "Excessive paging, leading to a decrease in performance",
              "correct": true
            },
            {
              "text": "Insufficient memory, causing frequent page faults",
              "correct": false
            },
            {
              "text": "Uncontrolled process execution",
              "correct": false
            },
            {
              "text": "Improper file system allocation",
              "correct": false
            }
          ]
        },
        {
          "id": 9,
          "question": "Which of the following is NOT a function of an operating system?",
          "answers": [
            {
              "text": "Memory management",
              "correct": false
            },
            {
              "text": "Compiler execution",
              "correct": true
            },
            {
              "text": "Device management",
              "correct": false
            },
            {
              "text": "File management",
              "correct": false
            }
          ]
        },
        {
          "id": 10,
          "question": "What is the primary purpose of the 'chmod' command in Unix-like operating systems?",
          "answers": [
            {
              "text": "Change file ownership",
              "correct": false
            },
            {
              "text": "Change file permissions",
              "correct": true
            },
            {
              "text": "Change file location",
              "correct": false
            },
            {
              "text": "Change file name",
              "correct": false
            }
          ]
        },
        {
          "id": 11,
          "question": "Which scheduling algorithm allows the process that arrives first to be executed first?",
          "answers": [
            {
              "text": "Shortest Job Next (SJN)",
              "correct": false
            },
            {
              "text": "Round Robin",
              "correct": false
            },
            {
              "text": "First-Come-First-Serve (FCFS)",
              "correct": true
            },
            {
              "text": "Priority Scheduling",
              "correct": false
            }
          ]
        },
        {
          "id": 12,
          "question": "What is the purpose of the 'pipe' in Unix-like operating systems?",
          "answers": [
            {
              "text": "To connect two remote systems",
              "correct": false
            },
            {
              "text": "To redirect output to a file",
              "correct": false
            },
            {
              "text": "To allow communication between processes",
              "correct": true
            },
            {
              "text": "To create a symbolic link",
              "correct": false
            }
          ]
        },
        {
          "id": 13,
          "question": "Which of the following is an essential component of a process control block (PCB)?",
          "answers": [
            {
              "text": "CPU registers",
              "correct": true
            },
            {
              "text": "Printer",
              "correct": false
            },
            {
              "text": "Hard disk",
              "correct": false
            },
            {
              "text": "Monitor",
              "correct": false
            }
          ]
        },
        {
          "id": 14,
          "question": "In the context of file systems, what is the purpose of the 'journaling' technique?",
          "answers": [
            {
              "text": "To encrypt file contents",
              "correct": false
            },
            {
              "text": "To log file system events for recovery",
              "correct": true
            },
            {
              "text": "To compress files",
              "correct": false
            },
            {
              "text": "To defragment the file system",
              "correct": false
            }
          ]
        },
        {
          "id": 15,
          "question": "Which type of operating system is designed to serve as a communication intermediary between users and hardware?",
          "answers": [
            {
              "text": "Real-time Operating System",
              "correct": false
            },
            {
              "text": "Network Operating System",
              "correct": false
            },
            {
              "text": "Multiprogramming Operating System",
              "correct": false
            },
            {
              "text": "Interactive Operating System",
              "correct": true
            }
          ]
        }
  ];

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "₹1000" },
        { id: 2, amount: "₹2000" },
        { id: 3, amount: "₹5000" },
        { id: 4, amount: "₹10,000" },
        { id: 5, amount: "₹20,000" },
        { id: 6, amount: "$₹50,000" },
        { id: 7, amount: "₹1 Lakh" },
        { id: 8, amount: "₹2.5 Lakh" },
        { id: 9, amount: "₹5 Lakh" },
        { id: 10, amount: "₹10 Lakh" },
        { id: 11, amount: "₹25 Lakh" },
        { id: 12, amount: "₹50 Lakh" },
        { id: 13, amount: "₹1 Crore" },
        { id: 14, amount: "₹2.5 Crore" },
        { id: 15, amount: "₹5 Crore" },
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber, moneyPyramid]);

  return (
    <div className="app">
      {!username ? (
        <Start setUsername={setUsername} />
      ) : (
        <>
          <div className="main">
            {timeOut ? (
              <h1 className="endText">You earned: {earned}</h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer
                      setTimeOut={setTimeOut}
                      questionNumber={questionNumber}
                    />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={data}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setTimeOut={setTimeOut}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m) => (
                <li
                  className={
                    questionNumber === m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
