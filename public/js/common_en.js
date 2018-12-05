function Common() {
  this.data = {
    news: [
      {date: "2018/12/03", contents: "Entrance into TYFFON Inc.", icon: "far fa-building"},
      {date: "2018/10/31", contents: "Leave Yahoo! JAPAN.", icon: "far fa-building"},
      {date: "2018/09/26", contents: "Demo Presentation at WISS 2018; Style Guide.", icon:"far fa-file-alt"},
      {date: "2018/03/07", contents: "Poster Presentation at The 23rd Annual Meeting of The Intelligent User Interfaces; Lyric Translation.", icon:"far fa-file-alt"},
      {date: "2017/12/06", contents: "Oral Presentation at The 25th Workshop on Interactive Systems and Software; Lyric Translation.", icon:"far fa-file-alt"},
      {date: "2017/11/11", contents: "Rijowarts; The Mystery of The Magical Lantern and Rijowarts.", icon:"far fa-lightbulb"},
      {date: "2017/06/17", contents: "Poster Presentation at The 115h Regular Meeting of SIGMUS; Lyric Translation.", icon:"far fa-file-alt"},
      {date: "2017/06/10", contents: "Second Finish Award at SPAJAM preliminary contest 2017.", icon:"fas fa-award"},
      {date: "2017/05/23", contents: "Oral Presentation at The Japanese Society for Artificial Intelligence 2017; Lyric Translation.", icon:"far fa-file-alt"},
      {date: "2017/03/02", contents: "Poster Presentation at Interaction 2017; Lyric Translation.", icon:"far fa-file-alt"},
      {date: "2016/11/09", contents: "Oral Presentation at The 13th International Conference on Advances in Computer Entertainment Technology; conteXinger.", icon:"far fa-file-alt"},
      {date: "2016/07/30", contents: "Poster Presentation at The 112h Regular Meeting of SIGMUS; Relation of the novel and the music.", icon:"far fa-file-alt"},
      {date: "2016/04/01", contents: "Entrance into Ochanomizu University (Docter of Science in Information Sciences).", icon: "fas fa-school"},
      {date: "2015/05/16", contents: "Second Finish Award at Tokyo Hackadeics.", icon:"fas fa-award"},
      {date: "2015/04/01", contents: "Entrance into Yahoo! JAPAN.", icon: "far fa-building"},
      {date: "2015/03/31", contents: "Graduate in Ochanomizu University (Master of Science in Advanced Sciences).", icon: "fas fa-graduation-cap"},
      {date: "2015/03/06", contents: "Poster Presentation at Interaction 2015; Rijowarts.", icon:"far fa-file-alt"},
      {date: "2014/11/29", contents: "Best Performance Award & Smartphone Liberation Award at Hack U 2014.", icon:"fas fa-award"},
      {date: "2014/11/13", contents: "Oral Presentation at The 11th International Conference on Advances in Computer Entertainment Technology; iMake.", icon:"far fa-file-alt"},
      {date: "2014/11/08", contents: "Rijowarts; Ochanomizu Wizarding Level Test", icon:"far fa-file-alt"},
      {date: "2014/03/07", contents: "Poster Presentation at The 5th Augmented Human International Conference; iMake.", icon:"far fa-file-alt"},
      {date: "2014/03/01", contents: "Premium Presentation at Interaction 2014; iMake.", icon:"fas fa-award"},
      {date: "2014/03/01", contents: "Poster Presentation at Interaction 2014; iMake.", icon:"far fa-file-alt"},
      {date: "2013/12/31", contents: "Published the Conference Report in The Virtual Reality Society of Japan Journal.", icon:"far fa-file-alt"},
      {date: "2013/09/12", contents: "Poster Presentation at Ubicomp 2013; conteXinger.", icon:"far fa-file-alt"},
      {date: "2013/05/16", contents: "IPSJ Certificate of excellent Undergraduate Thesis; conteXinger.", icon:"fas fa-award"},
      {date: "2013/05/16", contents: "Oral Presentation at The 38th Regular Meeting of SIGUBI; conteXinger.", icon:"far fa-file-alt"},
      {date: "2013/05/11", contents: "Poster Presentation at The 99th Regular Meeting of SIGMUS; conteXinger.", icon:"far fa-file-alt"},
      {date: "2013/04/01", contents: "Entrance into Ochanomizu University (Master of Science in Advanced Sciences).", icon: "fas fa-school"},
      {date: "2013/03/31", contents: "Graduate in Ochanomizu University (Bachelor of Science in Information Sciences).", icon: "fas fa-graduation-cap"},
      {date: "2013/03/06", contents: "Oral Presentation at The 75th National Convention of IPSJ; conteXinger.", icon:"far fa-file-alt"},
      {date: "2009/04/01", contents: "Entrance into Ochanomizu University (Bachelor of Science in Information Sciences).", icon: "fas fa-school"},
    ],
    portfolio: [
      {
        id: 5,
        title: "Style Guide",
        text: "An automatic generation system of style guides based on term and image.",
        abst: "Design rules sometimes formulated in the development of Web applications or smartphone applications. These rules are called style guide. Style guides are help ensure consistency in application design, and help to create common recognition of design among workers. However, it is difficult to descide style guides in the case of design knowledge is poor or there is no designer. In this research, we implemented a system which sutomatically generating the color scheme based on terms and images selected by users.<br><p class='h5 mt-3'><a href='https://github.com/yanoooooo/style_guide' target='_blank'><i class='fab fa-github'></i> GitHub</a></p>",
        icon: "public/img/icon_styleguide.png",
        img: "public/img/styleguide.png",
        alt: "Style Guide",
        video: "",
        tag: "style-guide"
      },
      {
        id: 4,
        title: "Lyric Translation",
        text: "The interactive web application for translating foreign lyric to Japanese lyric.",
        abst: "Recent evolution of the Internet has made it possible to listen to music that is composed worldwide in foreign languages. However, lyrics that are entirely written in non-native languages are difficult to understand. On the other hand, many international songs have been translated. Lyrics translation requires understanding the original language, musical phrases and rhythm composition, thereby making it a difficult task for non-proficient. Therefore, we propose web application for translating foreign lyric to Japanese lyric. Users can modify lyrics on this system by selecting lyrics from the candidates of temporary translations or editing the lyrics freely. This system also has functions to listen to the song as a trial in real time, and search for related words.",
        icon: "public/img/icon_translation.png",
        img: "public/img/translation.png",
        alt: "Lyric Translation",
        video: "public/video/translation.mp4",
        tag: "lyric-translation"
      },
      {
        id: 3,
        title: "iMake",
        text: "This system generates eye-makeup designs by extracting colors and features from images arbitrarily selected by the user.",
        abst: 'Many women enjoy applying makeup. Eye makeup is especially important for face makeup, because eyeshadow color and eyeline shape can dramatically change a person’s impression on others. In addition to standard eye makeup, there is "artistic eye makeup," which tends to have a greater variety of designs and is more ostentatious than standard eye makeup. Needless to say, it is often difficult for non-artistic people to apply this type of eye makeup. Therefore, we propose and implement a computer-aided eye makeup design system called "iMake." This system generates artistic eye makeup designs from the colors and shapes of a favorite character selected by a user. Once the user has selected the desired eye generates artistic eye makeup designs from the colors and shapes of a favorite character selected by a user. Once the user has selected the desired eye makeup pattern, an ink-jet color printer prints it on a transfer sheet that the user can apply to his/her eyelids.',
        icon: "public/img/icon_imake.png",
        img: "public/img/imake.png",
        alt: "iMake",
        video: "public/video/imake.mp4",
        tag: "imake"
      },
      {
        id: 2,
        title: "Rijowarts",
        text: "Rijowarts is the project of interactive attraction facility by Siio-lab's member in Ochanomizu University.",
        abst: "Rijowarts exhibited for the first time in 2014 at the Kiin-sai of Ochanomizu University. At that time, we exhibited as an interactive facility that users can experience wizarding tests. Currently, Rijowarts has a new form system that multiplies puzzles and interactive systems.<br><p class='h5 mt-3'><a href='https://youtu.be/BYIDQ4ODOOA' target='_blank'><i class='fab fa-youtube'></i>YouTube</a></p>",
        icon: "public/img/icon_rijowarts.png",
        img: "public/img/rijowarts.png",
        alt: "Rijowarts",
        video: "",
        tag: "rijowarts"
      },
      {
        id: 1,
        title: "conteXinger",
        text: "This system make everyday life a musical stage by acquiring the user's context and generating music in real time.",
        abst: "In general, routine every-day work tends to be boring and monotonous, e.g. housework. Work songs have been written and sung by workers to reduce their labor load. In addition, text-to-song synthesizer software such as Yamaha’s VOCALOID(TM) is commonly used by a wide variety of computer music creators. In this paper, we propose a real-time music synthesizer named “conteXinger”. This system sings lyrics based on the listener’s context, including the use of home appliances, e.g. vacuum cleaner, refrigerator, microwave oven, or dish washer, and Internet information, e.g. SNS messages, Web news, and weather reports. By presenting the synthesized music to a user through a home audio system or headphones, our system entertains users who may be bored due to their everyday work routines.",
        icon: "public/img/icon_contexinger.png",
        img: "public/img/contexinger.png",
        alt: "conteXinger",
        video: "public/video/contexinger.mp4",
        tag: "contexinger"
      },
    ],
    research: [
      {
        title: "An Automatic Generation System of Style Guides Based on Term and Image",
        author: "Aya Hasebe, Ayano Nishimura",
        conference: "WISS 2018 (in Japan)",
        date: "Sep. 2018",
        href: "https://www.wiss.org/WISS2018Proceedings/demo/1-A03.pdf",
        tag: "style-guide"
      },
      {
        title: "Implementation of an Interactive System for the Translation of Lyrics",
        author: "Ayano Nishimura, Takayuki Itoh",
        conference: "IUI 2018",
        date: "Mar. 2018",
        href: "https://dl.acm.org/citation.cfm?id=3180317",
        tag: "lyric-translation"
      },
      {
        title: "A study of an interface for translating foreign lyric",
        author: "Ayano Nishimura and Takayuki Itoh",
        conference: "WISS 2017 (in Japan)",
        date: "Dec. 2017",
        href: "http://www.wiss.org/WISS2017Proceedings/",
        tag: "lyric-translation"
      },
      {
        title: "An Initial Implementation of Interactive System for Automatic Translation of Foreign Lyrics",
        author: "Ayano Nishimura and Takayuki Itoh",
        conference: "The 115th Regular Meeting of SIGMUS (in Japan)",
        date: "Jun. 2017",
        href: "https://ipsj.ixsq.nii.ac.jp/ej/?action=pages_view_main&active_action=repository_view_main_item_detail&item_id=182218&item_no=1&page_id=13&block_id=8",
        tag: "lyric-translation"
      },
      {
        title: "A Study on Task and Methods for Automatic Translation of Foreign Lylics",
        author: "Ayano Nishimura and Takayuki Itoh",
        conference: "JSAI 2017 (in Japan)",
        date: "May. 2017",
        href: "https://www.ai-gakkai.or.jp/jsai2017/webprogram/2017/paper-432.html",
        tag: "lyric-translation"
      },
      {
        title: "A Study on Translation Techniques for Automatic Translation of Foreign Lylics",
        author: "Ayano Nishimura and Takayuki Itoh",
        conference: "Interaction 2017 (in Japan)",
        date: "Mar. 2017",
        href: "http://www.interaction-ipsj.org/proceedings/2017/data/pdf/2-408-78.pdf",
        tag: "lyric-translation"
      },
      {
        title: "conteXinger: A Context-aware Song Generator to Enrich Daily Lives",
        author: "Ayano Nishimura and Itiro Siio",
        conference: "In Proceedings of the 13th International Conference on Advances in Computer Entertainment Technology (ACE2016)",
        date: "Nov. 2016",
        href: "http://dl.acm.org/citation.cfm?id=3014350&CFID=931670846&CFTOKEN=29006312",
        tag: "contexinger"
      },
      {
        title: "Rijowarts : Development and Evaluation of an Entertainment System Arousing Interest to Technology",
        author: "Ayano Nishimura, Kaori Ujima, Kurea Anzai, Hitomi Katto, Akane Arimoto and Natsumi Hashimoto",
        conference: "Interaction 2015 (in Japan)",
        date: "Mar. 2015",
        href: "http://www.interaction-ipsj.org/proceedings/2015/data/bib/C37.html",
        tag: "rijowarts"
      },
      {
        title: "iMake: eye makeup design generator",
        author: "Ayano Nishimura and Itiro Siio",
        conference: "In Proceedings of the 11th Conference on Advances in Computer Entertainment Technology (ACE '14)",
        date: "Nov. 2014",
        href: "http://dl.acm.org/citation.cfm?id=2663823&CFID=931670846&CFTOKEN=29006312",
        tag: "imake"
      },
      {
        title: "iMake: computer-aided eye makeup",
        author: "Ayano Nishimura and Itiro Siio",
        conference: "In Proceedings of the 5th Augmented Human International Conference (AH '14)",
        date: "Mar. 2014",
        href: "http://dl.acm.org/citation.cfm?id=2582051.2582107&coll=DL&dl=ACM&CFID=337492543&CFTOKEN=43175638",
        tag: "imake"
      },
      {
        title: "iMake : An Eye Makeup Design Generator",
        author: "Ayano Nishimura and Itiro Siio",
        conference: "Interaction 2014 (in Japan)",
        date: "Feb. 2014",
        href: "http://www.interaction-ipsj.org/proceedings/2014/data/bib/C2-6.html",
        tag: "imake"
      },
      {
        title: "The Virtual Reality Society of Japan Academic Journal 2013 No.4 Vol.18",
        author: "Ayano Nishimura",
        conference: "Conference Report (in Japan)",
        date: "Dec. 2013",
        href: "https://vrsj.org/journal/backnumber/1-3/#18-4",
        tag: ""
      },
      {
        title: "ConteXinger: a context-aware song generator",
        author: "Ayano Nishimura and Itiro Siio",
        conference: "In Proceedings of the 2013 ACM conference on Pervasive and ubiquitous computing adjunct publication (UbiComp '13 Adjunct)",
        date: "Sep. 2013",
        href: "http://dl.acm.org/citation.cfm?id=2494091.2494116&coll=DL&dl=ACM&CFID=337492543&CFTOKEN=43175638",
        tag: "contexinger"
      },
      {
        title: "conteXinger: VOCALOID takes the context of everyday in singing",
        author: "Ayano Nishimura and Itiro Siio",
        conference: "The 38th Regular Meeting of SIGUBI (in Japan)",
        date: "May. 2013",
        href: "https://ipsj.ixsq.nii.ac.jp/ej/?action=pages_view_main&active_action=repository_view_main_item_detail&item_id=92055&item_no=1&page_id=13&block_id=8",
        tag: "contexinger"
      },
      {
        title: "conteXinger: VOCALOID sings the context of everyday",
        author: "Ayano Nishimura and Itiro Siio",
        conference: "The 99th Regular Meeting of SIGMUS (in Japan)",
        date: "May. 2013",
        href: "https://ipsj.ixsq.nii.ac.jp/ej/?action=pages_view_main&active_action=repository_view_main_item_detail&item_id=91801&item_no=1&page_id=13&block_id=8",
        tag: "contexinger"
      },
      {
        title: "conteXinger : Vocal generation take in context of everyday",
        author: "Ayano Nishimura and Itiro Siio",
        conference: "The 75th National Convention of IPSJ (in Japan)",
        date: "Mar. 2013",
        href: "https://ipsj.ixsq.nii.ac.jp/ej/?action=pages_view_main&active_action=repository_view_main_item_detail&item_id=112362&item_no=1&page_id=13&block_id=8",
        tag: "contexinger"
      }
    ],
    award: [
      {
        award: "Second Finish Award",
        title: "Chambaland!",
        convention: "SPAJAM 2017 Preliminary Contest",
        date: "Jun. 2017",
        href: "https://gamebiz.jp/?p=186617"
      },
      {
        award: "Student Department Advance to The Finals",
        title: "HairSelfy",
        convention: "Mashup Award 2016",
        date: "Nov. 2016",
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
        award: "Mashup Awards",
        title: "MEME SESSION",
        convention: "Mashup Award Meme Hackathon",
        date: "Jul. 2015",
        href: "http://mashupawards.tumblr.com/post/125302600981/ハッカソンレポートjins-meme-hackathon-powered-by-mashup"
      },
      {
        award: "Second Finish Award",
        title: "Bakeru-Quest",
        convention: "Tokyo Hackademics",
        date: "Mar. 2015",
        href: "http://en.tokyohackademics.org"
      },
      {
        award: "Research Presentation Division Award",
        title: "Rijowarts School of Witchcraft and Wizardry",
        convention: "School festival Grand Prix 2014",
        date: "Dec. 2014",
        href: "https://www.enjoytokyo.jp/feature/gakusai/2014/grand_prix/final_judge.html"
      },
      {
        award: "Best Performance Award & Smartphone Liberation Award",
        title: "Facial Muscle Alarm",
        convention: "Open Hack U 2014",
        date: "Nov. 2014",
        href: "https://hacku.yahoo.co.jp/open2014"
      },
      {
        award: "IPSJ Certificate of excellent Undergraduate Thesis",
        title: "conteXinger : Vocal generation take in context of everyday",
        convention: "The 75th National Convention of IPSJ",
        date: "May. 2013",
        href: "https://www.ipsj.or.jp/award/soturon-syuron.html"
      }
    ],
    stage: [
      {
        title: "Beauty and the Beast",
        role: "The part of Babette",
        company: "Project R",
        date: "Mar. 2018",
        href: "https://ja-jp.facebook.com/projectr.musical/"
      },
      {
        title: "Orphée aux Enfers",
        role: "The part of Venus",
        company: "Viva la Voce",
        date: "Jul. 2017",
        href: "http://viva-la-voce.net/index.html"
      },
      {
        title: "Les Miserables",
        role: "Chorus",
        company: "Project R",
        date: "Mar. 2017",
        href: "https://www.facebook.com/events/246429002449682/"
      },
      {
        title: "Gräfin Mariza",
        role: "The part of Lisa",
        company: "Teatro alla Galleria",
        date: "Sep. 2016",
        href: "http://g-mariza.info"
      },
      {
        title: "Robert le Diable",
        role: "Chorus",
        company: "Teatro alla Galleria",
        date: "Dec. 2015",
        href: "http://site.galleria-za.com/list/27"
      },
      {
        title: "And You 10『 Believe 』",
        role: "Music Provider",
        company: "+new Company",
        date: "Apr. 2014",
        href: "http://plusnewcompany.com/stage/584.html"
      },
      {
        title: "20th Anniversary Gala Concert",
        role: "Duet(Soll ich reden? - Ich setz' den Fall) & Chorus",
        company: "Teatro alla Galleria",
        date: "Apr. 2013",
        href: "http://site.galleria-za.com/list/25"
      },
      {
        title: "Eine Nacht in Venedig",
        role: "Chorus",
        company: "Teatro alla Galleria",
        date: "Jul. 2012",
        href: "http://site.galleria-za.com/list/24"
      },
      {
        title: "Saint Witch",
        role: "Music Composer",
        company: "Seiren Musical Project",
        date: "Oct. 2011",
        href: "http://seirenmusicalproject2.web.fc2.com/stwitch/stwtop.html"
      },
      {
        title: "Gypsy",
        role: "Chorus",
        company: "Seiren Musical Project",
        date: "Dec. 2010",
        href: "http://seirenmusicalproject2.web.fc2.com/past2010.html"
      },
      {
        title: "And You 2 ~Will~",
        role: "Music Provider",
        company: "+new Company",
        date: "Aug. 2010",
        href: "http://plusnewcompany.com/stage/37.html"
      },
      {
        title: "Romancing Garden",
        role: "The part of Sunny",
        company: "Seiren Musical Project",
        date: "Mar. 2010",
        href: "http://seirenmusicalproject2.web.fc2.com/romancing/"
      },
      {
        title: "And You 1′-dash!!",
        role: "Music Provider",
        company: "+new Company",
        date: "Feb. 2010",
        href: "http://plusnewcompany.com/stage/35.html"
      },
      {
        title: "And You 1",
        role: "Chorus",
        company: "+new Company",
        date: "Aug. 2009",
        href: "http://plusnewcompany.com/stage/33.html"
      }
    ]
  }
}
