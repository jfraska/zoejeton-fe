import { useEffect, useState } from "react";

export default function useSnap() {
  const [snap, setSnap] = useState(null);

  useEffect(() => {
    const myMidtransClientKey = process.env.MIDTRANS_CLIENT_KEY;
    const script = document.createElement("script");
    script.src = `https://app.stg.midtrans.com/snap/snap.js`;
    script.setAttribute("data-client-key", myMidtransClientKey);
    script.onload = () => {
      setSnap(window.snap);
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const snapEmbed = (snap_token, embedId, action) => {
    if (snap) {
      snap.embed(snap_token, {
        embedId,
        onSuccess: function (result) {
          action.onSuccess(result);
        },
        onPending: function (result) {
          action.onPending(result);
        },
        onClose: function () {
          action.onClose();
        },
      });
    }
  };

  const snapPopup = (snap_token, action) => {
    if (snap) {
      snap.pay(snap_token, {
        onSuccess: function (result) {
          action.onSuccess(result);
        },
        onPending: function (result) {
          action.onPending(result);
        },
        onClose: function () {
          action.onClose();
        },
      });
    }
  };

  return { snapEmbed, snapPopup };
}
