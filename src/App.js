import React from "react";
import Is from "./Components/figma/1";
import { Switch , Route } from 'react-router-dom';
import Iwatch from "./Components/figma/apple2";
import Dell from "./Components/figma/dell";
import Boat from "./Components/figma/boat";
import Skull from "./Components/figma/skullcandy";
import Marshall from "./Components/figma/Marshall";
import Samsung1 from "./Components/figma/samsung2";
import Jbl from "./Components/figma/jbl";
import Hp from "./Components/figma/hp";
import Nikon from "./Components/figma/nikon";
import Canon from "./Components/figma/canon";
import Sony from "./Components/figma/sony";
import Amazon1 from "./Components/figma/amazon";
import Guide from "./Components/figma/guide";
import More from "./Components/figma/more";
import News from "./Components/figma/news";
import Login from "./Components/figma/login";
import Review from "./Components/figma/review";
import Create from "./Components/figma/create";
import Payby from "./Components/figma/payby";
import Paybyn from "./Components/figma/paybyn";
import Sbi from "./Components/figma/sbi";
import Thankyou from "./Components/figma/thankyou";
import Ic from "./Components/figma/icic";
import Cash from "./Components/figma/cash";
import Response from "./Components/figma/response";
import Paybyd from "./Components/figma/paybyd";
import Fp from "./Components/figma/fp";

function App(){
  return(
    <Switch>
    <Route exact path="/" component={Is} />
    <Route path="/apple" component={Iwatch} />
    <Route path="/dell" component={Dell} />
    <Route path="/boat" component={Boat} />
    <Route path="/skull" component={Skull} />
    <Route path="/marshall" component={Marshall} />
    <Route path="/samsung" component={Samsung1} />
    <Route path="/jbl" component={Jbl} />
    <Route path="/hp" component={Hp} />
    <Route path="/nikon" component={Nikon} />
    <Route path="/amazon" component={Amazon1} />
    <Route path="/canon" component={Canon} />
    <Route path="/sony" component={Sony} />
    <Route path="/Is" component={Is} />
    <Route path="/guide" component={Guide} />
    <Route path="/more" component={More} />
    <Route path="/news" component={News} />
    <Route path="/login" component={Login} />
    <Route path="/review" component={Review} />
    <Route path="/create" component={Create} />
    <Route path="/pay" component={Payby} />
    <Route path="/paybyd" component={Paybyd} />
    <Route path="/paybyn" component={Paybyn} />
    <Route path="/sbi" component={Sbi} />
    <Route path="/icic" component={Ic} />
    <Route path="/cash" component={Cash} />
    <Route path="/thankyou" component={Thankyou} />
    <Route path="/response" component={Response} />
    <Route path="/fp" component={Fp} />
    </Switch>
  )
}
export default App