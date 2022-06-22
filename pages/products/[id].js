import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/Home.module.scss";

export default function Home() {
  const router = useRouter();
  const { id } = router.query;
  const [dataResponse, setdataResponse] = useState([]);

  useEffect(() => {
    if (!router.isReady) return;
    async function getPageData() {
      const apiUrlEndpoint = `http://localhost:3000/api/getdata-lib-router`;
      const postData = {
        method: "Post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: id,
        }),
      };

      const response = await fetch(apiUrlEndpoint, postData);
      const res = await response.json();
      setdataResponse(res.products);
    }
    getPageData();
  }, [router.query.id, router.isReady]);

  useEffect(() => {
    console.log(dataResponse);
  }, [dataResponse]);

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

// Another option using getserversideprops, but must pass {data} to the page
// export async function getServerSideProps(context) {
//   const { id } = context.query;
//   const postData = {
//     method: "Post",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({
//       id: id,
//     }),
//   };
//   const res = await fetch(
//     `http://localhost:3000/api/getdata-lib-router`,
//     postData
//   );
//   const data = await res.json();

//   return { props: { data } };
// }
