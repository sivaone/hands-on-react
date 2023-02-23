function App() {
  const name = 'StarGazers';
  return (
    <div className="container">
      <hgroup>
        <img src="images/group.svg" alt="stargazers" />
        <h1>Meet the <i style={{ color: "steelblue" }}>{name}</i> </h1>
        <p>Members1 of an <b>intergalactic alliance</b> paving the way for peace and benevolence among all species. 
        They are known for their enthusiasm for science, for their 
        love of fun, and their dedication to education.</p>
        <button className="outline" onClick={() => alert("Hello")}>Click Me</button>
      </hgroup>
    </div>
  )
}
export default App
