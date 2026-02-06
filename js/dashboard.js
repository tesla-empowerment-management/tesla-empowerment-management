// Dynamic Balance Animation
const balanceEl = document.getElementById('balance');
let balance = 612450.23;

function updateBalance(){
  const change = (Math.random() - 0.5) * 2000;
  balance = Math.max(50000, balance + change);
  balanceEl.innerText = '₿ ' + balance.toFixed(2);
}
setInterval(updateBalance, 2000);

// Live Testimonials
const testimonials = [
  "Amazing platform! Empowered me financially.",
  "I love how seamless the verification is.",
  "Tesla E.M changed the way I view digital assets.",
  "Fast and trustworthy WTD card process.",
  "Highly recommend this platform to anyone seeking financial empowerment.",
  "Professional support and smooth registration."
];

const container = document.getElementById('testimonial-container');
let shown = [];

function showTestimonial(){
  if(shown.length === testimonials.length) shown = [];
  let remaining = testimonials.filter(t => !shown.includes(t));
  let t = remaining[Math.floor(Math.random() * remaining.length)];
  shown.push(t);
  container.innerText = t;
}
setInterval(showTestimonial, 4000);
showTestimonial();
