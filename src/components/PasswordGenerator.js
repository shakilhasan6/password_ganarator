import { useState, useRef } from 'react';
import './passwordGanerator.css'

const PasswordGenerator = () => {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(8);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const inputRef = useRef(null);
  const [inputValue, setInputValue] = useState('');

  const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
  const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numberChars = '0123456789';
  const symbolChars = '!@#$%^&*()_+-={}[]|\\:;"\'<>,.?/~`';

  if (length === -1) {
    setLength(0);
  }
  const GeneratorPassword = () => {
    if (length === 0) {
      alert("Please enter password length");
    }
    if (includeLowercase === false && includeUppercase === false && includeNumbers === false && includeSymbols === false) {
      alert("Please Select your chack-box");
    }

    let charset = '';
    if (includeLowercase) charset += lowercaseChars;
    if (includeUppercase) charset += uppercaseChars;
    if (includeNumbers) charset += numberChars;
    if (includeSymbols) charset += symbolChars;

    let newPassword = '';
    for (let i = 0; i < length; i++) {
      newPassword += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    setPassword(newPassword);
  };

  const handleClick = () => {
    if (password === '') { alert('Please Generate your Password') }

    const inputElement = inputRef.current;
    inputElement.select();
    document.execCommand('copy');
  }
  return (
    <div className='card   ganeratorCard'>
      <div className="card-body items">
        <h1 className='text-3xl card-title text-center titlePass'>Generate Your Password</h1>

        <label className="cursor-pointer label">
          <span className="label-text text-2xl heading">Password Length:</span>
          <input type="number" className="input inputValue " value={length} onChange={(e) => setLength(Number(e.target.value))} />
        </label>

        <div className="form-control">
          <label className="cursor-pointer label">
            <span className="label-text heading text-2xl">Include Lowercase Letters:</span>
            <input type="checkbox" className="checkbox checkbox-secondary" checked={includeLowercase} onChange={(e) => setIncludeLowercase(e.target.checked)} />
          </label>

          <label className="cursor-pointer label">
            <span className="label-text heading text-2xl">Include Uppercase Letters:</span>
            <input type="checkbox" className="checkbox checkbox-secondary" checked={includeUppercase} onChange={(e) => setIncludeUppercase(e.target.checked)} />
          </label>

          <label className="cursor-pointer label">
            <span className="label-text heading text-2xl">Include Numbers:</span>
            <input type="checkbox" className="checkbox checkbox-secondary" checked={includeNumbers} onChange={(e) => setIncludeNumbers(e.target.checked)} />
          </label>

          <label className="cursor-pointer label">
            <span className="label-text heading text-2xl">Include Symbols:</span>
            <input type="checkbox" className="checkbox checkbox-secondary" checked={includeSymbols} onChange={(e) => setIncludeSymbols(e.target.checked)} />
          </label>

        </div>

        <input type="text" ref={inputRef} placeholder="Generate Password" value={password} readOnly className="input  w-full " onChange={(e) => setInputValue(e.target.value)} />
     
        <button className="btn heading" onClick={GeneratorPassword}>Generate Password</button>
        <button className="btn btn-primary heading" onClick={handleClick}>Copy</button>
      </div>
    </div>
  );
};

export default PasswordGenerator;
