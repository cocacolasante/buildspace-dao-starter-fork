import { useAddress, useMetamask } from "@thirdweb-dev/react";


const App = () => {

  const address = useAddress();
  const connectWithMetamask = useMetamask();

  console.log("Connected to: ", address);

  if(!address){
    return (
      <div className="landing">
      <h1>Welcome to Coders Dao</h1>
      <p>A Place for Blockchain Coders to work together to build the new internet</p>
      <button onClick={connectWithMetamask} >Please connect your wallet</button>
    </div>
    )
  }
  return (
    <div className="landing">
      <h1>Welcome to Coders Dao</h1>
      <p>A Place for Blockchain Coders to work together to build the new internet</p>
      <p>Wallet connected. Now What????</p>
    </div>
  );
};

export default App;
