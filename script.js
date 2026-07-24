const email="gusto6280@gmail.com";
function compose(pkg=""){
  const subject=pkg?`Quote request: ${pkg}`:"Project enquiry from Gusto AI Studio website";
  const body=pkg?`Hi Gusto AI Studio,

I'd like a quote for the ${pkg} package.

My business:
What I need:
Timeline:
Budget range:

Thanks!`:`Hi Gusto AI Studio,

I'd like to discuss a project.

My business:
What I need:
Timeline:
Budget range:

Thanks!`;
  return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
document.querySelectorAll(".gmail").forEach(a=>{a.href=compose(a.dataset.package||"");a.target="_blank";a.rel="noopener noreferrer"});
document.getElementById("copy").addEventListener("click",async()=>{
  const s=document.getElementById("status");
  try{await navigator.clipboard.writeText(email);s.textContent=`Copied: ${email}`}catch{s.textContent=`Email: ${email}`}
});
