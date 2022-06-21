$(function () {

  // all text data
  let textData = [
    {
      name: '婕子',
      text: '你說藍色是你最愛的顏色♫獨一無二的字母蛋糕，獻給喜歡美麗事物的妳❤️Dora生日快樂!!!有妳才會有今天的我☺謝謝一切❤️事事順心',
      bonus: true,
    },
    {
      name: '佩君',
      text: 'Dora生日快樂~謝謝朵拉帶著大家往前，要做跟別人不一樣的事很難，但能讓我們體會往前最真實的意義，我們會更好!',
      bonus: false,
    },
    {
      name: '亭依',
      text: 'Dora~這段期間謝謝妳的照顧，期待之後繼續在行銷中心玩出新花樣!祝生日快樂!天天開心!!Happy Birthday!!',
      bonus: false,
    },
    {
      name: '楊璿',
      text: '謝謝朵拉對行銷中心每個人的照顧，支持我們不斷突破嘗試，一起創造更多不平凡！祝 生日快樂！健康美麗^^',
      bonus: false,
    },
    {
      name: 'Molly',
      text: '一起度過了許多個生日，今年又一起過了生日，謝謝妳總是默默的關心我們，祝福妳天天開心，祝我們業績長紅！！朵拉～生日快樂！',
      bonus: false,
    },
    {
      name: '凱晴',
      text: '剛加入行銷幾個月的我，心裡卻有著大大的歸屬感，謝謝朵拉創造一個輕鬆愉快又充滿即戰力的家，有些時候你是大家的超強後盾，更多時候你是帶領我們往前衝的icon，最多時候你是每一個人的大寶貝❤️❤️❤️，祝福親愛的朵拉生日快樂～（嗯嘛）',
      bonus: false,
    },
    {
      name: 'JO',
      text: '生日快樂，願世界上一切的歡樂都融和在你的生活之中',
      bonus: true,
    },
    {
      name: '小琪',
      text: '☆ °。★ ° ☆ 生 日 快 樂 ☆ ° ★。° ☆',
      bonus: false,
    },
    {
      name: '小兔',
      text: 'お誕生日おめでとう。楽しく毎日を過ごせるように',
      bonus: false,
    },
    {
      name: '小薛',
      text: 'Happy Birthday! May you be happy forever',
      bonus: false,
    },
    {
      name: 'Joyce',
      text: '朵拉~生日快樂~',
      bonus: false,
    },
    {
      name: '涵玉',
      text: '朵拉~生日快樂~',
      bonus: false,
    },
    {
      name: '偉倫',
      text: '朵拉~生日快樂~',
      bonus: false,
    },
    {
      name: 'Golden',
      text: '朵拉~生日快樂~',
      bonus: false,
    },
    {
      name: 'Zora',
      text: '朵拉~生日快樂~',
      bonus: false,
    },
    {
      name: '阿標',
      text: '朵拉~生日快樂~',
      bonus: false,
    },
    {
      name: 'summer',
      text: '朵拉~謝謝你總是在我有困惑時，拉我一把，你就是充滿智慧且獨一無二的存在，祝福你享受無限可能的人生,天天體驗生活的美好~生日快樂，今日快樂，天天快樂!!!',
      bonus: true,
    },
    {
      name: 'candy',
      text: '朵拉~生日快樂~',
      bonus: false,
    },
    {
      name: '小R',
      text: '朵拉~生日快樂~',
      bonus: false,
    },
    {
      name: '冠儀',
      text: '生日快樂!!!',
      bonus: false,
    },
    {
      name: 'Jessica',
      text: '親愛的朵拉，在這另人又愛又恨的11月，感謝你帶著我們一起前進突破難關，你未來包生子的路上，不論有多困難，行銷中心夥伴們心也與你同在，有你真好，祝福你每天開心、幸福❤️生日快樂～～～',
      bonus: false,
    },
    {
      name: '奶茶',
      text: '一祝回春逆齡，二祝回瘦輕盈，三祝回本靠自己，18歲生日快樂，每天都要活出妳最美的樣子',
      bonus: true,
    },
    {
      name: '麥麥',
      text: '謝謝你們的到來，讓這條長大遷徙的路程，多了許多可溫暖的身影。朵拉，生日快樂，願世界所有險惡都能轉換溫柔相待妳。',
      bonus: false,
    },
    {
      name: '品浩',
      text: '我寧願所有痛苦都留在心裡，也不願忘記你的眼睛，給我再去相信的勇氣，越過謊言去擁抱你，每當我找不到存在的意義，每當我迷失在黑夜裡，夜空中最亮的星，請照亮我前行',
      bonus: true,
    },
    {
      name: '小猴',
      text: '恭祝你福壽與天齊，登登登登登生辰快~樂~登登登有今日，登登登有今召，恭~喜~你~恭~~喜~~你',
      bonus: false,
    },
    {
      name: '老大',
      text: '生日快樂',
      bonus: true,
    },
    {
      name: '欣潔',
      text: '每一天都為妳心跳❤️每一刻都被妳感動❤️看著充滿笑容的妳❤️讓我們覺得行銷中心有妳真好❤️最美的朵拉~~生日快樂',
      bonus: false,
    },
    {
      name: '小猴',
      text: '朵拉您好，2019年您賜予的麝香葡萄好好吃，感謝至今，祝您生日快樂，YA！',
      bonus: false,
    },
    {
      name: 'Kite',
      text: '吃飯大魚大肉，唱歌有鮮肉伴奏，日進斗金不夠，敢與南山比瘦！朵拉生日快樂！',
      bonus: false,
    },
    {
      name: '阿力',
      text: 'Dora，祝福妳生日快樂！分享最近很喜歡的一句台詞，在面對挑戰及困境，卻令我振奮人心。「I know what it feels like to lose. And now you do, too.」--《后翼棄兵》',
      bonus: false,
    },
    {
      name: '阿光',
      text: '老闆永遠這樣美麗，生意越做越大❤️❤️',
      bonus: false,
    },
    {
      name: '卉',
      text: '祝福朵拉，帶領大家業績年年衝翻天，心花朵朵開 天天笑開懷，生日快樂\(-ㅂ-)/ ❤️❤️❤️',
      bonus: false,
    },
    {
      name: 'April',
      text: '生日快樂! ',
      bonus: false,
    },
    {
      name: 'vivian',
      text: '生日快樂Dora~祝願望通通成真、業績長紅',
      bonus: false,
    },
    {
      name: 'Ina',
      text: '親愛美麗的朵拉，在這美好的季節裡，祝福妳生日快樂。祝願一切健康，幸福 : D"  ',
      bonus: false,
    },
    {
      name: '世界口愛ㄉKim',
      text: '安安Dora喵! 生日快樂喵喵! 最近1111忙忙真是辛苦Dora喵ㄌ!也謝謝尼對優惠夥伴們ㄉ包容了(應該最想掐爆窩)，Anyway,工作上一起努力成長GOGO, 阿生龍鳳胎也不要漏氣嘿fighting(燦笑)!!!祝福Dora喵健康美麗 (健康最重要惹) (⁎⁍̴̛ᴗ⁍̴̛⁎)',
      bonus: true,
    },
    {
      name: '建文(萬華余文樂)',
      text: '朵拉大大 祝您福如東海壽比南山五福臨門福星高照福祿雙全萬年富貴，最重要的是 開開心心 一生幸福啦~~',
      bonus: false,
    },
    {
      name: '來打工的Tim',
      text: '你在忙嗎？沒事，我只想用一種屬於你的方式祝你生日快樂!希望當你收到這通簡訊時嘴巴是微笑的讓你身邊的人都知道你很幸福。',
      bonus: false,
    },
    {
      name: '福委第一把交椅欣穎',
      text: 'Dear 朵拉~聽說今天是個很重要的日子❤咦？是您的生日壓~祝妳生日快樂~~祝妳生日快樂~~祝妳生日快樂~~嘿嘿~~ 祝永遠青春美麗',
      bonus: false,
    },
    {
      name: '代言脆笛酥的Andy',
      text: '祝Dora 福如東海 壽比南山~',
      bonus: false,
    },
    {
      name: '浪漫雙魚女子詩萍',
      text: 'Dear 朵拉水水 感謝平日的照顧，祝生日大快樂',
      bonus: false,
    },
    {
      name: '米娜+小棉',
      text: '如果你就是一切，如果我們就是絕對，行銷中心因為有你而完美，親愛的朵拉，希望你每天都開心，生日快樂',
      bonus: true,
    },
    {
      name: '阿威',
      text: '心花朵朵開．業績拉長紅，生日大快樂',
      bonus: false,
    },
    {
      name: 'mac',
      text: '朵拉～～生日塊樂！！！',
      bonus: false,
    },
    {
      name: '曼尼',
      text: '生日快樂 早生櫃子~啦啦啦',
      bonus: false,
    },
    {
      name: '玉君',
      text: '生日快樂 HBD!!',
      bonus: false,
    },
    {
      name: '聖雯',
      text: '祝 福如東海 壽比南山',
      bonus: false,
    },
    {
      name: 'Oli',
      text: '明年的今日，想吃滿月蛋糕＋豪華紅蟳雞腿油飯，祝妳今晚一舉得龍鳳',
      bonus: true,
    },
    {
      name: '巴特',
      text: '朵拉18歲生日快樂~明年記得帶小孩來玩',
      bonus: false,
    },
    {
      name: 'Kate',
      text: '生日快樂',
      bonus: false,
    },
    {
      name: 'Lesley',
      text: '生日快樂 業績長紅',
      bonus: false,
    },
    {
      name: 'Yuki',
      text: '祝生日快樂~平安健康(⁎⁍̴̛ᴗ⁍̴̛⁎)',
      bonus: false,
    },
    {
      name: '小小兔',
      text: 'Happy Birthday To a Pretty Boss! May you be happy forever.',
      bonus: false,
    },
    {
      name: '音音',
      text: '生日快樂ＨＢＤ',
      bonus: false,
    },
    {
      name: 'Cherry',
      text: '感謝你的幫忙跟照顧，美麗又有智慧的你，一路帶領我們破關打魔王，雖然中間遇到了很多艱難的任務，但關關難過關關過，希望後續我們可以一路順利!業績長紅!生日快樂!預祝趕快生一對龍鳳胎',
      bonus: true,
    },
    {
      name: '小可愛 (Debbie)',
      text: '嗨～朵拉，希望你不只生日快樂，天天都健康踏實過著自己喜歡的生活。Spoil yourself everyday !',
      bonus: false,
    },
    {
      name: '公關模特之星Runa',
      text: '朵拉的世界沒有天花板，凡事無極限!!! 賀喜朵拉 ',
      bonus: false,
    },
    {
      name: '嘉義林心如他妹"林昕儒"',
      text: '找不到比朵拉更才貌雙全的人了。狂賀嘉義之光aka年輕貌美的朵拉生日快樂',
      bonus: false,
    },
    {
      name: 'Teresa',
      text: '朵拉生日快樂  天天開心18歲   又美又殺又俐落',
      bonus: false,
    },
    {
      name: '行銷古惑仔nancy哥',
      text: '願朵拉更加自由無慮、美麗繼續，生日快樂',
      bonus: false,
    },
    {
      name: '小翔',
      text: '生日快樂',
      bonus: false,
    },
    {
      name: 'Mavis',
      text: 'Wishing you happiness today, tomorrow, and always! ',
      bonus: false,
    },
  ]

  console.log(textData.length);

  let textLength = $(window).width() > 768 ? 85 : 40;
  let article = [
    '平時在街上，看到有人帶上自己家的一對雙胞胎一定舉得特別羨慕吧？如果別人駕駛一對龍鳳胎的話，那就更將讓人羨慕嫉妒恨了。雖然說生男生女是看緣分的，但是同時誕生兩個寶寶，而且還一次性達成了而兒女雙全的願望，就算是受苦也有種事半功倍的感覺，讓人十分的小木。龍鳳胎出生的幾率小之又小，但是不是不能不努力，通過一些小秘訣達成自己的願望的。',
    '有兩類家庭非常希望擁有龍鳳胎，第一類是那種不滿足生第二胎的條件，但又想有兩個孩子的；第二類是經濟條件很好，家長希望孩子從誕生之初就有一個伴的。由於生龍鳳胎的概率很低，因此想要生出龍鳳胎，就必須採取一些輔助措施。當然，所有的措施都旨在增加女性懷上龍鳳胎的幾率，在效果上並不能保證一定懷上龍鳳胎。',
    '相信每一位備孕的女子都希望自己能一次懷上兩個，如果是龍鳳胎，兒女雙全，更是幸福開心!為此，不少備孕的小夫妻致力於尋找生龍鳳胎的方法秘訣，以此達到兒女雙全!那麼，究竟如何才能懷上龍鳳胎呢?',
    '今天小編跟大家說一下生龍鳳胎的秘訣，說是秘訣，其實也是讓大家做參考，希望大家理性面對這件事，抱著平和的心態去做嘗試。首先小編說一下龍鳳胎其實就是性別不同的雙胞胎，即雙卵雙胎，只有這樣的情況才有可能出現龍鳳胎，雙卵雙胎中有50 % 的幾率成為龍鳳胎；那生龍鳳胎有什麼秘訣嗎？'
  ]
  $('.article-card p').each(function (index) {
    let text = article[index].slice(0, textLength) + '... <span>繼續閱讀</span>'
    $(this).html(text);
  })
  // [右邊GoTop]--// 滾動出現
  function goTopShow() {
    var $windowTop = $(window).scrollTop();
    $windowTop >= 100 ? $('.gotop').addClass('show') : $('.gotop').removeClass('show');
  }
  // [右邊GoTop]--// gotop
  $('.gotop').on('click', function () {
    $('html,body').animate({ scrollTop: '0px' }, 300);
  });

  $(window).on('scroll', function () {
    goTopShow();
  }).scroll();

  // bannr swiper
  var interleaveOffset = 0.5;
  var swiperOptions = {
    loop: true,
    speed: 1000,
    grabCursor: true,
    watchSlidesProgress: true,
    mousewheelControl: true,
    keyboardControl: true,
    autoplay: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    on: {
      progress: function () {
        var swiper = this;
        for (var i = 0; i < swiper.slides.length; i++) {
          var slideProgress = swiper.slides[i].progress;
          var innerOffset = swiper.width * interleaveOffset;
          var innerTranslate = slideProgress * innerOffset;
          swiper.slides[i].querySelector(".slide-inner").style.transform =
            "translate3d(" + innerTranslate + "px, 0, 0)";
        }
      },
      touchStart: function () {
        var swiper = this;
        for (var i = 0; i < swiper.slides.length; i++) {
          swiper.slides[i].style.transition = "";
        }
      },
      setTransition: function (speed) {
        var swiper = this;
        for (var i = 0; i < swiper.slides.length; i++) {
          swiper.slides[i].style.transition = speed + "ms";
          swiper.slides[i].querySelector(".slide-inner").style.transition =
            speed + "ms";
        }
      }
    }
  };

  var bannerSwiper = new Swiper(".banner .swiper-container", swiperOptions);

  // recommend-us swiper 
  var recommendUsSwiper = new Swiper('.recommend-us .swiper-container', {
    slidesPerView: 4,
    spaceBetween: 20,
    autoplay: true,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      }
    }
  });


  let $chatroomInput = $('.chatroom-form input');
  // form submit 
  $('.chatroom-form').on('submit', function (e) {
    e.preventDefault();
    $chatroomInput.val('');
    $('.toast1').toast('show');
  })

  // toast init
  $('.toast').toast();
  $('.toast1').on('hide.bs.toast', () => $chatroomInput.removeClass('error'))
  $('.toast1').on('show.bs.toast', () => $chatroomInput.addClass('error'))

  let content = $('.chatroom-content');
  let ul = $('.chatroom-content__ul');
  let canAutoScroll = true;

  // control auto scroll
  content.on('mousedown', () => canAutoScroll = false)
  content.on('mouseup', () => canAutoScroll = true)
  content.on('mousewheel', () => $('.toast2').toast('show'))
  content.on('touchmove', () => $('.toast2').toast('show'))
  $('.toast2').on('show.bs.toast', () => canAutoScroll = false)
  $('.toast2').on('hide.bs.toast', () => canAutoScroll = true)

  let count = textData.length;
  let ulLength = ul.find('li').length;
  let maxUlLength = 65;
  let timeout = 500;
  let bonusData = textData.filter((item) => {
    return item.bonus === true;
  })

  // text data random sort
  textData.sort(function () {
    return (0.5 - Math.random());
  });

  // add list to chatroom-content__ul
  function addList() {
    // this item
    let thisItem = textData[textData.length - count];
    let color = `hsl(${getRandomInt(361)},80%,40%)`;
    let li = $(`<li><span class="name" style="color:${color}">${thisItem.name}</span > : <span class="message">${thisItem.text}</span></li > `);
    li.find('.name').css('color', color)
    ul.append(li)
    ulLength = ul.find('li').length;
    ulLength >= maxUlLength && ul.find('li:eq(0)').remove();
    canAutoScroll && content.animate({ scrollTop: content.get(0).scrollHeight }, 500)
    // reset 
    if (count > 1) {
      count--
    } else {
      count = textData.length;
      textData.sort(function () {
        return (0.5 - Math.random());
      });
    }
    timeout = getRandomInt(1700) + 1500;
    setTimeout(() => {
      addList()
    }, timeout);
  }
  addList();

  // bonus heart check;
  setInterval(() => {
    !document.hidden && checkAddBonus();
  }, 6000);

  function checkAddBonus() {
    let isAdd = getRandomInt(2) === 1 ? true : false;
    isAdd && addBonus();
  }

  function addBonus() {
    let randomBonus = getRandomInt(bonusData.length)
    let haertCount = getRandomInt(10) + 10;
    let color = `hsl(${getRandomInt(361)},80%,40%)`;
    let li = $(`<li class="bonus"><span class="name" style="color:${color}">${bonusData[randomBonus].name}</span>送來了${haertCount}顆愛心<span><img src="img/heart1.svg"></span></li>`);
    ul.append(li);
    canAutoScroll && content.animate({ scrollTop: content.get(0).scrollHeight }, 500)
    for (let i = 0; i < haertCount; i++) {
      let heart = $('<span class="heart"></span>');
      $('.heart-contain').append(heart);
    }
    heartAniBonus();
  }

  function heartAniBonus() {
    let hearts = $('.heart-contain').find('.heart');
    hearts.each(function (index) {
      let $this = $(this);
      let disY = -vh * ((getRandomInt(3) / 10) + 0.5);
      let dirX = getRandomInt(2) === 1 ? 1 : -1;
      gsap.to($this, {
        duration: 2, opacity: 0, y: disY, delay: index * 0.1, onComplete: function () {
          $this.remove();
        }
      });
      gsap.to($this, { duration: 0.7, x: dirX * 30, repeat: 2, yoyo: true, ease: "none", delay: index * 0.1, })
    })
  }


  // like click & heart fly
  $('.like-btn').on('click', function (e) {
    e.preventDefault();
    let like = $('.like')
    gsap.fromTo(like, { scale: 0.4 }, { duration: 0.8, scale: 1, ease: "elastic.out(1, 0.3)" })
    let heart = $('<span class="heart"></span>');
    $(this).append(heart);
    heartAni(heart);
  })

  let vh = $(window).height();

  function heartAni(heart) {
    let disY = -vh * ((getRandomInt(3) / 10) + 0.4);
    let dirX = getRandomInt(2) === 1 ? 1 : -1;
    gsap.to(heart, {
      duration: 2, opacity: 0, y: disY, onComplete: function () {
        heart.remove();
      }
    });
    gsap.to(heart, { duration: 0.7, x: dirX * 20, repeat: 2, yoyo: true, ease: "none" })
  }

  // random number < max
  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

});
