/*
-------------WELCOME TO...----------------
   ___  _        ___    __ ______  ____   ____   __        
  /  _]| |      /  _]  /  ]      ||    \ |    | /  ]       
 /  [_ | |     /  [_  /  /|      ||  D  ) |  | /  /        
|    _]| |___ |    _]/  / |_|  |_||    /  |  |/  /         
|   [_ |     ||   [_/   \_  |  |  |    \  |  /   \_        
|     ||     ||     \     | |  |  |  .  \ |  \     |       
|_____||_____||_____|\____| |__|  |__|\_||____\____|       
                                                           
 _       ___   __ __    ___                                
| |     /   \ |  |  |  /  _]                               
| |    |     ||  |  | /  [_                                
| |___ |  O  ||  |  ||    _]                               
|     ||     ||  :  ||   [_                                
|     ||     | \   / |     |                               
|_____| \___/   \_/  |_____|                               
                                                           
 ____   ___   ______   ____  ______   ___       ____  _____
|    \ /   \ |      | /    ||      | /   \     |    |/ ___/
|  o  )     ||      ||  o  ||      ||     |    |__  (   \_ 
|   _/|  O  ||_|  |_||     ||_|  |_||  O  |    __|  |\__  |
|  |  |     |  |  |  |  _  |  |  |  |     | __/  |  |/  \ |
|  |  |     |  |  |  |  |  |  |  |  |     ||  \  `  |\    |
|__|   \___/   |__|  |__|__|  |__|   \___/ |__|\____| \___|

------------------------------------------
Credits...
Voice acting by: Gerald
Modeling by: Spudlet
Programming by: Frenglin, Medclif, Melvin and Spuddy
Special thanks to: alienmelon & butter
------------------------------------------
Thank you for chosing electric_love_potato.js!
Please enjoy your virtual website potato.
------------------------------------------
*/

