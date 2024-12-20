import './App.css'
import History from "./components/History";
import HowTo from "./components/HowTo";
import ProductInfo from "./components/Productinfo";

export default function App() {
  return (
    <div>
      <header className="p-4">
        <h1 className="text-center text-3xl font-bold">Eirins Eplecider</h1>
      </header>

      <main className="container mx-auto mt-6">
      <nav class="tabs tabs-bordered  justify-center" aria-label="Tabs" role="tablist" aria-orientation="horizontal">
        <button type="button" class="tab active-tab:tab-active active" id="tabs-center-item-1" data-tab="#tabs-center-1" aria-controls="tabs-center-1" role="tab" aria-selected="true">
          Fakta
        </button>
        <button type="button" class="tab active-tab:tab-active" id="tabs-center-item-2" data-tab="#tabs-center-2" aria-controls="tabs-center-2" role="tab" aria-selected="false">
          Prosess
        </button>
        <button type="button" class="tab active-tab:tab-active" id="tabs-center-item-3" data-tab="#tabs-center-3" aria-controls="tabs-center-3" role="tab" aria-selected="false">
          Produktinfo
        </button>
      </nav>
      <div id="tabs-center-1" role="tabpanel" aria-labelledby="tabs-center-item-1">
        <History/>
      </div>
      <div id="tabs-center-2" class="hidden" role="tabpanel" aria-labelledby="tabs-center-item-2">
        <HowTo/>
      </div>
      <div id="tabs-center-3" class="hidden" role="tabpanel" aria-labelledby="tabs-center-item-3">
        <ProductInfo/>
      </div>
      </main>
    </div>
  );
}
