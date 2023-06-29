import { useEffect } from "react";
import usePurchase from "../store/slices/usePurchase.slice";
import PurchaseCard from "../components/Purchases/PurchaseCard";
import "./styles/PurchasesPage.css";

const PurchasesPage = () => {
  const { purchases, getAllPurchase } = usePurchase();
  useEffect(() => {
    getAllPurchase();
  }, []);

  return (
    <div className="containt_purchases">
      <h2>My purchases</h2>
      <div className="products_containt">
        {purchases?.map((product) => (
          <PurchaseCard key={product.id} product={product}></PurchaseCard>
        ))}
      </div>
    </div>
  );
};

export default PurchasesPage;