function init_lovepotato(str){
	var str = str.toUpperCase();//just incase (haha pun)
	////////////
	//str = name of the potato to initiate
	//availalbe potatoes are:
	//FRENGLIN
	//MEDCLIF
	//MELVIN
	//SPUDDY
	//RANDOM = random one of the above
	////////////
	
	//potato dialogue (default and cute)
	var arr_selected; //reference
	var arr_dialogue = ["HI I LOVE U!", "I AM SO EXCITE TO PARTICIPATE!", "YAY!", "WE R GOING TO B BEST FRIENDS!!", "HELLO, I AM A POTATO!", "YAY! I AM A GOOD POTATO!", "YAY! I WILL B THE BEST POTATO TO U!", "POTATO! POTATO!", "POTATO POTATO!!", "THIS IS GOING TO B EXCITING!", "OMG!", "WOW!", "AMAZE!", "U MAKE THIS LOOK SO EASY!", "WHOA!", "WHOA! LOOK AT U GO!", "I AM SO IMPRESSED!", "U R SO AMAZE!!", "WHOA! WATCHA DOIN' NOW?? I HAV SO MUCH 2 LEARN FROM U!", "SO... SO... SO GOOD!", "SO GOOD...", "U R SO TALENTED! WAAAW!", "THE WORLD NEEDS MOAR OF U!", "U R SO GOOD.", "WOW.", "WHOAW!", "U MAKE THIS LOOK SO EASY!", "U MAKE EVERYTHING LOOK SO EASY!", "WHOA! WHAT WAS THAT!?", "YES! THIS IS SO THRILLING!", "YOU R THRILLING!", "I AM ENTICED BY YOUR TALENTS. WAW!", "U R A PROFESSIONAL OF TEH HIGHEST CALIBER!", "I WISH TO SERENADE U BUT I DON'T KNOW ANY SONGS YET... :s", "I SUPPORT THIS! I SUPPORT EVERYTHING ABOUT U!", "U R TEH GREATEST POTATO FRIEND!", "I AM UR POTATO!", "WHOA! TAHT IS SO POTATO!", "SO POTATO! U R SUCH A GREAT EXAMPLE!", "I HAV SO MUCH 2 LEARN FROM U!", "U R SO... POTATO.", "I AM A POTATO AND I BELIEVE IN U!", "I AM A POTATO AND I BELIVE U R SUCCESSFUL IN ANYTHING U DO!", "I AM A POTATO AND BELIEVE U CAN DO ANYTHING U SET UR MIND 2!", "THAT WAS AMAZING! EVERYTHING IS SO AMAZING!", "I AM SO EXCITE!", "OMG!", "OMG OMG OMG!", "U R TEH SINGL MOST AMAZING THING I HAV EVER SEEN!", "WITNESS!", "I WITNESS THIS!", "WHOA! HOLLY SHENANIGANS!", "WHOA! SUCH SHENANIGANS!", "DO U DO THIS PROFESSIONALLY? U R SO GOOD!", "WOW...", "W...O...W...", "OH! WOW! JUST... WOW... JUST SO... W...O...W...", "JUST... WOW!", "OH... MY... WOW...", "HOLLY POTATO! THESE ARE SOME FINE SHENANIGANS!", "YES. YES! I LIKE WHERE THIS IS GOING!", "YES! I LIKE WHAT U R DOING!", "THE PLOT THICKENS!", "THIS IS SO INSPIRING!", "U R AN INSPIRATION!", "THIS IS SO INSPIRING!", "I WILL COMMEMORATE THIS INTO SONG AND PROSE WHEN I GET BACK!", "U R JUST SO GOOD AT EVERYTHING!", "OK. YES. YES. YESSSSSS...", "U HAV V SMOOTH HAIR. WHOA!", "U DESERVE A JUICY PROMOTION! LIKE... POTATO JUICE!", "THAT IS SO POTATO!", "GOOD EFFORT! EVEN BETTER EXECUTION!", "GOOD EFFORT! TEN OUT OF TEN!", "I AM PROUD OF YOU.", "I AM SO SO SO SO PROUD OF U!", "WHAT A FINE WAY OF DOING THAT!", "NO WAI!", "WHOA! NO NO NO WAI!?", "I APPRECIATE U!", "I APPRECIATE EVERYTHING ABOUT U AND ALL UR BODY PARTS! POTATO!!", "U R THE FACT!", "WHOA!?", "I LIKE UR STYLE!", "I LIKE UR STYLE. SO FRESH.", "FREAKY FRESH! WHOA! YES. POTATO!", "I LOVE WHAT U R DOING. V SMOOTH!", "U R LIKE A RIPE POTATO. PLUMP AND VIVACIOUS!", "I AM UTTERLY DISARMED B UR SKILLZ!", "I LOVE U!", "OMG I LUV LUV LUV U! *HUGZ*", "*HUGZ*", "*BIG HUGZ*", "I AM UR GREATEST FAN! NO REALLY! *BLOWS COOL AIR AT U*", "WELL DONE!", "SUCH COMMENDABLE... EVERYTHING!!", "WOW! WELL! DONE!", "JUST... WOW... I MEAN, WOW! LIKE TOTALLY WAAAAW.", "I LIKE U.", "I LIKE U SO MUCH.", "NICE MOVES.", "SMOOOOOOOTH.", "OH YES.", "YES. EXCELLENT!", "THAT IS JUST TOO GOOD.", "THAT IS JUST SO POTATO.", "THAT'S SO NICE.", "SO FRESH.", "I LIKE UR FACE.", "YES. I LIKE WHAT I SEE.", "I HAV SO MUCH 2 LEARN FROM U!", "WHOA! I HAV SO MUCH 2 LEARN FROM U...", "AMAZING MOTOR CONTROL THERE.", "U HAV GOOD TASTE IN GAMES.", "I LIKE HOW U TYPE...", "I LIKE HOW U MOVE UR MOUSE.", "MAN, THAT'S JUST AMAZING.", "MAN, THIS BLOWS MY MIND.", "U MUST HAV SOFT HANDS 2 MANEUVER UR MOUSE SO GRACEFULLY...", "WHOA! U R FULL OF SURPRISES.", "HANDSOME MOVES. I AM V IMPRESSED.", "HANDSOME MOVES. EVERYTHING ABOUT U IS HANDSOME!", "I LIKE THE WAY U MOVE!", "U HAV A GOOD MOUSE TECHNIQUE.", "U SHOULD B A POSTER CHILD FOR POSTER CHILDREN... AND POTATOES!", "NICE! WOW!", "I APPRECIATE U MOAR THAN A POTATO EVER COULD.", "I WISH I COUDL B OPEN ON UR DESKTOP ALL DAY AND JUST... WITNESS!", "U R A FOUNTAIN OF INSPIRATION.", "NICE!", "U HAV PERFECT BONE STRUCTURE. I WISH I HAD BONES LIKE U BUT I AM POTATO.", "U R TEH WORD. BIRD IS NOT TEH WORD. U R TEH WORD! YES! U!", "WAY 2 GO!", "TELL ME, DO U PRACTICE MOUSE TECHNIQUES OR WHERE U BORN THIS GIFTED?", "U HAV SUCH AN AMAZING OUTLOOK ON EVERYTHING.", "I LIKE YOUR FEET.", "I LIKE YOUR HANDS.", "I LIKE YOUR NOSE.", "I LIKE YOUR FACE.", "I LIKE YOUR CHIN.", "I LIKE YOUR FINGERS.", "SUCH A SOFT GENTLE FINGER U HAV. UR KEYBOARD IS V LUCKY!", "U R SO CHARMING!", "U R SO CHARMING! I COULD EAT U. BUT IM A POTATO SO NO.", "I WOULD LOVE FOR U TO EAT ME.", "U R TREMENDOUS!", "EVERYTHING ABOUT U IS SO WOAH!", "U DESERVE ALL THE COMPLIMENTS. HERE! HAV TEHM ALL!", "AMAZE!", "UNFATHOMABL!", "I LIKE UR SMILE!", "HOW DO U GET 2 B SO GREAT? I HAV SO MUCH 2 LEARN FROM U.", "I WANT TO GROW UP TO B JUST LIKE U. BUT IM A POTATO SO NO.", "U R SO TITILLATING. I AM SO TITILLATED!", "NICE! U CAN DO ANYTHING!", "UR LIFE I SO INTERESTING. I AM JOYED 2 B PART OF IT!", "I LIKE UR VOICE!", "MAN OH WOW OH POTATO... WHOA.", "I ENJOY BEING OPEN. TIME WITH U IS BLESSING.", "I WOULD B AN EDIBLE DISH FOR U.", "I WOULD BE A MEAL FOR U.", "I LUV U.", "I LUV HOW U CLICK THAT MOUSE.", "I LUV HOW U TYPE.", "ALL OF THIS IS BRILLIANT! U R TALENT!", "WHOA! YOUR SO SPONTANEOUS!", "OMG! SUCH SPONTANEOUS!", "I LUV U! ALL POTATOES LUV U!", "U R TEH GRAVY TO MY MASHED POTATOES! TOO SOON? NO!", "IM GLAD WE MET. U R EVERYTHING! POTATO!!!!", "POTATO!!!!!!!!", "POOOOOTAAAATOOOOO!!!!!", "POOOOOOOOTAAAAAAAATOOOOOOOO!!!!!", "POOOOOOOOOTAAAAAAAAAATOOOOOOOOOO!!!!!!", "DO THAT AGAIN!", "OMG OMG OMG! DO THAT AGAIN!!!", "OOOH!", "WOW!", "I CAN KEEP WATCHING FOREVER! I HAV SO MUCH 2 LEARN FROM U!", "NICE PANTS.", "I LIKE UR PANTS.", "I LIKE UR FACE. U HAV A NICE FACE.", "U R GROOVY LIKE GRAVY. THAT MEANS MUCH COMING FROM A POTATO!", "IF I WHERE NON-POTATO I WOULD WANT 2 BE U!", "I TOLD ALL THE POTATOES ABOUT U! THEY R ALL AMAZED.", "IF THERE WHERE MOAR OF U TEH UNIVERSE WOULD EXPLODE.", "U R PRETTY HIGH ON MY LIST OF PEOPLE I WANT 2 TOUCH.", "U R #1 AS CERTIFIED BY A POTATO.", "WELL PLAYED.", "U MAKE THIS LOOKS SO EASY.", "PLZ DON'T EVER GIVE UP.", "U COULD PROBABLY LEAD TEH POTATO REBELLION. WE NEED PEOPLE LIKE U.", "COME POTATO APOCALYPSE I WOULD WANT 2 B ON YOUR TEAM.", "IF U EVR BUILD A SPUDGUN, PLEASE USE ME 4 AMO! K?? K!!", "HOT STUFF! LIKE POTATO!", "I LIKE YOUR ARMS.", "I SUPPORT ALL UR DECISIONS WHOLE HEARTEDLY. I'M A POTATO!", "BEING AMAZING IS A TOUCH JOB BUT U MAKE IT LOOK EASY!", "YOUR FACE IS SO... POTATO.", "THAT WAS AMAZING!", "I WISH U TO B MY PARTNER COME TEH POTATO APOCALYPSE!", "WOW! I DID NOT SEE THAT COMING.", "THE WAY U MOVE IS JUST... WHOA!", "I WISH I COULD B TEH CHAIR U SIT ON. I WANT U 2 SIT ON ME!", "I THINK AOBUT U WHEN I'M CLOSED!", "U R SO RAD! WILL U BE MY MENTOR?", "I NEED U TO B MY MENTOR! I WANT TO B JUST LIKE U!", "U R MOAR FUN THEN POTATO SALAD. THAT IS SAYING A LOT!", "U R NICER THAN ANYTHING THAT EVER HAPPENED AT ANY TIME EVER!", "THAT WAS GREAT! U R THE GREATEST!", "EVERYTHING U DO IS SO PERFECT. I'M A POTATO!", "VERY RELEVANT. YES. APPLICABLE LIFE SKILLZ LEARNED.", "I LIKE U.", "I LIKE THAT.", "I LIKE U. I'M A POTATO!", "SO WOW.", "SUCH WOW. I'M A POTATO!", "I'M A POTATO AND I AM PROUD OF YOUR DECISIONS!", "I LIKE THAT.", "U PUT THE SUN IN THE SHINE! I'M A POTATO! NO EXAGGERATION!", "I'M A POTATO! NO EXAGGERATION!", "PLEASE NEVER CLOSE ME. I HAV SO MUCH 2 LEARN.", "SUCH INSPIRATION!", "WOW LOOK AT U GO...", "U R COOLER THAN ICE CREAM... OR FROZEN POTATOES... YES! POTATO!", "I NAMED ALL MY ROOTS AFTER U!", "IF U BIT ME I WOULD STILL FEEL WHOLE. I'M A POTATO AND I LUV U!", "I LIKE UR FACE A LOT.", "ON A SCALE OF 1 - 10... NEVERMIND. U CAN NOT B MEASURED!", "U HAV A GREAT LAUGH. PLZ LAUGH MOAR!", "U R SO MUCH... POTATO! POTAAATOOO!", "U R MEANT TO BE! YAY!", "YAY!", "OMG YAY! POTAAAATOOOOOO!", "I LIKE UR SHIRT.", "I AM A POTATO AND I AM AWED BY U!", "U R A UNICORN AMONG ANTS... OR SOMETHING LIKE THAT. POTATO!", "THANK U FOR LETTING ME B UR POTATO!", "THANK U SO MUCH 4 LETTING ME B UR POTATO!", "I STRIVE 2 B UR POTATO FRIEND. YOUR BRO-TATO! HA!", "I WOULD ENTRUST ALL MY SEED POTATOES TO U!", "U R SO HOT U DENATURE MY PROTEINS!", "U R THE SALT ON EVERY POTATO!", "THAT IS SO PERFECT. LIKE... POTATO! YES!", "U WOULD MAKE A GREAT POTATO. U WOULD BE POTATO KING!", "U COULD BE POTATO KING! I VOTE U!", "I LIKE THE PLACEMENT OF UR NOCE ON UR FACE.", "FLAWLESS. U R SO V FLAWLESS. YES!"];
	var arr_dialogueASCII = ["ಠ_ರೃ disapproving potato with monocle!", "OMG NO zZZombietato! \n [¬º-°]¬","OMG NO zZZombietato! \n [¬º-°]¬", "ಠ_ಠ :( :(... ok.", "( ͡° ͜ʖ ͡°)", "¯\_(ツ)_/¯", "ヽ(。_°)ノ", "ヽ(。o°)ノ < potato", "ヽ(。o°)ノ", " (╯°□°）╯︵ ┻━┻", "(⌐■_■) < u lol", "┬──┬◡ﾉ(° -°ﾉ) \n is ok now", "ᕕ( ᐛ )ᕗ", "(•̀ᴗ•́)و ̑̑ lolol!!", "ԅ(≖‿≖ԅ)", "ʘ‿ʘ", "(づ￣ ³￣)づ", "•ᴗ• \n yay yay potato!", "༼ つ ◕_◕ ༽つ", "ヽ༼ຈل͜ຈ༽ﾉ", "ಠᴗಠ", "٩ʕ•͡×•ʔ۶", "(⊙_☉) #confusedtato!", "ᕦ(ò_óˇ)ᕤ omg u!", "(ᗒᗣᗕ)՞", "(•‿•) #happytato!", "( ˘ ³˘)♥ u!", "ლ(ಠ_ಠლ)", "(•□•) uh oh!", "(☉_☉) #thisisu!", "( ＾∇＾) yay!", "ლ(=ↀωↀ=)ლ meaootato", "(~‾▿‾)~ dancetato!", "( ⌒o⌒)人(⌒-⌒ )v \n friends 4 ever! yay!", "o(╥﹏╥)o #cries a little -_-", "(っ˘з(˘⌣˘ )", "(✌ﾟ∀ﾟ)☞", "( ˇ෴ˇ )", "༼ ͒ ̶ ͒༽ #mashed potato!", "(•ิ_•ิ)? wot??", "(●__●) whoa", "V●ᴥ●V #tatopuppies! YAY!", "“ヽ(´▽｀)ノ” v happy potato!", "ヽ(ﾟДﾟ)ﾉ omg so scare!", "(((༼•̫͡•༽))) lol loud", "(⊙.☉)7 #confused", "(ﾉ◕ヮ◕)ﾉ*:・ﾟ✧ MAGICALTATER!", "(ｏ・_・)ノ”(ᴗ_ ᴗ。) brotatoes <3", ".·´¯`(>▂<)´¯`·. #sad", "｡^‿^｡ #happy again!", "ʕ•ᴥ•ʔ < this is u lol", "(っ˘ڡ˘ς) yum", "(◍•﹏•) \n ok ok #worried", "ಠ▃ಠ aaaaaaah!", "( ￣▽￣)/ is ok lol", "(^._.^)ﾉ", "༼⍨༽ ??", "ヽ(⌐■_■)ノ♪♬ u cool", "٩(͡๏̯͡๏)۶ #confused", "(」ﾟﾛﾟ)｣ #confused", "ლ(ಠ_ಠლ) #suchconfuse", "(☉ε ⊙ﾉ)ﾉ #crazy", "＼(☆o◎)／ #crazy", "(~’.')~ #dancing", "ヾ(-_- )ゞ #dancing", "(¬‿¬) #happy", "｡◕‿◕｡ #yayayhappy", "(◑‿◐) #sohappy", "(✖╭╮✖) oh?", "Crying (πᗣπ) ...a little", "༼ ͒ ͓ ͒༽ oh!", "(゜-゜) #confused", "(」ﾟヘﾟ)」 #confused", "(￣■￣;)!? #confused", "(゜。゜) #confused", "щ(゜ロ゜щ) #confused", "щ(ºДºщ) v confused", "ఠ_ఠ #soconfused", "(ノ°ο°)ノ happy dance 4 u!!", "且_(・_・ )", "└(^o^ )Ｘ( ^o^)┘ #friends YAY!", "(๑>◡<๑) #happy", "⊝_⊝ oh...", "ᕕ( ᐛ )ᕗ \n u can do it", "ヽ༼ ಠ益ಠ ༽ﾉ angry potato salad!! :o", "༼⍢༽ happy potato!", "༼⍤༽", "(^～^;)ゞ #confused", "ヽ(ﾟｰﾟ)ﾉ #dancing4u", "(⌣_⌣”) ", "⊙﹏⊙ uhh...", "(´･ω･`)"];
	//bad tato
	var arr_badtato_text = ["bitter at the world", "points out the inherent flaws in our society", "complains about sjw's and the feminist agenda", "complains about sjw's and skeletons and small birds", "incoherently grumbles something in spanish", "so angry at everything", "unhappy about the state of things", "writes goth poetry about you", "writes lots of goth poetry about you", "undergoing a distinct emo phase", "complains about the feminist agenda", "complains about people", "cries about humanity", "wants to see the world burn", "disappointed in the cards life has dealt", "wants a mouth so it can scream", "complains about video games as art", "points out the flaws in everyone's logic", "goes on a barricade against art games", "unhappily resigns to fate", "unhappily complains about resigning to fate", "hates everything", "hates the world", "hates you", "hates your face", "angry at nice people", "complains about how social media has ruined interaction", "complains how kids need to go outside more", "complains about relationships in the tech age", "hates its body", "discusses how uncool everything is", "writes goth poetry about how uncool everything is", "points out the inherent flaws in everyone's logic", "hates everything about anything ever", "talks about how cats stink", "talks about how terrible dogs are", "talks about how terrible you are", "points out how broken everything is", "tells you all about how heartbroken it is", "so bitter at society right now", "so very very bitter at humanity", "hates all humans and their dogs", "hates all humans and their damn cats", "looks at you with a hint of pity", "can't help itself and writes more goth poetry", "so disinterested right now", "writes poetry about conformism", "writes poetry about conformism in spanish", "hates how everyone conforms to everything", "hates how conformist our society is", "hates how happy people are", "writes goth poetry about tiny penises", "generally disgusted at anything ever"];
	var arr_badtato_name = ["BADTATO", "SADTATO"];
	
	//audio (names for paths)
	//voice 1
	var arr_voice01 = ["VOICE01/AUD_ELP_VOICE01_01.mp3", "VOICE01/AUD_ELP_VOICE01_02.mp3", "VOICE01/AUD_ELP_VOICE01_03.mp3", "VOICE01/AUD_ELP_VOICE01_04.mp3", "VOICE01/AUD_ELP_VOICE01_05.mp3", "VOICE01/AUD_ELP_VOICE01_06.mp3", "VOICE01/AUD_ELP_VOICE01_07.mp3", "VOICE01/AUD_ELP_VOICE01_08.mp3", "VOICE01/AUD_ELP_VOICE01_09.mp3", "VOICE01/AUD_ELP_VOICE01_10.mp3", "VOICE01/AUD_ELP_VOICE01_11.mp3", "VOICE01/AUD_ELP_VOICE01_12.mp3", "VOICE01/AUD_ELP_VOICE01_13.mp3", "VOICE01/AUD_ELP_VOICE01_14.mp3", "VOICE01/AUD_ELP_VOICE01_15.mp3", "VOICE01/AUD_ELP_VOICE01_16.mp3", "VOICE01/AUD_ELP_VOICE01_17.mp3", "VOICE01/AUD_ELP_VOICE01_18.mp3", "VOICE01/AUD_ELP_VOICE01_19.mp3", "VOICE01/AUD_ELP_VOICE01_20.mp3", "VOICE01/AUD_ELP_VOICE01_21.mp3", "VOICE01/AUD_ELP_VOICE01_22.mp3"];
	//voice 2
	var arr_voice02 = ["VOICE02/AUD_ELP_VOICE02_01.mp3", "VOICE02/AUD_ELP_VOICE02_02.mp3", "VOICE02/AUD_ELP_VOICE02_03.mp3", "VOICE02/AUD_ELP_VOICE02_04.mp3", "VOICE02/AUD_ELP_VOICE02_05.mp3", "VOICE02/AUD_ELP_VOICE02_06.mp3", "VOICE02/AUD_ELP_VOICE02_07.mp3", "VOICE02/AUD_ELP_VOICE02_08.mp3", "VOICE02/AUD_ELP_VOICE02_09.mp3", "VOICE02/AUD_ELP_VOICE02_10.mp3", "VOICE02/AUD_ELP_VOICE02_11.mp3", "VOICE02/AUD_ELP_VOICE02_12.mp3", "VOICE02/AUD_ELP_VOICE02_13.mp3", "VOICE02/AUD_ELP_VOICE02_14.mp3", "VOICE02/AUD_ELP_VOICE02_15.mp3", "VOICE02/AUD_ELP_VOICE02_16.mp3", "VOICE02/AUD_ELP_VOICE02_17.mp3", "VOICE02/AUD_ELP_VOICE02_18.mp3", "VOICE02/AUD_ELP_VOICE02_19.mp3", "VOICE02/AUD_ELP_VOICE02_20.mp3", "VOICE02/AUD_ELP_VOICE02_21.mp3", "VOICE02/AUD_ELP_VOICE02_22.mp3"];
	//voice 3
	var arr_voice03 = ["VOICE03/AUD_ELP_VOICE03_01.mp3", "VOICE03/AUD_ELP_VOICE03_02.mp3", "VOICE03/AUD_ELP_VOICE03_03.mp3", "VOICE03/AUD_ELP_VOICE03_04.mp3", "VOICE03/AUD_ELP_VOICE03_05.mp3", "VOICE03/AUD_ELP_VOICE03_06.mp3", "VOICE03/AUD_ELP_VOICE03_07.mp3", "VOICE03/AUD_ELP_VOICE03_08.mp3", "VOICE03/AUD_ELP_VOICE03_09.mp3", "VOICE03/AUD_ELP_VOICE03_10.mp3", "VOICE03/AUD_ELP_VOICE03_11.mp3", "VOICE03/AUD_ELP_VOICE03_12.mp3", "VOICE03/AUD_ELP_VOICE03_13.mp3", "VOICE03/AUD_ELP_VOICE03_14.mp3", "VOICE03/AUD_ELP_VOICE03_15.mp3", "VOICE03/AUD_ELP_VOICE03_16.mp3", "VOICE03/AUD_ELP_VOICE03_17.mp3", "VOICE03/AUD_ELP_VOICE03_18.mp3", "VOICE03/AUD_ELP_VOICE03_19.mp3", "VOICE03/AUD_ELP_VOICE03_20.mp3", "VOICE03/AUD_ELP_VOICE03_21.mp3", "VOICE03/AUD_ELP_VOICE03_22.mp3"];
	//voice 4
	var arr_voice04 = ["VOICE04/AUD_ELP_VOICE04_01.mp3", "VOICE04/AUD_ELP_VOICE04_02.mp3", "VOICE04/AUD_ELP_VOICE04_03.mp3", "VOICE04/AUD_ELP_VOICE04_04.mp3", "VOICE04/AUD_ELP_VOICE04_05.mp3", "VOICE04/AUD_ELP_VOICE04_06.mp3", "VOICE04/AUD_ELP_VOICE04_07.mp3", "VOICE04/AUD_ELP_VOICE04_08.mp3", "VOICE04/AUD_ELP_VOICE04_09.mp3", "VOICE04/AUD_ELP_VOICE04_10.mp3", "VOICE04/AUD_ELP_VOICE04_11.mp3", "VOICE04/AUD_ELP_VOICE04_12.mp3", "VOICE04/AUD_ELP_VOICE04_13.mp3", "VOICE04/AUD_ELP_VOICE04_14.mp3", "VOICE04/AUD_ELP_VOICE04_15.mp3", "VOICE04/AUD_ELP_VOICE04_16.mp3", "VOICE04/AUD_ELP_VOICE04_17.mp3", "VOICE04/AUD_ELP_VOICE04_18.mp3", "VOICE04/AUD_ELP_VOICE04_19.mp3", "VOICE04/AUD_ELP_VOICE04_20.mp3", "VOICE04/AUD_ELP_VOICE04_21.mp3", "VOICE04/AUD_ELP_VOICE04_22.mp3"];
	//sadtato's voice
	var arr_voice05 = ["VOICE_BADTATO/AUD_ELP_VOICE_BADTATO_01.mp3", "VOICE_BADTATO/AUD_ELP_VOICE_BADTATO_02.mp3", "VOICE_BADTATO/AUD_ELP_VOICE_BADTATO_03.mp3", "VOICE_BADTATO/AUD_ELP_VOICE_BADTATO_04.mp3", "VOICE_BADTATO/AUD_ELP_VOICE_BADTATO_05.mp3", "VOICE_BADTATO/AUD_ELP_VOICE_BADTATO_06.mp3", "VOICE_BADTATO/AUD_ELP_VOICE_BADTATO_07.mp3", "VOICE_BADTATO/AUD_ELP_VOICE_BADTATO_08.mp3", "VOICE_BADTATO/AUD_ELP_VOICE_BADTATO_09.mp3", "VOICE_BADTATO/AUD_ELP_VOICE_BADTATO_10.mp3", "VOICE_BADTATO/AUD_ELP_VOICE_BADTATO_11.mp3", "VOICE_BADTATO/AUD_ELP_VOICE_BADTATO_12.mp3", "VOICE_BADTATO/AUD_ELP_VOICE_BADTATO_13.mp3", "VOICE_BADTATO/AUD_ELP_VOICE_BADTATO_14.mp3", "VOICE_BADTATO/AUD_ELP_VOICE_BADTATO_15.mp3", "VOICE_BADTATO/AUD_ELP_VOICE_BADTATO_16.mp3", "VOICE_BADTATO/AUD_ELP_VOICE_BADTATO_17.mp3", "VOICE_BADTATO/AUD_ELP_VOICE_BADTATO_18.mp3", "VOICE_BADTATO/AUD_ELP_VOICE_BADTATO_19.mp3", "VOICE_BADTATO/AUD_ELP_VOICE_BADTATO_20.mp3"];

	var arr_snd;//the selected voice
	
	//chosing a random potato
	var arr_randpotatos = ["SPUDDY", "MELVIN", "MEDCLIF", "FRENGLIN"];
	//if random chose one
	if(str == "RANDOM" || str == null){
		str = arr_randpotatos[Math.ceil(Math.random()*arr_randpotatos.length)-1];
	}
	
	var num_talk = 20; //countdown till next talking
	var num_delay = 5; //seconds to reset when talking
	var timer_potatoreset;//interval id
	
	//paths to potato image folder (in the event potatoes should be relocated to another field)
	var str_image_path = "electric_love_potato_js/images/";
	var str_audio_path = "electric_love_potato_js/audio/";
	
	var snd_potato; //play this
	
	var bool_mashedpotato; //the potato is mashed (sadtato)
	
	/////////////////////////////////AUDIO///////////////////////////////////
	function returnArray(){
		//set text
		if(str == "MEDCLIF" || str == "FRENGLIN"){
			arr_selected = arr_dialogue;
		}else{
			arr_selected = arr_dialogueASCII;
		}
		//set audio
		if(str == "SPUDDY"){
			arr_snd = arr_voice03;
		}else if(str == "MELVIN"){
			arr_snd = arr_voice02;
		}else if(str == "MEDCLIF"){
			arr_snd = arr_voice01;
		}else if(str == "FRENGLIN"){
			arr_snd = arr_voice04;
		}else{
			arr_snd = arr_voice01;
		}
	}
	
	/////////////////////////////////GRAPHICAL ASSETS/////////////////////

	//this is a mess but i am not fixing it
	//messy potato salad... (potato salad is messy by nature)
	function _potatosalad(id, type, str, appendto, num_alignleft, num_alignbottom){
		_makethis = document.createElement("div");
		_makethis.id = id;
		_makethis.style.position = "fixed";
		_makethis.style.left = num_alignleft + 'px';
		_makethis.style.bottom = num_alignbottom + 'px';
		//_makethis.style.pointerEvents = "none";
		//if image it's an image
		if(type == "img"){
			_makethis.innerHTML = "<img src=" + str + ">";
		};
		if(type == "text"){
			_makethis.innerHTML = str;
			_makethis.style.textAlign = "center";
			_makethis.style.font = "15px Lucida Console, Monaco, monospace, sans-serif";
			_makethis.style.color = "white";
			_makethis.style.width = "240px";
			_makethis.style.height = "55px";
		}
		//
		if(appendto == null){
			document.getElementsByTagName("body")[0].appendChild(_makethis);
		}else{
			appendto = document.getElementById(appendto);
			appendto.appendChild(_makethis);
		}
	}
	
	//hidepotato
	function _hidepotato(div){
		document.getElementById(div).style.visibility = "hidden";
	}
	//showpotato
	function _showpotato(div){
		document.getElementById(div).style.visibility = "visible";
	}
	
	//play talking state
	function _potatotalking(){
		_hidepotato("_potato_idle");
		_showpotato("_potato_talking");
	}
	
	//play/return to idle state
	function _potatoidle(){
		_hidepotato("_potato_talking");
		_showpotato("_potato_idle");
	}
	
	function _setdialogue(str){
		//different text for mashedpotato
		if(bool_mashedpotato){
			document.getElementById("_potato_dialogue").innerHTML = "*" + str + "*";
		}else{
			document.getElementById("_potato_dialogue").innerHTML = str;
		}
	}
	
	function _playAudio(str){
			snd_potato = new Audio(str_audio_path + str);
			snd_potato.play();
	}
	
	function _stopAudio(){
		if(snd_potato != undefined){
			snd_potato.pause();
		}
	}
	
	//////////////////////////////////RUN////////////////////////////
	
	//resets talking when audio should be done
	//uses an interval instead of "on audio complete" because mobile and browser support
	function resetTalking(){
		//count down to reset then...
		num_talk -= 1;
		//...reset state
		if(num_talk <= 0){
			clearInterval(timer_potatoreset);
			_potatoidle();
			num_talk =  Math.ceil(Math.random()*5)+Math.ceil(Math.random()*5)+5;
			//start
			timer_potatoreset = setInterval(potatoTalking, 1000);
		}
	}
	
	function firstrun(){
			//startup
			var arr_bootup = ["HI MY NAME IS "+str+" AND I LUV U!", "HI MY NAME IS "+str+" AND I AM SO HAPPY U CHOOSE ME!", "YAY MY NAME IS "+str+" AND I AM PRIVILEGED U CHOSE ME!", "OMG YAY MY NAME IS "+str+" AND I AM SO HAPPY!", "OMG OMG MY NAME IS "+str+" AND I WILL NOT DISAPPOINT!", "YAY YAY I AM "+str+" THE POTATO AND I AM SO HAPPY!", "YAY I AM "+str+" THE POTATO. I LOVE U SO MUCH!", "I AM "+str+" THE POTATO! HOW R U? I LUV U!!"];
			var arr_bootupASCI = ["<3 <3 = "+str+" :D <3 U!", ":D "+str+" <3 U!", ":o OMG! "+str+" ^o^", ":D "+str+" <3!!!", ":D :D "+str+"!!", "OMG OMG ^o^ "+str+"!!", "-_- "+str+" ^o^ !!"];
			var arr;
			//
			if(str == "MEDCLIF" || str == "FRENGLIN"){
				arr = arr_bootup;
			}else{
				arr = arr_bootupASCI;
			}
			//
			returnArray();
			//
			num_talk = num_delay;
			//
			_hidepotato("_badtatoprompt");
			//
			_playAudio(arr_snd[Math.ceil(Math.random()*arr_snd.length)-1]);
			_potatotalking();
			_setdialogue(arr[Math.ceil(Math.random()*arr.length)-1]);
			//
			timer_potatoreset = setInterval(resetTalking, 1000);
	}
	
	//controls talking (count down to this)
	function potatoTalking(){
		//countdown
		num_talk -= 1;
		//start talking
		if(num_talk <= 0){
			_setdialogue(arr_selected[Math.ceil(Math.random()*arr_selected.length)-1]);
			_potatotalking();
			num_talk = num_delay;
			_playAudio(arr_snd[Math.ceil(Math.random()*arr_snd.length)-1]);
			clearInterval(timer_potatoreset);
			timer_potatoreset = setInterval(resetTalking, 1000);
		}
	}
	
	/////////////////////////////////EVENTS / BUTTONS/////////////////////
	
	// :(
	function _quitpotato(){
		//remove
		clearInterval(timer_potatoreset);
		document.getElementById("_potato").remove();
		//audio stop
		_stopAudio();
	};
	
	function _badtatoPrompt(){
		_showpotato("_badtatoprompt");
	}
	
	function _mashpotato(){
		//prompt
		console.log("You have chosen to mash " + str + ". This website's potato is now in SADTATO mode.");
		//clear all
		_hidepotato("_badtatoprompt");
		_stopAudio();
		clearInterval(timer_potatoreset);
		bool_mashedpotato = true;
		//remove un-mashed potato
		//(could just swap images but firefox doens't like swapping gifs)
		document.getElementById("_potato_idle").remove();
		document.getElementById("_potato_talking").remove();
		document.getElementById("_mashpotato").remove();
		//mash the potato
		_potatosalad("_potato_idle", "img", str_image_path+"IMG_BADTATO_IDLE.gif", "_potato", 15, 85);
		_potatosalad("_potato_talking", "img", str_image_path+"IMG_BADTATO_TALKING.gif", "_potato", 15, 85);
		document.getElementById("_potato_title").innerHTML = arr_badtato_name[Math.ceil(Math.random()*arr_badtato_name.length)-1];
		//arrays
		arr = arr_badtato_text;
		arr_snd = arr_voice05;
		arr_selected = arr_badtato_text;
		//start again
		_playAudio(arr_snd[Math.ceil(Math.random()*arr_snd.length)-1]);
		_potatotalking();
		_setdialogue(arr[Math.ceil(Math.random()*arr.length)-1]);
		//
		timer_potatoreset = setInterval(resetTalking, 1000);
	}
	
	/////////////////////////////////SETUP / INIT/////////////////////
	
	//build messy potato salad (potato salad is messy by nature)
	_potatosalad("_potato", null, null, null, 0, 0);
	_potatosalad("_potato_background", "img", str_image_path+"IMG_ELP_WINDOW_01.png", "_potato", 0, 0);
	_potatosalad("_potato_title", "text", str, "_potato", 10, 198);
	_potatosalad("_potato_dialogue", "text", "", "_potato", 7, 23);
	//idle and talking animations
	_potatosalad("_potato_idle", "img", str_image_path+"IMG_"+str+"_IDLE.gif", "_potato", 15, 85);
	_potatosalad("_potato_talking", "img", str_image_path+"IMG_"+str+"_TALKING.gif", "_potato", 15, 85);
	//buttons
	_potatosalad("_closepotato", "img", str_image_path+"IMG_ELP_WINDOW_CLOSE_01.png", "_potato", 231, 235); //close button
	_potatosalad("_mashpotato", "img", str_image_path+"IMG_ELP_WINDOW_MASH_01.png", "_potato", 189, 1);
	//mash potato prompt (container and assets)
	_potatosalad("_badtatoprompt", "img", str_image_path+"IMG_ELP_WINDOW_MASH.png", "_potato", 0, 0);
	_potatosalad("_badyes", "img", str_image_path+"IMG_ELP_WINDOW_MASH_YES_01.png", "_badtatoprompt", 15, 45);
	_potatosalad("_badno", "img", str_image_path+"IMG_ELP_WINDOW_MASH_CANCEL_01.png", "_badtatoprompt", 175, 45);
	
	//buttons
	//close potato
	document.getElementById("_closepotato").addEventListener('mousedown', function(){
		document.getElementById("_closepotato").innerHTML = "<img src=" + str_image_path + "IMG_ELP_WINDOW_CLOSE_02.png" + ">";
	});
	document.getElementById("_closepotato").addEventListener('mouseup', function(){
		document.getElementById("_closepotato").innerHTML = "<img src=" + str_image_path + "IMG_ELP_WINDOW_CLOSE_01.png" + ">";
		_quitpotato();
	});
	//mash potato (pull up prompt)
	document.getElementById("_mashpotato").addEventListener('mousedown', function(){
		document.getElementById("_mashpotato").innerHTML = "<img src=" + str_image_path + "IMG_ELP_WINDOW_MASH_02.png" + ">";
	});
	document.getElementById("_mashpotato").addEventListener('mouseup', function(){
		document.getElementById("_mashpotato").innerHTML = "<img src=" + str_image_path + "IMG_ELP_WINDOW_MASH_01.png" + ">";
		_badtatoPrompt();
	});
	//mash potato buttons (prompt)
	document.getElementById("_badyes").addEventListener('mousedown', function(){
		document.getElementById("_badyes").innerHTML = "<img src=" + str_image_path + "IMG_ELP_WINDOW_MASH_YES_02.png" + ">";
	});
	document.getElementById("_badyes").addEventListener('mouseup', function(){
		document.getElementById("_badyes").innerHTML = "<img src=" + str_image_path + "IMG_ELP_WINDOW_MASH_YES_01.png" + ">";
		_mashpotato();
	});
	document.getElementById("_badno").addEventListener('mousedown', function(){
		document.getElementById("_badno").innerHTML = "<img src=" + str_image_path + "IMG_ELP_WINDOW_MASH_CANCEL_02.png" + ">";
	});
	document.getElementById("_badno").addEventListener('mouseup', function(){
		document.getElementById("_badno").innerHTML = "<img src=" + str_image_path + "IMG_ELP_WINDOW_MASH_CANCEL_01.png" + ">";
		_hidepotato("_badtatoprompt");
	});
	
	//start
	firstrun();
	
	//CONGRATULATIONS: now you have a potato! this is your potato:
	console.log("This website is now hosting " + str + ", an Electric Love Potato.");
}






