import "./App.css";
import axios from "axios";
import { useEffect, useState, useRef } from "react";
export default function App() {
  const iframeRef = useRef(null);

  const handleIframeLoad = () => {
    const iframeContent =
      iframeRef.current.contentDocument ||
      iframeRef.current.contentWindow.document;
    const contentHeight = iframeContent.body.scrollHeight;
    const contentWidth = iframeContent.body.scrollWidth;

    iframeRef.current.style.height = `${contentHeight}px`;
    iframeRef.current.style.width = `${contentWidth}px`;
    console.log(iframeContent);
  };

  const [monto, setMonto] = useState(100000);
  const [loading, setLoading] = useState(false);
  const [greenPayFormUrl, setGreenPayFormUrl] = useState(
    "http://sandbox-checkoutform.greenpay.me/fafd2e44-803c-4864-859a-a32f3d49ccb4"
  );
  //SendOrder
  const sendOrderToGreenPay = async () => {
    setLoading(true);
    await axios
      .post("http://localhost:3000/order", {
        amount: monto,
      })
      .then((res) => {
        setGreenPayFormUrl(res.data.greenPayFormUrl);
        console.log(res.data.greenPayFormUrl);
        setLoading(false);
      })
      .catch((e) => {
        setLoading(false);
        console.log(e);
      });
  };
  useEffect(() => {
    /*window.onload = function () {
      var iframe = document.getElementById("myiframe");
      iframe.width = iframe.contentWindow.document.body.scrollWidth;
      iframe.height = iframe.contentWindow.document.body.scrollHeight;
    };*/
  }, []);
  function resizeIframe(obj) {
    var iframe = document.getElementById("someID");
    console.log(obj.contentWindow.document.body.scrollHeight);
    iframe.style.height = obj.contentWindow.document.body.scrollHeight + "px";
  }
  return (
    <>
      <div className="home">
        <div>
          <div className="pay-section">
            <div className="total-section">
              <label htmlFor="total">Total: </label>
              <input
                id="total"
                type="number"
                value={monto}
                required
                onChange={(e) => setMonto(e.target.value)}
              />
            </div>
            <button onClick={sendOrderToGreenPay}>
              {loading ? "espere..." : "Pagar"}
            </button>
          </div>
          <div className="green-pay-form">
            <iframe
              frameBorder="0"
              src={greenPayFormUrl}
              height="100%"
              width="100%"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}
