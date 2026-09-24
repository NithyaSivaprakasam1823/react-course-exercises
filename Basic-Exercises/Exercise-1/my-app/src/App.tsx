import dayjs from 'dayjs';
function App() {
  var socks: number = 10;
  var tshirt = 8;
  var productCost = socks + 2 * tshirt;
  var shippingCost = 5;
  console.log(productCost);
  const today = dayjs().format('MMMM D');
  console.log(today);
  setInterval(() => {
    console.log(dayjs().format('HH:mm:ss'));
  }, 1000);
  return (
    <>
      <button>Good Job!</button>
      <p>My Name is Nithya</p>
      <p>Cotton Socks</p>
      <p>Price: $10</p>
      <button>Add to Cart</button>
      <p>Product cost: ${productCost}</p>
      <p>Shipping cost: ${shippingCost}</p>
      <p>Total cost: ${productCost + shippingCost}</p>
      <button>Place your order</button>
      <p>Today is {today}</p>
      <p>Current time: {dayjs().format('HH:mm:ss')}</p>

    </>
  )
}

export default App;