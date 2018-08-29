function Common() {
  this.data = {
    news: [
      {date: "2018/09/26", contents: "WISS 2018 デモ発表; Style Guide", icon:"far fa-file-alt"},
      {date: "2018/03/07", contents: "IUI 2018 ポスター発表; Lyric Translation", icon:"far fa-file-alt"},
      {date: "2017/12/06", contents: "WISS 2017 口頭発表; Lyric Translation", icon:"far fa-file-alt"},
      {date: "2017/11/11", contents: "Rijowarts; リジョワーツと魔法のランタンの謎", icon:"far fa-lightbulb"},
      {date: "2017/06/17", contents: "第115回 SIGMUS ポスター発表; Lyric Translation", icon:"far fa-file-alt"},
      {date: "2017/06/10", contents: "SPAJAM 2017 予選; 準優勝", icon:"fas fa-award"},
      {date: "2017/05/23", contents: "人工知能学会 2017 口頭発表; Lyric Translation", icon:"far fa-file-alt"},
      {date: "2017/03/02", contents: "インタラクション 2017 インタラクティブ発表; Lyric Translation", icon:"far fa-file-alt"},
      {date: "2016/11/09", contents: "ACE 2016 Workshop 口頭発表; conteXinger", icon:"far fa-file-alt"},
      {date: "2016/07/30", contents: "第112回 音学シンポジウム ポスター発表; 音楽と小説の相関関係について", icon:"far fa-file-alt"},
      {date: "2016/04/01", contents: "お茶の水女子大学大学院 人間文化創成科学研究科 理学専攻 博士後期 入学", icon: "fas fa-school"},
      {date: "2015/05/16", contents: "Tokyo Hackadeics; 準優勝", icon:"fas fa-award"},
      {date: "2015/04/01", contents: "Yahoo! JAPAN 入社", icon: "far fa-building"},
      {date: "2015/03/31", contents: "お茶の水女子大学大学院 人間文化創成科学研究科 理学専攻 博士前期 卒業", icon: "fas fa-graduation-cap"},
      {date: "2015/03/06", contents: "インタラクション 2015 インタラクティブ発表; Rijowarts", icon:"far fa-file-alt"},
      {date: "2014/11/29", contents: "Open Hack U 2014; 優勝 & スマートフォン解放賞", icon:"fas fa-award"},
      {date: "2014/11/13", contents: "ACE 2014 口頭発表; iMake", icon:"far fa-file-alt"},
      {date: "2014/11/08", contents: "Rijowarts; Ochanomizu Wizarding Level Test", icon:"far fa-file-alt"},
      {date: "2014/03/07", contents: "AH 2014 デモ発表; iMake", icon:"far fa-file-alt"},
      {date: "2014/03/01", contents: "インタラクション 2014 プレミアム発表; iMake", icon:"fas fa-award"},
      {date: "2014/03/01", contents: "インタラクション 2014 インタラクティブ発表; iMake", icon:"far fa-file-alt"},
      {date: "2013/12/31", contents: "日本バーチャルリアリティ学会誌 2013 No.4 Vol.18; 学会参加報告書掲載", icon:"far fa-file-alt"},
      {date: "2013/09/12", contents: "Ubicomp 2013 デモ発表; conteXinger", icon:"far fa-file-alt"},
      {date: "2013/05/16", contents: "情報処理学会推奨 卒業論文認定; conteXinger", icon:"fas fa-award"},
      {date: "2013/05/16", contents: "第38回 SIGUBI 口頭発表; conteXinger", icon:"far fa-file-alt"},
      {date: "2013/05/11", contents: "第99回 SIGMUS ポスター発表; conteXinger", icon:"far fa-file-alt"},
      {date: "2013/04/01", contents: "お茶の水女子大学大学院 人間文化創成科学研究科 理学専攻 博士前期 入学", icon: "fas fa-school"},
      {date: "2013/03/31", contents: "お茶の水女子大学 理学部情報科学科 卒業", icon: "fas fa-graduation-cap"},
      {date: "2013/03/06", contents: "第75回 情報処理学会全国大会 口頭発表; conteXinger", icon:"far fa-file-alt"},
      {date: "2009/04/01", contents: "お茶の水女子大学 理学部情報科学科 入学", icon: "fas fa-school"},
    ],
    portfolio: [
      {
        id: 4,
        title: "Lyric Translation",
        text: "外国語の歌曲を日本語に訳詞するインタラクティブなWebアプリケーション。",
        abst: "音楽は世界中で作曲されており,インターネットが普及した現代では,外国語の歌曲を気軽に聞くことができるようになった.しかしながら,母国語ではない言語の歌詞を完全に理解することは難しい.そこで,外国語歌詞の日本語訳を出力するインタラクティブな訳詞システムを提案する.本システムは,ユーザが入力した譜面情報から仮の訳詞を自動生成し,好みに合わせて編集するためのユーザインタフェース上に仮訳詞付きの譜面を表示する.",
        icon: "public/img/icon_translation.png",
        img: "public/img/translation.png",
        alt: "Lyric Translation",
        video: "public/video/translation.mp4"
      },
      {
        id: 3,
        title: "iMake",
        text: "ユーザが任意に選択した画像から色や特徴を抽出し、アイメイクのデザインを作り出すシステム。生成したデザインは転写シールに印刷することで、現実世界で使用することが可能。",
        abst: "アイメイクには通常のメイク方法の他に，音符や蝶などのキャラクターやシンボルをモチーフにした派手なアイメイク，いわゆるアイメイクアートが存在する.しかしながら，アイメイクアートはもちろん，通常のメイクでさえ難しいと感じる女性が多いのが実情である.そこで，本稿では画像からアイメイクのデザインを作り出すシステム「iMake」を提案し，実装した.本システムは，ユーザが任意に選択した画像から色や特徴を抽出し，アイメイクのデザインに反映させ，更には転写シールに印刷することで，システム上で生成したデザインを現実世界で使用することが可能である.",
        icon: "public/img/icon_imake.png",
        img: "public/img/imake.png",
        alt: "iMake",
        video: "public/video/imake.mp4"
      },
      {
        id: 2,
        title: "Rijowarts",
        text: "徽音祭で展示しているインタラクティブなアトラクション施設。展示の他にもワークショップを行ったりしている。",
        abst: "お茶の水大学の文化祭にて2014年に初出展。当時は魔法の試験を体験できるインタラクティブな施設として、展示を行った。現在では謎解きとアトラクションを掛け合わせた新しい形で出展をしている。<br><p class='h5 mt-3'><a href='https://youtu.be/BYIDQ4ODOOA' target='_blank'><i class='fab fa-youtube'></i>YouTube</a></p>",
        icon: "public/img/icon_rijowarts.png",
        img: "public/img/rijowarts.png",
        alt: "Rijowarts",
        video: ""
      },
      {
        id: 1,
        title: "conteXinger",
        text: "ユーザーの状況（コンテクスト）を取得し、動的に音楽を生成するシステム。リアルタイムにコンテクストを歌として返すことで、日常をミュージカルのような舞台に仕立て上げる。",
        abst: "家事などの日常的な仕事は単調でつまらない作業,いわゆるルーティンワークになりがちである.また,今日では,音楽情報処理の技術が発達し,携帯プレーヤーで音楽を再生するだけでなく,ソフトウェアを利用することで歌詞とメロディをコンピュータに歌わせることも可能となった.そこで,本稿では位置情報や家電(掃除機,冷蔵庫,電子レンジ,食洗機など)に取り付けたセンサ及びネット(SNS,天気予報,web ニュースなど)から取得したユーザーの状況(コンテクスト:Context)に合わせた歌詞とメロディを自動的に作成しリアルタイムに VOCALOID に歌わせることで,生活に彩りを与えるシステムを提案し,その実装を行った.",
        icon: "public/img/icon_contexinger.png",
        img: "public/img/contexinger.png",
        alt: "conteXinger",
        video: "public/video/contexinger.mp4"
      },
    ],
    research: [
      {
        title: "Implementation of an Interactive System for the Translation of Lyrics",
        author: "Ayano Nishimura, Takayuki Itoh",
        conference: "IUI 2018",
        date: "Mar. 2018",
        href: "https://dl.acm.org/citation.cfm?id=3180317"
      },
      {
        title: "外国語の歌曲を訳詞するためのインターフェースの検討",
        author: "西村綾乃, 伊藤貴之",
        conference: "WISS 2017",
        date: "2017年12月",
        href: "http://www.wiss.org/WISS2017Proceedings/"
      },
      {
        title: "外国語の歌曲の自動訳詞システムに関する初期実装",
        author: "西村綾乃, 伊藤貴之",
        conference: "音学シンポジウム 2017",
        date: "2017年6月",
        href: "https://ipsj.ixsq.nii.ac.jp/ej/?action=pages_view_main&active_action=repository_view_main_item_detail&item_id=182218&item_no=1&page_id=13&block_id=8"
      },
      {
        title: "外国語の歌曲を自動訳詞するシステムのための課題と手法の検討",
        author: "西村綾乃, 伊藤貴之",
        conference: "JSAI 2017",
        date: "2017年5月",
        href: "https://www.ai-gakkai.or.jp/jsai2017/webprogram/2017/paper-432.html"
      },
      {
        title: "外国語の歌曲を自動訳詞するシステムのための翻訳手法の検討",
        author: "西村綾乃, 伊藤貴之",
        conference: "インタラクション2017",
        date: "2017年3月",
        href: "http://www.interaction-ipsj.org/proceedings/2017/data/pdf/2-408-78.pdf"
      },
      {
        title: "conteXinger: A Context-aware Song Generator to Enrich Daily Lives",
        author: "Ayano Nishimura and Itiro Siio",
        conference: "In Proceedings of the 13th International Conference on Advances in Computer Entertainment Technology (ACE2016)",
        date: "Nov. 2016",
        href: "http://dl.acm.org/citation.cfm?id=3014350&CFID=931670846&CFTOKEN=29006312"
      },
      {
        title: "Rijowarts: 技術関心を誘引するエンタテイメントシステムの開発と評価",
        author: "西村綾乃, 氏間可織, 安齊クレア, 甲藤仁美, 有本茜, 橋本菜摘",
        conference: "インタラクション2015",
        date: "2015年3月",
        href: "http://www.interaction-ipsj.org/proceedings/2015/data/bib/C37.html"
      },
      {
        title: "iMake: eye makeup design generator",
        author: "Ayano Nishimura and Itiro Siio",
        conference: "In Proceedings of the 11th Conference on Advances in Computer Entertainment Technology (ACE '14)",
        date: "Nov. 2014",
        href: "http://dl.acm.org/citation.cfm?id=2663823&CFID=931670846&CFTOKEN=29006312"
      },
      {
        title: "iMake: computer-aided eye makeup",
        author: "Ayano Nishimura and Itiro Siio",
        conference: "In Proceedings of the 5th Augmented Human International Conference (AH '14)",
        date: "Mar. 2014",
        href: "http://dl.acm.org/citation.cfm?id=2582051.2582107&coll=DL&dl=ACM&CFID=337492543&CFTOKEN=43175638"
      },
      {
        title: "iMake : 画像からアイメイクを生成するシステムの提案",
        author: "西村綾乃, 椎尾一郎",
        conference: "インタラクション2014",
        date: "2014年2月",
        href: "http://www.interaction-ipsj.org/proceedings/2014/data/bib/C2-6.html"
      },
      {
        title: "日本バーチャルリアリティ学会誌 2013 No.4 Vol.18",
        author: "西村綾乃",
        conference: "学会参加報告",
        date: "2013年12月",
        href: "https://vrsj.org/journal/backnumber/1-3/#18-4"
      },
      {
        title: "ConteXinger: a context-aware song generator",
        author: "Ayano Nishimura and Itiro Siio",
        conference: "In Proceedings of the 2013 ACM conference on Pervasive and ubiquitous computing adjunct publication (UbiComp '13 Adjunct)",
        date: "Sep. 2013",
        href: "http://dl.acm.org/citation.cfm?id=2494091.2494116&coll=DL&dl=ACM&CFID=337492543&CFTOKEN=43175638"
      },
      {
        title: "conteXinger : 日常のコンテクストを取り込み歌うVOCALOID",
        author: "西村綾乃, 椎尾一郎",
        conference: "ユビキタスコンピューティングシステム研究会 第38回研究発表会",
        date: "2013年5月",
        href: "https://ipsj.ixsq.nii.ac.jp/ej/?action=pages_view_main&active_action=repository_view_main_item_detail&item_id=92055&item_no=1&page_id=13&block_id=8"
      },
      {
        title: "conteXinger : 日常のコンテクストを歌いあげるVOCALOID",
        author: "西村綾乃, 椎尾一郎",
        conference: "音楽情報科学研究会 第99回研究発表会",
        date: "2013年5月",
        href: "https://ipsj.ixsq.nii.ac.jp/ej/?action=pages_view_main&active_action=repository_view_main_item_detail&item_id=91801&item_no=1&page_id=13&block_id=8"
      },
      {
        title: "conteXinger : 日常のコンテクストを取り込んだ歌声生成",
        author: "西村綾乃, 椎尾一郎",
        conference: "情報処理学会 第75回全国大会",
        date: "2013年3月",
        href: "https://ipsj.ixsq.nii.ac.jp/ej/?action=pages_view_main&active_action=repository_view_main_item_detail&item_id=112362&item_no=1&page_id=13&block_id=8"
      }
    ],
    award: [
      {
        award: "優秀賞",
        title: "チャンバランド！",
        convention: "SPAJAM 2017 予選",
        date: "2017年6月",
        href: "https://gamebiz.jp/?p=186617"
      },
      {
        award: "学生部門決勝進出",
        title: "HairSelfy",
        convention: "Mashup Award 2016",
        date: "2016年11月",
        href: "http://hacklog.jp/events/100"
      },
      // {
      //   award: "",
      //   title: "ときめきマフラー",
      //   convention: "OpenHackDay 2016",
      //   date: "2016年2月",
      //   href: "https://youtu.be/lsujyuPHnxE?t=3h09m45s"
      // },
      {
        award: "MashupAwards賞",
        title: "MEME SESSION",
        convention: "Mashup Award Meme ハッカソン",
        date: "2015年7月",
        href: "http://mashupawards.tumblr.com/post/125302600981/ハッカソンレポートjins-meme-hackathon-powered-by-mashup"
      },
      {
        award: "準優勝",
        title: "ばけるクエスト",
        convention: "Tokyo Hackademics",
        date: "2015年5月",
        href: "http://en.tokyohackademics.org"
      },
      {
        award: "研究発表部門賞",
        title: "リジョワーツ魔法魔術学校",
        convention: "学園祭グランプリ 2014",
        date: "2014年12月",
        href: "https://www.enjoytokyo.jp/feature/gakusai/2014/grand_prix/final_judge.html"
      },
      {
        award: "優勝 & スマートフォン解放賞",
        title: "顔筋アラーム",
        convention: "Open Hack U 2014",
        date: "2014年11月",
        href: "https://hacku.yahoo.co.jp/open2014"
      },
      {
        award: "情報処理学会推奨卒業論文",
        title: "conteXinger : 日常のコンテクストを取り込んだ歌声生成",
        convention: "情報処理学会 第75回全国大会",
        date: "2013年5月",
        href: "https://www.ipsj.or.jp/award/soturon-syuron.html"
      }
    ],
    stage: [
      {
        title: "美女と野獣",
        role: "バベット役",
        company: "Project R",
        date: "2018年3月",
        href: "https://ja-jp.facebook.com/projectr.musical/"
      },
      {
        title: "天国と地獄",
        role: "ヴェヌス役",
        company: "Viva la Voce",
        date: "2017年7月",
        href: "http://viva-la-voce.net/index.html"
      },
      {
        title: "レ・ミゼラブル",
        role: "合唱",
        company: "Project R",
        date: "2017年3月",
        href: "https://www.facebook.com/events/246429002449682/"
      },
      {
        title: "マリツァ伯爵令嬢",
        role: "リーザ役",
        company: "ガレリア座",
        date: "2016年9月",
        href: "http://g-mariza.info"
      },
      {
        title: "悪魔のロベール",
        role: "合唱",
        company: "ガレリア座",
        date: "2015年12月",
        href: "http://site.galleria-za.com/list/27"
      },
      {
        title: "And You 10『 Believe 』",
        role: "楽曲提供",
        company: "+new Company",
        date: "2014年4月",
        href: "http://plusnewcompany.com/stage/584.html"
      },
      {
        title: "20周年ガラコン",
        role: "二重唱(今なら？いや、だめだ) & 合唱",
        company: "ガレリア座",
        date: "2013年4月",
        href: "http://site.galleria-za.com/list/25"
      },
      {
        title: "ヴェニスの一夜",
        role: "合唱",
        company: "ガレリア座",
        date: "2012年7月",
        href: "http://site.galleria-za.com/list/24"
      },
      {
        title: "Saint Witch",
        role: "全曲作曲",
        company: "Seiren Musical Project",
        date: "2011年10月",
        href: "http://seirenmusicalproject2.web.fc2.com/stwitch/stwtop.html"
      },
      {
        title: "Gypsy",
        role: "合唱",
        company: "Seiren Musical Project",
        date: "2010年12月",
        href: "http://seirenmusicalproject2.web.fc2.com/past2010.html"
      },
      {
        title: "And You 2 ~Will~",
        role: "楽曲提供",
        company: "+new Company",
        date: "2010年8月",
        href: "http://plusnewcompany.com/stage/37.html"
      },
      {
        title: "ロマンシングガーデン",
        role: "サニー役",
        company: "Seiren Musical Project",
        date: "2010年3月",
        href: "http://seirenmusicalproject2.web.fc2.com/romancing/"
      },
      {
        title: "And You 1′-dash!!",
        role: "楽曲提供",
        company: "+new Company",
        date: "2010年2月",
        href: "http://plusnewcompany.com/stage/35.html"
      },
      {
        title: "And You 1",
        role: "合唱",
        company: "+new Company",
        date: "2009年8月",
        href: "http://plusnewcompany.com/stage/33.html"
      }
    ]
  }
}
