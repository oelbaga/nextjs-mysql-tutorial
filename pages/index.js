import { useEffect, useState } from "react";
import styles from "../styles/Home.module.scss";

export default function Home() {
  const [dataResponse, setdataResponse] = useState([]);

  useEffect(() => {
    async function getPageData() {
      const apiUrlEndpoint = `http://localhost:3000/api/getdata-lib`;
      const response = await fetch(apiUrlEndpoint);
      const res = await response.json();
      console.log(res.products);
      setdataResponse(res.products);
    }
    getPageData();
  }, []);
  return (
    <div className={styles.container}>
      {dataResponse.map((product) => {
        return (
          <div key={product.productid}>
            <div>{product.productname}</div>
            <div className={styles.photo}>
              <img src={`/images/${product.productimage}`} alt="" />
            </div>
          </div>
        );
      })}
    </div>
  );
}
