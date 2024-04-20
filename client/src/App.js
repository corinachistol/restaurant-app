

const App = (props) => {

  return (
    <div>
      <h1 className="text-center text-blue-400 text-3xl">Hello Tailwind</h1>
     {props.children}
    </div>
  );
}

export default App;
