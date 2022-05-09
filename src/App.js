// import {useEffect, useState} from "react";
import AppRouter from "./router/AppRouter";
import Navbar from "./components/Navbar/Navbar";

const App =() => {

    // const [data, setData] = useState(null);
    // const [toggle, setToggle] = useState(false);
    // const [value, setValue] = useState('');
    //
    // const onClick = () => {
    //     setToggle(prevToggle => !prevToggle);
    // }
    //
    // const onChange = (evt) => {
    //     setValue(evt.target.value);
    // }
    //
    // useEffect(() => {
    //     setTimeout(() => {
    //         setData({});
    //     }, 100);
    // }, []);
    //
    // return (
    //     <div>
    //         {toggle && <div data-testid='toggle-element'>toggle</div>}
    //         {data && <div>data</div>}
    //         <h1>Hello World</h1>
    //         <h2 data-testid='input-value'>{value}</h2>
    //         <input type='text' placeholder='input value...' value={value} onChange={onChange}/>
    //         <button data-testid='toggle-button' onClick={onClick}>click me</button>
    //     </div>
    // );
    return (
        <>
            <Navbar />
            <AppRouter />
        </>
)
}
export default App;
