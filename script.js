const WA="6285150933867";
const WA_BASE="halo kakak aku mau pesen dong.....";
const data={
 "Rose Cloud":{price:149000,notes:"Rose · Peony · Vanilla",img:"https://images.pexels.com/photos/15271715/pexels-photo-15271715.jpeg?auto=compress&cs=tinysrgb&w=900"},
 "Lavender Muse":{price:159000,notes:"Lavender · Jasmine · Musk",img:"https://images.pexels.com/photos/19644207/pexels-photo-19644207.jpeg?auto=compress&cs=tinysrgb&w=900"},
 "Vanilla Kiss":{price:169000,notes:"Vanilla · Amber · Tonka",img:"https://images.pexels.com/photos/9957576/pexels-photo-9957576.jpeg?auto=compress&cs=tinysrgb&w=900"},
 "Muse Noir":{price:179000,notes:"Sandalwood · Musk · Bergamot",img:"https://images.pexels.com/photos/4938275/pexels-photo-4938275.jpeg?auto=compress&cs=tinysrgb&w=900"}
};
let cart=JSON.parse(localStorage.getItem("carfumeCart")||"[]");
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
const money=n=>new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR",maximumFractionDigits:0}).format(n);
function save(){localStorage.setItem("carfumeCart",JSON.stringify(cart))}
function toast(t){let x=$("#toast");x.textContent=t;x.classList.add("show");clearTimeout(window.tt);window.tt=setTimeout(()=>x.classList.remove("show"),1700)}
function render(){
 $("#cartCount").textContent=cart.reduce((s,x)=>s+x.qty,0);
 const box=$("#cartItems");
 if(!cart.length) box.innerHTML='<p class="empty">Keranjang masih kosong ♡</p>';
 else box.innerHTML=cart.map((x,i)=>`<div class="cart-row"><div><h4>${x.name}</h4><p>${money(x.price)} × ${x.qty}</p></div><button class="remove" data-i="${i}">Hapus</button></div>`).join("");
 const total=cart.reduce((s,x)=>s+x.price*x.qty,0);$("#total").textContent=money(total);
 $$(".remove").forEach(b=>b.onclick=()=>{cart.splice(+b.dataset.i,1);save();render()});
}
function add(name,price){let f=cart.find(x=>x.name===name);f?f.qty++:cart.push({name,price,qty:1});save();render();toast(`${name} masuk ke bag ♡`)}
function openCart(){ $("#cart").classList.add("open");$("#overlay").classList.add("show") }
function closeCart(){ $("#cart").classList.remove("open");$("#overlay").classList.remove("show") }
$("#cartBtn").onclick=openCart;$("#closeCart").onclick=closeCart;$("#overlay").onclick=closeCart;
$("#menuBtn").onclick=()=>$("#mobileNav").classList.toggle("open");
$$(".mobile-nav a").forEach(a=>a.onclick=()=>$("#mobileNav").classList.remove("open"));
$$(".add").forEach(b=>b.onclick=()=>add(b.dataset.name,+b.dataset.price));

$("#searchBtn").onclick=()=>{$("#searchbar").classList.toggle("open");if($("#searchbar").classList.contains("open"))$("#searchInput").focus()};
$("#clearSearch").onclick=()=>{$("#searchInput").value="";filter()};
let active="all";
function filter(){
 let q=$("#searchInput").value.toLowerCase().trim(),count=0;
 $$(".product").forEach(c=>{let ok=(active==="all"||c.dataset.category.includes(active))&&(!q||c.dataset.name.includes(q)||c.dataset.category.includes(q));c.classList.toggle("hidden",!ok);if(ok)count++});
 $("#noResult").style.display=count?"none":"block";
}
$("#searchInput").oninput=filter;
$$(".filter").forEach(b=>b.onclick=()=>{$$(".filter").forEach(x=>x.classList.remove("active"));b.classList.add("active");active=b.dataset.filter;filter()});
$("#sort").onchange=e=>{let arr=$$(".product"),grid=$("#products");arr.sort((a,b)=>e.target.value==="low"?a.dataset.price-b.dataset.price:e.target.value==="high"?b.dataset.price-a.dataset.price:0);arr.forEach(x=>grid.appendChild(x))};

let quickName="";
$$(".quick").forEach(b=>b.onclick=()=>{
 quickName=b.dataset.name;let p=data[quickName];
 $("#modalImg").src=p.img;$("#modalImg").alt=`Foto ${quickName}`;$("#modalName").textContent=quickName;$("#modalNotes").textContent=p.notes;$("#modalPrice").textContent=money(p.price);$("#modal").classList.add("show")
});
$("#closeModal").onclick=()=>$("#modal").classList.remove("show");
$("#modal").onclick=e=>{if(e.target===e.currentTarget)e.currentTarget.classList.remove("show")};
$("#modalAdd").onclick=()=>{add(quickName,data[quickName].price);$("#modal").classList.remove("show")};

$("#checkout").onclick=()=>{
 if(!cart.length){toast("Bag kamu masih kosong ♡");return}
 let msg=WA_BASE+"\n\n"+cart.map(x=>`• ${x.name} x${x.qty} — ${money(x.price*x.qty)}`).join("\n");
 msg+=`\n\nTotal: ${money(cart.reduce((s,x)=>s+x.price*x.qty,0))}`;
 window.open(`https://wa.me/${WA}?text=${encodeURIComponent(msg)}`,"_blank");
};
render();
