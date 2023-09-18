// function Events() {
//   const [inputValue, setInputValue] = useState('');
//   const [isToggleOn, setIsToggleOn] = useState(true);

//   const handleKeyDown = (e) => {
//     if (e.key === 'Enter') {
//       alert(`keyEnter: ${inputValue}`);
//     }
//   };

//   const toggleState = () => {
//     setIsToggleOn(!isToggleOn);
//   };

//   return (
//     <div>
//       <button onClick={clickMe}>Click Me</button>
//       <input
//         type="text"
//         placeholder="Press Enter..."
//         value={inputValue}
//         onChange={(e) => setInputValue(e.target.value)}
//         onKeyDown={handleKeyDown}
//       />
//       <button onClick={toggleState}>{isToggleOn ? 'on' : 'off'}</button>
//     </div>
//   );
// }

