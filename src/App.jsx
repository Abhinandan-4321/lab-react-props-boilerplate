import './App.css';

function App(props) {
  // code here
  const imgData = props.data;

  return (
    <div>
      <h1>Kalvium Gallery App.jsx</h1>
      <div className="row">
        {
          imgData.map((image) =>{
            return (

                <img key={image.id} src={image.img} alt=""></img>

            )
          } )
        }
      </div>
    </div>
  )
}

export default App;
