// Data for cards
const cryptoBloggers = [
    {
      image: "images/jesusavgn.jpg",
      nickname: "JesusAVGN",
      about: "be part of CryptoSpace 600432/1000000",
      current_token_buyers: "600432/1000000",
    },
    {
      image: "images/evelone.jpg",
      nickname: "Evelone192",
      about: "be a part of smthing special 253029/500000",
      current_token_buyers: "253029/500000",
    },
    {
      image: "images/bratishkin.jpg",
      nickname: "bratishkinOff",
      about: "making Futur with us 320021/750000",
      current_token_buyers: "320021/750000",
    },
  ];
  
  // Function to create cards
  function createCryptoCards() {
    const container = document.querySelector(".card-container");
  
    cryptoBloggers.forEach((blogger) => {
      // Create card elements
      const card = document.createElement("div");
      card.className = "crypto-card";
  
      const image = document.createElement("img");
      image.src = blogger.image;
      image.alt = blogger.nickname;
  
      const nickname = document.createElement("h3");
      nickname.textContent = blogger.nickname;
  
      const about = document.createElement("p");
      about.textContent = blogger.about;
  
      const progressContainer = document.createElement("div");
      progressContainer.className = "progress-bar-container";
  
      const progressBar = document.createElement("div");
      progressBar.className = "progress-bar";
  
      // Calculate progress percentage
      const [current, total] = blogger.current_token_buyers
        .split("/")
        .map(Number);
      progressBar.style.width = `${(current / total) * 100}%`;
  
      progressContainer.appendChild(progressBar);
  
      const button = document.createElement("button");
      button.textContent = "Learn More";
  
      // Append elements to card
      card.appendChild(image);
      card.appendChild(nickname);
      card.appendChild(about);
      card.appendChild(progressContainer);
      card.appendChild(button);
  
      // Append card to container
      container.appendChild(card);
    });
  }
  
  // Initialize cards on page load
  document.addEventListener("DOMContentLoaded", createCryptoCards);
  

  let lastScrollY = window.scrollY; // Track the last scroll position
  const nav = document.querySelector('nav');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > lastScrollY) {
      // Scrolling down
      nav.classList.add('hidden');
    } else {
      // Scrolling up
      nav.classList.remove('hidden');
    }
    lastScrollY = window.scrollY; // Update the last scroll position
  });
  

// Function to fetch crypto prices and update the UI
async function fetchCryptoPrices() {
    try {
        const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd');
        const data = await response.json();

        // Update Bitcoin price
        document.getElementById('first_btc-price').innerText = `$${data.bitcoin.usd}`;

        // Update Ethereum price
        document.getElementById('first_eth-price').innerText = `$${data.ethereum.usd}`;
    } catch (error) {
        console.error('Error fetching prices:', error);
    }
}

fetchCryptoPrices();


function buyThing(){
  window.location.href = 'token.html';
}

function registerField(){
  window.location.href = 'app.html';
}