import EffectSample from "./effectSample/EffectSample";
import ProductTable from "./fetch/ProductTable";
import SupplierTable from "./fetch/SupplierTable";
import ArrayStateSample1 from "./stateSample/ArrayStateSample1";
import ArrayStateSample2 from "./stateSample/ArrayStateSample2";
import IfElseStateSample from "./stateSample/IfElseStateSample";
import KeySample from "./stateSample/KeySample";

//bu fonksiyonu kullanmak için export ediyorum!
//Bir js fonksiyonu iki düğüm dönemez! bunları sarmallaman gerek. Bu boş düğümlere fragment denir!
function App() {

  return <>
     <SupplierTable></SupplierTable>
  </>

}

export default App;