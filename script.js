//your JS code here. If required.
// ✅ Create 3 promises with a random delay between 1 and 3 seconds
const createPromise = (index) => {
  const delay = Math.random() * 2 + 1; // Random delay between 1 and 3 seconds
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ index, time: delay.toFixed(3) });
    }, delay * 1000);
  });
};

// ✅ Create promises
const promise1 = createPromise(1);
const promise2 = createPromise(2);
const promise3 = createPromise(3);

// ✅ Handle all promises using Promise.all()
Promise.all([promise1, promise2, promise3]).then((results) => {
  // Remove loading row
  document.getElementById('loading').remove();

  // ✅ Get table body
  const output = document.getElementById('output');

  let totalTime = 0;

  // ✅ Populate table with promise results
  results.forEach((result) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>Promise ${result.index}</td>
      <td>${result.time}</td>
    `;
    output.appendChild(row);

    // ✅ Calculate total time (max of all promises)
    totalTime = Math.max(totalTime, parseFloat(result.time));
  });

  // ✅ Add total row
  const totalRow = document.createElement('tr');
  totalRow.innerHTML = `
    <td><strong>Total</strong></td>
    <td><strong>${totalTime.toFixed(3)}</strong></td>
  `;
  output.appendChild(totalRow);
});
