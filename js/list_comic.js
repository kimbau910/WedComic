const comic = [
    {
      comic_link:'/html/details.html',
      img:'/images/354d658b-2afe-4d2d-aba6-bc6e29a53a5c.webp',
      name:'K-On Shuffle',
      chap:'Chapter 1',
      time_chapter:'13h giờ trước'
    },
    {
      comic_link:'/html/details.html',
      img:'/images/354d658b-2afe-4d2d-aba6-bc6e29a53a5c.webp',
      name:'K-On Shuffle',
      chap:'Chapter 1',
      time_chapter:'13h giờ trước'
    }
    ,
    {
      comic_link:'/html/details.html',
      img:'/images/354d658b-2afe-4d2d-aba6-bc6e29a53a5c.webp',
      name:'K-On Shuffle',
      chap:'Chapter 1',
      time_chapter:'13h giờ trước'
    }
    ,
    {
      comic_link:'/html/details.html',
      img:'/images/354d658b-2afe-4d2d-aba6-bc6e29a53a5c.webp',
      name:'K-On Shuffle',
      chap:'Chapter 1',
      time_chapter:'13h giờ trước'
    },
    {
        comic_link:'/html/details.html',
        img:'/images/354d658b-2afe-4d2d-aba6-bc6e29a53a5c.webp',
        name:'K-On Shuffle',
        chap:'Chapter 1',
        time_chapter:'13h giờ trước'
      },
      {
        comic_link:'/html/details.html',
        img:'/images/354d658b-2afe-4d2d-aba6-bc6e29a53a5c.webp',
        name:'K-On Shuffle',
        chap:'Chapter 1',
        time_chapter:'13h giờ trước'
      }
      ,
      {
        comic_link:'/html/details.html',
        img:'/images/354d658b-2afe-4d2d-aba6-bc6e29a53a5c.webp',
        name:'K-On Shuffle',
        chap:'Chapter 1',
        time_chapter:'13h giờ trước'
      }
      ,
      {
        comic_link:'/html/details.html',
        img:'/images/354d658b-2afe-4d2d-aba6-bc6e29a53a5c.webp',
        name:'K-On Shuffle',
        chap:'Chapter 1',
        time_chapter:'13h giờ trước'
      },
      {
        comic_link:'/html/details.html',
        img:'/images/354d658b-2afe-4d2d-aba6-bc6e29a53a5c.webp',
        name:'K-On Shuffle',
        chap:'Chapter 1',
        time_chapter:'13h giờ trước'
      },
      {
        comic_link:'/html/details.html',
        img:'/images/354d658b-2afe-4d2d-aba6-bc6e29a53a5c.webp',
        name:'K-On Shuffle',
        chap:'Chapter 1',
        time_chapter:'13h giờ trước'
      }
      ,
      {
        comic_link:'/html/details.html',
        img:'/images/354d658b-2afe-4d2d-aba6-bc6e29a53a5c.webp',
        name:'K-On Shuffle',
        chap:'Chapter 1',
        time_chapter:'13h giờ trước'
      }
      ,
      {
        comic_link:'/html/details.html',
        img:'/images/354d658b-2afe-4d2d-aba6-bc6e29a53a5c.webp',
        name:'K-On Shuffle',
        chap:'Chapter 1',
        time_chapter:'13h giờ trước'
      },
      {
        comic_link:'/html/details.html',
        img:'/images/354d658b-2afe-4d2d-aba6-bc6e29a53a5c.webp',
        name:'K-On Shuffle',
        chap:'Chapter 1',
        time_chapter:'13h giờ trước'
      },
      {
        comic_link:'/html/details.html',
        img:'/images/354d658b-2afe-4d2d-aba6-bc6e29a53a5c.webp',
        name:'K-On Shuffle',
        chap:'Chapter 1',
        time_chapter:'13h giờ trước'
      }
      ,
      {
        comic_link:'/html/details.html',
        img:'/images/354d658b-2afe-4d2d-aba6-bc6e29a53a5c.webp',
        name:'K-On Shuffle',
        chap:'Chapter 1',
        time_chapter:'13h giờ trước'
      }
      ,
      {
        comic_link:'/html/details.html',
        img:'/images/354d658b-2afe-4d2d-aba6-bc6e29a53a5c.webp',
        name:'K-On Shuffle',
        chap:'Chapter 1',
        time_chapter:'13h giờ trước'
      },
    
  ];

  const rowcard = document.querySelector('.rows_cards')
 
 comic.forEach(function(comic , index){
    const card = document.createElement("div");
  card.className = "cards";
  card.innerHTML = `  
        <a href="${comic.comic_link}"> <img src="${comic.img}" alt=""></a>
        <div class="title_cards">
        <a href="${comic.comic_link}"><p>${comic.name}</p></a>
          <div class="btn_card">
            <button id="btn">${comic.chap}</button>
            <div class="time_chapter">${comic.time_chapter}</div>
          </div>
        </div>
        
        `
        var mediaQuery = window.matchMedia('(max-width: 600px)');

        // Định nghĩa hàm xử lý khi trạng thái của truy vấn phương tiện thay đổi
        function handleMediaQueryChange(event) {
          if (event.matches) {
            // Màn hình điện thoại: index % 8
            if (index % 8 === 0) {
              // Tạo hàng mới sau mỗi 2 sản phẩm
              const row = document.createElement("div");
              row.className = "rowcards";
              rowcard.appendChild(row);
            }
        
            const currentRow = rowcard.lastChild; // Lấy hàng hiện tại để thêm sản phẩm vào
            currentRow.appendChild(card); // Thêm sản phẩm vào hàng hiện tại
          } else {
            // Màn hình máy tính hoặc tablet: index % 4
            if (index % 4 === 0) {
              // Tạo hàng mới sau mỗi 4 sản phẩm
              const row = document.createElement("div");
              row.className = "rowcards";
              rowcard.appendChild(row);
            }
        
            const currentRow = rowcard.lastChild; // Lấy hàng hiện tại để thêm sản phẩm vào
            currentRow.appendChild(card); // Thêm sản phẩm vào hàng hiện tại
          }
        }
        
        // Gọi hàm xử lý ban đầu
        handleMediaQueryChange(mediaQuery);
        
        // Gắn sự kiện change để theo dõi sự thay đổi của truy vấn phương tiện
        mediaQuery.addEventListener('change', handleMediaQueryChange);
    });
   
  

  


