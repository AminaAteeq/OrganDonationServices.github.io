// const  faqs=document.querySelectorAll(".faq");
// faqs.forEach(faq=>{
//     faq.addEventListener("click",()=>{
//         faq.classList.toggle("active");
//     })faq.forEach(subAcco => { subAcco.classList.remove('active') });
// })

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq =>{
    faq.addEventListener("click",()=>{
        if(faq.classList.toggle('active'))
        {
            faqs.forEach(subAcco => { subAcco.classList.remove('active') });
            faq.classList.toggle('active');
        }
        // faq.classList.toggle('active');
        else
        {
            faqs.forEach(subAcco => { subAcco.classList.remove('active') });
        }
    })
})