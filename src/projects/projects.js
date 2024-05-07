import tictac from "../images/tictac.png";
import todo from "../images/todo.png";
import chat from "../images/chat.png";
import cart from "../images/cart.png";
import tieSheet from "../images/tiesheet.png";
export const projects = [
  // project 1 => tictactoe
  {
    id: "tictactoe",
    title: "Tic-Tac-Toe",
    image: tictac,
    link: "https://tictactoetest.vercel.app/",
    tools: ["Tailwind", "React", "HTML", "CSS"],
  },
  //project 2=> todoApplication
  {
    id: "todoApplication",
    title: "Todo App",
    image: todo,
    link: "https://cyruu.github.io/react_TodoApplication/",
    tools: ["React", "Tailwind", "HTML", "CSS"],
  },
  //project 3=> cart demo
  {
    id: "cartDemo",
    title: "Cart Demo",
    image: cart,
    link: "https://react-cart-system.vercel.app/",
    tools: ["React", "HTML", "CSS"],
  },
  //project 4=> chat app
  {
    id: "chatApp",
    title: "Chat App",
    image: chat,
    link: "https://react-chat-app-wlkh.vercel.app/",
    tools: ["React", "Tailwind", "Redux", "HTML", "CSS"],
  },
  //project 5=> tiesheet for 4 and 8 players
  {
    id: "tieSheet",
    title: "Tie-Sheet",
    image: tieSheet,
    link: "https://react-tie-sheet.vercel.app/",
    tools: ["React", "Redux", "HTML", "CSS"],
  },
  //project 6=> chat real time with firebase
  {
    id: "chat-test",
    title: "Chat Test",
    image: chat,
    link: "https://chat-snowy-one-52.vercel.app/",
    tools: ["React", "Firebase", "HTML", "CSS"],
  },
];
