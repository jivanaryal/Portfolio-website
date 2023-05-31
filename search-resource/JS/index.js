
const data = [
    {
        id: 1,
        img:"https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png",
        title: "Facebook",
        intro: "let's know each other",
 a:"https://www.facebook.com/aryal.jeevan.90/"
        
    },
    {
        id: 2,
         img:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png",
        title: "Instagram",
        intro: "let's know each other",
        a:"https://www.instagram.com/aryal366/"
    },
    {
        id: 3,
         img:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/1200px-Twitter-logo.svg.png",
        title: "Twitter",
        intro: "let's know each other",
        a:"https://twitter.com/jivan_aryal16"
    },
    {
        id: 4,
         img:"https://www.redditinc.com/assets/images/site/reddit-logo.png",
        title: "Reddit",
        intro: "let's know each other",
        a:"https://www.facebook.com/aryal.jeevan.90/"
        
    },
    {
        id: 5,
         img:"https://logos-world.net/wp-content/uploads/2020/06/Snapchat-Logo.jpg",
        title: "Snapchat",
        intro: "let's know each other",
        a:"https://www.facebook.com/aryal.jeevan.90/"
        
    },
    {
        id: 6,
         img:"https://logolook.net/wp-content/uploads/2021/06/Tiktok-Logo-2016.png",
        title: "Tiktok",
        intro: "let's know each other",
        a:"https://www.facebook.com/aryal.jeevan.90/"
        
    },
    {
        id: 7,
         img:"https://cdn-icons-png.flaticon.com/512/174/174857.png",
        title: "Linkden",
        intro: "let's know each other",
        a:"https://www.linkedin.com/in/jivan-aryal/"
    },
    {
        id: 8,
         img:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/479px-WhatsApp.svg.png",
        title: "Whatsapp",
        intro: "let's know each other",
        a:"https://www.facebook.com/aryal.jeevan.90/"
        
    },
    {
        id: 9,
         img:"https://cdn-icons-png.flaticon.com/512/124/124016.png",
        title: "Viber",
        intro: "let's know each other",
        a:"https://www.facebook.com/aryal.jeevan.90/"
        
    },
    {
        id: 10,
         img:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/2048px-Telegram_logo.svg.png",
        title: "Telegram",
        intro: "let's know each other",
        a:"https://www.facebook.com/aryal.jeevan.90/"
        
    },
    {
        id: 11,
         img:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Skype_logo_%282019%E2%80%93present%29.svg/991px-Skype_logo_%282019%E2%80%93present%29.svg.png",
        title: "Skype",
        intro: "let's know each other",
        a:"https://www.facebook.com/aryal.jeevan.90/"
        
    },
    {
        id: 12,
         img:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/2560px-YouTube_full-color_icon_%282017%29.svg.png",
        title: "Youtube",
        intro: "let's know each other",
        a:"https://www.facebook.com/aryal.jeevan.90/"
        
       
    },
]


const boxContainer = document.querySelector("[data-user-box-container]");
const boxTemplate = document.querySelector("[data-user-box-template]");
const dataSearch = document.querySelector("[data-search]")

let users = []
 
   dataSearch.addEventListener("input", (e) => {
    const value = e.target.value.toLowerCase();
    users.forEach((user) => {
        const isVisible = user.title.toLowerCase().includes(value) || user.intro.toLowerCase().includes(value);
        user.element.classList.toggle("hide", !isVisible);
    })
})

 
users = data.map((user) => {
    const box = boxTemplate.content.cloneNode(true).children[0];
    const title = box.querySelector("[data-title]");
    const intro = box.querySelector("[data-intro]");
    const img = box.querySelector("[data-img]");
    const a = box.querySelector("[data-link]");
    title.textContent = user.title;
    intro.textContent = user.intro;
    img.src = user.img;
    a.href = user.a;
  
    boxContainer.append(box);
      return {
            title: user.title,
          intro: user.intro,
          img: user.img,
            element: box,
          };

})