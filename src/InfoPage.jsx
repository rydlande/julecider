import History from "./components/History";
import HowTo from "./components/HowTo";
import ProductInfo from "./components/Productinfo";

export default function InfoPage() {
  return (
    <div className="p-6 space-y-12">
      <History />
      <HowTo />
      <ProductInfo />
    </div>
  );
}