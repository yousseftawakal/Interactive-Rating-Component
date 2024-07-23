window.onload = () => {
  submit.addEventListener("click", () => {
    if (document.querySelector('input[name="rate"]:checked')) {
      let rate = document.querySelector('input[name="rate"]:checked').id;

      document.body.innerHTML = `
        <main class="card thx">
        <img class="thx-img" src="images/illustration-thank-you.svg" alt="" />
        <p class="thx-msg">You selected ${rate} out of 5</p>
        <div>
        <h1>Thank you!</h1>
        <p>
        We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!
        </p>
        </div>
        </main>
        `;
    }
  });
};
