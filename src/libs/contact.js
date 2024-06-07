export function WaCheckout(data, number = "+6285161710045") {
  const generateText = () => {
    let text = "";

    for (const key in data) {
      if (data.hasOwnProperty(key) && Array.isArray(data[key])) {
        if (key === "template") {
          text += "%0ATemplate+%3A%0A";
        } else if (key === "fitur") {
          text += "%0AExtra+Fitur+%3A%0A";
        } else if (key === "addon") {
          text += "%0AAddon+%3A%0A";
        }

        data[key].forEach((item) => {
          text += `-+${encodeURI(item.title)}+(${encodeURI(item.id)})%0A`;
        });
      }
    }

    return text;
  };

  const url = `https://wa.me/${encodeURI(
    number
  )}?text=Halo+kak%2C+Saya+ingin+order+Digital+Invitation+dari+ZoeJeton.com%0A%0ABerikut+detail+Pesanan+saya%3A%0A%0ANama+Pemesan+%3A+${encodeURI(
    data.name
  )}%0AOrder+ID+%3A+${encodeURI(
    data.order_id
  )}${generateText()}%0ADiskon+%3A+${encodeURI(
    data.diskon
  )}%0AEstimasi+Harga+%3A+${encodeURI(data.subtotal)}%0A%0ATerima+Kasih%21`;

  console.log(url);
  window.open(url);
}
