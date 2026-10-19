// Fixed editorial catalog. No AI service generates recommendations.
// Budget tiers are planning estimates, not live Amazon prices.
export const categories={games:{name:'Video games',group:'nerdy'},books:{name:'Fantasy & reading',group:'nerdy'},tabletop:{name:'Dungeons & Dragons',group:'nerdy'},outdoors:{name:'Hiking & camping',group:'outside'},hunting:{name:'Hunting & fishing',group:'outside'},art:{name:'Art & making things',group:'creative'},music:{name:'Music',group:'creative'},cooking:{name:'Cooking & baking',group:'food'},drinks:{name:'Coffee & tea',group:'food'},fitness:{name:'Fitness & sports',group:'active'},tech:{name:'Tech & gadgets',group:'active'},cozy:{name:'Cozy & personal',group:'everyday'}};
// name | budget tier | style | description | buying check | Amazon search terms
const rows={
games:[
['Controller thumb grips',1,'practical','A small comfort upgrade for long play sessions.','Match the grip shape to the controller model.','gaming controller thumb grips'],
['Gaming desk mat',1,'practical','A large mat for their keyboard and mouse.','Measure the desk and look for a washable surface.','large gaming desk mat'],
['Game-themed enamel pin',1,'personal','A little nod to the game they talk about most.','Choose a franchise they play and an authorized design.','licensed video game enamel pin'],
['Gaming controller',2,'practical','For games they prefer to play with a controller.','Confirm PC or console compatibility and wired versus wireless.','gaming controller'],
['Gaming headset',3,'practical','For chat, co-op nights, and hearing the little details.','Check microphone needs, connector, and platform support.','gaming headset with microphone'],
['Mechanical gaming keyboard',4,'wow','A centerpiece for a PC setup they use every day.','Check layout, switch preference, noise, and desk space.','mechanical gaming keyboard']],
books:[
['Rechargeable reading light',1,'practical','For reading in bed or in low light.','Check brightness, weight, and how the light attaches.','rechargeable book reading light'],
['Reading journal',1,'personal','A place for favorite quotes and the books they finish.','Check whether they prefer guided prompts or blank pages.','reading journal book tracker'],
['Fantasy-themed bookmark set',1,'personal','A small keepsake for the worlds they return to.','Pick a favorite series and check design permissions.','fantasy metal bookmark set'],
['Collectible hardcover novel',2,'personal','A special edition of a book they love.','Confirm the title, edition, and whether they already own it.','fantasy collectible hardcover book'],
['Fantasy character model',3,'wow','Brings a favorite fictional character onto their shelf.','Confirm the character; for Stormlight Archive, verify the maker and licensing.','Stormlight Archive character collectible figure'],
['Book nook building kit',4,'fun','A miniature world to build between the books.','Check assembly time, included tools, and lighting requirements.','DIY book nook miniature kit']],
tabletop:[
['Polyhedral dice set',1,'fun','A fresh set of dice for the next D&D campaign.','Look for seven pieces and readable numbers.','Dungeons Dragons polyhedral dice set'],
['Drawstring dice bag',1,'practical','Keeps their lucky dice together between sessions.','Check capacity and closure quality.','tabletop dice bag'],
['Character journal',1,'personal','A home for backstory, inventory, and campaign notes.','Match the format to the game and edition they play.','Dungeons Dragons character journal'],
['Folding dice tray',2,'practical','Keeps dramatic rolls from escaping the table.','Check size, lining, and portability.','folding dice tray tabletop'],
['Metal polyhedral dice',3,'wow','A weightier gift for someone who loves a good roll.','Use a lined tray and check readable numbers.','metal polyhedral dice set'],
['Paintable fantasy miniatures set',4,'fun','Adds characters and creatures to their tabletop world.','Confirm scale and whether paints are included.','unpainted fantasy tabletop miniatures set']],
outdoors:[
['Camping utensil set',1,'practical','A reusable upgrade for meals on the trail.','Check weight and whether it includes a case.','camping utensil set reusable'],
['Hiking sit pad',1,'practical','Makes a scenic snack stop more comfortable.','Check packed size and insulation.','foldable hiking sit pad'],
['Trail journal',1,'personal','A place to keep routes, memories, and future adventures.','Choose a portable size and durable cover.','hiking trail journal'],
['Rechargeable headlamp',2,'practical','Keeps hands free around camp or on evening walks.','Check runtime, weather resistance, and charging method.','rechargeable hiking headlamp'],
['Camping hammock with straps',3,'fun','For slow afternoons between adventures.','Verify weight rating, included straps, and local use rules.','camping hammock tree straps'],
['Compact camping chair',4,'wow','A comfortable seat for their favorite outdoor spot.','Check packed weight and rated capacity.','lightweight compact camping chair']],
hunting:[
['Bullet cartridge writing pen',1,'personal','An outdoors-inspired detail they can use every day.','Choose a finished writing pen and confirm refill type.','bullet cartridge writing pen'],
['Fishing lure organizer',1,'practical','Keeps favorite tackle easy to find.','Check compartment size and whether tackle is included.','fishing lure organizer tackle box'],
['Hunting field notebook',1,'personal','A place for observations and memories from the field.','Look for durable paper and a pocket-sized cover.','hunting field notebook waterproof'],
['Insulated outdoor flask',2,'practical','Keeps a warm drink close on early mornings.','Check capacity, leak resistance, and cleaning instructions.','insulated thermos hot drinks outdoor'],
['Rechargeable hand warmers',3,'practical','A comfort gift for cold days outside.','Follow battery and heat-use instructions; check runtime.','rechargeable hand warmers pair'],
['Compact binoculars',4,'wow','For watching wildlife and exploring the landscape.','Ask about magnification preferences and verify weight.','compact wildlife binoculars']],
art:[
['Mixed-media sketchbook',1,'personal','A fresh space for ideas, sketches, and experiments.','Match paper weight to their preferred medium.','mixed media sketchbook'],
['Brush pen lettering set',1,'fun','For cards, lettering, and creative notes.','Check tip style and whether ink is water-based.','brush pen lettering set'],
['Embroidery starter kit',1,'fun','A small project with something to show for it.','Check included supplies and difficulty.','embroidery beginner kit'],
['Watercolor travel set',2,'fun','Makes painting portable and easy to pick up.','Check included brushes and paper requirements.','watercolor travel paint set'],
['Air-dry clay craft kit',3,'fun','A hands-on afternoon making something their own.','Check tools, drying instructions, and paint supplies.','air dry clay pottery craft kit'],
['Pen drawing tablet',4,'wow','For taking sketches onto a digital canvas.','Check computer compatibility; most need a separate screen.','digital drawing tablet pen']],
music:[
['Guitar pick variety pack',1,'practical','Lets a guitarist experiment with feel and tone.','Confirm they play a picked instrument and ask about thickness.','guitar pick variety pack'],
['Music practice notebook',1,'personal','A simple place to track songs and progress.','Choose notation paper or practice prompts to suit them.','music practice journal'],
['Record display stand',1,'personal','Puts a favorite album cover on show.','Check size and whether it holds sleeves safely.','vinyl record display stand'],
['Clip-on instrument tuner',2,'practical','A useful companion to regular practice.','Verify the tuner supports their instrument.','clip on instrument tuner'],
['Portable Bluetooth speaker',3,'fun','For playlists while cooking, relaxing, or hanging out.','Check battery life and whether portability matters.','portable bluetooth speaker'],
['Over-ear headphones',4,'wow','For getting lost in a favorite album.','Ask about wired versus wireless and comfort preferences.','over ear headphones music']],
cooking:[
['Silicone baking spatula set',1,'practical','An everyday helper for someone who loves the kitchen.','Check heat rating and dishwasher instructions.','silicone baking spatula set'],
['Cookie cutter collection',1,'fun','Adds personality to the next baking day.','Choose shapes they like and check cleaning instructions.','cookie cutter set baking'],
['Recipe notebook',1,'personal','A place for family recipes and their own experiments.','Check layout and space for ingredients and notes.','blank recipe notebook'],
['Digital kitchen scale',2,'practical','Helps a baker measure consistently.','Check units, capacity, and battery requirements.','digital kitchen scale baking'],
['Pasta-making starter tools',3,'fun','Turns a dinner into a hands-on project.','Check included tools and whether a machine is required.','manual pasta making tools kit'],
['Enameled Dutch oven',4,'wow','A substantial kitchen gift for bread, stews, and slow meals.','Confirm size, cooktop compatibility, and lifting weight.','enameled dutch oven']],
drinks:[
['Loose-leaf tea infuser',1,'practical','Makes a favorite loose-leaf tea easier to brew.','Check mug fit and cleaning instructions.','stainless loose leaf tea infuser'],
['Coffee tasting notebook',1,'personal','For remembering favorite beans and brewing experiments.','Make sure they enjoy tracking flavors and recipes.','coffee tasting journal'],
['Ceramic tea or coffee mug',1,'personal','A daily reminder of a person who knows them well.','Choose a handle and capacity they like.','ceramic coffee tea mug'],
['Milk frother',2,'fun','Adds a cafe-style touch to drinks at home.','Check whether it heats milk or only froths.','milk frother electric'],
['Manual coffee grinder',3,'practical','For someone who likes making each cup from scratch.','Check grind range and effort required.','manual burr coffee grinder'],
['Temperature-control kettle',4,'wow','Gives a tea or pour-over enthusiast more control.','Check capacity, temperature settings, and counter space.','variable temperature electric kettle']],
fitness:[
['Workout logbook',1,'personal','A place to track effort and see progress.','Match the format to strength training or general fitness.','workout logbook'],
['Microfiber gym towel',1,'practical','An easy everyday upgrade for their gym bag.','Check size and laundering instructions.','microfiber gym towel'],
['Adjustable jump rope',1,'fun','A compact way to mix up a workout.','Check length and handle style.','adjustable fitness jump rope'],
['Resistance band set',2,'practical','Adds variety to home workouts or warmups.','Check resistance range and safe-use instructions.','resistance exercise band set'],
['Yoga mat',3,'practical','Creates a comfortable space for movement and stretching.','Ask about thickness, grip, and material preferences.','non slip yoga mat'],
['Adjustable dumbbell',4,'wow','A useful centerpiece for a small home workout space.','Check whether sold singly or as a pair and match training needs.','adjustable dumbbell home gym']],
tech:[
['Reusable cable organizer set',1,'practical','Brings order to a desk or travel bag.','Check cable sizes and adhesive requirements.','reusable cable organizer set'],
['Foldable phone stand',1,'practical','Keeps calls and videos at a comfortable angle.','Check stability and case compatibility.','foldable phone desk stand'],
['Keyboard cleaning kit',1,'practical','A satisfying refresh for a much-used setup.','Follow device cleaning guidance and keep liquid out of openings.','keyboard cleaning brush kit'],
['Portable power bank',2,'practical','Helps keep a phone charged on long days out.','Check connector, capacity, and airline rules when traveling.','portable phone power bank'],
['Multi-device charging station',3,'practical','Gives daily devices a tidy place to recharge.','Confirm phone, watch, and earbud compatibility.','multi device charging station'],
['Portable photo printer',4,'wow','Turns favorite phone photos into something to keep.','Check phone support and ongoing paper costs.','portable smartphone photo printer']],
cozy:[
['Soft lounge socks',1,'practical','A small comfort for slow mornings and evenings in.','Confirm size range and fabric preferences.','soft cozy lounge socks'],
['Fill-in appreciation book',1,'personal','Fill the prompts with shared memories and things you appreciate about them.','Choose a friendship, family, or partner edition that fits your relationship. Set aside time to write in it.','fill in appreciation book'],
['Photo frame',1,'personal','A simple home for a memory you share.','Print a photo and match its dimensions to the frame.','photo frame tabletop'],
['Soft throw blanket',2,'practical','For movie nights, reading, and getting comfortable.','Check dimensions and wash instructions.','soft throw blanket'],
['Building-block flower bouquet',3,'fun','A colorful gift and a project to make together.','Check pieces, assembly time, and display space.','building block flower bouquet'],
['Digital photo frame',4,'wow','Keeps favorite people and memories close.','Check upload method, Wi-Fi needs, and subscription costs.','digital photo frame']]
};
export const gifts=Object.entries(rows).flatMap(([category,items])=>items.map(([name,budget,style,description,check,query],index)=>({id:`${category}-${index+1}`,category,name,budget,style:style==='wow'?'practical':style,description,check,query,url:'',minAge:13,merchant:'amazon',kind:name.toLowerCase(),interests:[category],personalized:false,affiliate:true})));
export const config={affiliateTag:'bestguess0f-20'};

// Product identity checked on Amazon; no live price or availability claims.
const listings = {
  'games-4':{asin:'B0D6BGS5TH',name:'8BitDo Ultimate 2C Wireless Controller — Purple',note:'For Windows PCs and Android devices. Confirm the exact system and connection before buying.'},
  'games-5':{asin:'B01H6GUCCQ',name:'BENGOO G9000 wired gaming headset',note:'Check the audio connector and any adapter their system needs. The USB cable powers the lighting.'},
  'books-1':{asin:'B07WNRN9WQ',name:'Glocusent rechargeable neck reading light',note:'Worn around the neck. Check weight, brightness settings, and charging requirements.'},
  'books-2':{asin:'1441304827',name:"The Book Lover’s Journal",note:'Check the page layout, format, and dimensions against how they like to keep reading notes.'},
  'tech-2':{asin:'B09MCKK9NX',name:'Lamicall adjustable foldable phone stand',note:'Check their phone size and case thickness. Holds the phone upright; charging requires a separate cable.'}
};
for (const gift of gifts) {
  const listing = listings[gift.id];
  if (listing) {
    gift.url = `https://www.amazon.com/dp/${listing.asin}`;
    gift.listingName = listing.name;
    gift.asin = listing.asin;
    gift.check = listing.note;
  }
}

export const merchants={
  amazon:{name:'Amazon',affiliate:true},
  bookshop:{name:'Bookshop.org',affiliate:false},
  lovebook:{name:'LoveBook',affiliate:false},
  personalizationmall:{name:'Personalization Mall',affiliate:false},
  miniaturemarket:{name:'Miniature Market',affiliate:false},
  lovepop:{name:'Lovepop',affiliate:false}
};

// Observed regular/list prices determine conservative planning bands.
// No live prices, merchant images, ratings, or invented affiliate IDs are used.
const product=(id,name,merchant,url,budget,interests,style,description,check,extra={})=>({id,name,listingName:name,merchant,url,budget,interests,category:interests[0],style,description,check,minAge:13,personalized:false,affiliate:false,kind:id,...extra});
gifts.push(
  product('bookshop-tress','Tress of the Emerald Sea — paperback','bookshop','https://bookshop.org/p/books/tress-of-the-emerald-sea-a-cosmere-novel-brandon-sanderson/c87431b47b4c79dd?ean=9781250899668',1,['books'],'fun','A standalone Brandon Sanderson adventure with pirates, fairy-tale twists, and unusual magic.','Check that they do not own it already. This link opens the paperback edition.',{kind:'novel',note:'Standalone fantasy'}),
  product('bookshop-mistborn','Mistborn: The Final Empire — paperback','bookshop','https://bookshop.org/p/books/mistborn-the-final-empire-brandon-sanderson/b0740ffce395e5df?ean=9781250318541',1,['books'],'fun','A fantasy heist with metal-powered magic, and the first book in the original Mistborn trilogy.','Choose it for someone interested in starting a series. This is a mass-market paperback.',{kind:'novel',note:'First in a series'}),
  product('bookshop-way-of-kings','The Way of Kings — hardcover','bookshop','https://bookshop.org/p/books/the-way-of-kings-brandon-sanderson/7c762971332a683a?ean=9780765326355',2,['books'],'personal','The first Stormlight Archive novel in hardcover for a reader who enjoys long epic fantasy.','Check their collection and preferred format. This hardcover is ISBN 9780765326355.',{kind:'special-edition',note:'Hardcover fantasy'}),
  product('bookshop-hobbit','The Hobbit — Jemima Catlin illustrated edition','bookshop','https://bookshop.org/p/books/the-hobbit-illustrated-edition-j-r-r-tolkien/1a44a3e0eed04118?ean=9780544174221',2,['books','art'],'personal','Bilbo’s adventure in a hardcover filled with Jemima Catlin’s illustrations.','Confirm the illustrator and edition: ISBN 9780544174221. A Tolkien collector may already own it.',{kind:'special-edition',note:'Illustrated hardcover'}),
  product('bookshop-bibliophile','Bibliophile Reader’s Journal — Jane Mount','bookshop','https://bookshop.org/p/books/bibliophile-reader-s-journal-gift-for-book-lovers-journal-for-readers-and-writers-jane-mount/12d62a5aa611dbae?ean=9781452167312',1,['books'],'practical','Guided space for book ratings, reading notes, and a growing reading list.','Look at the page layout and ask whether they enjoy keeping handwritten reading notes.',{kind:'reading-journal',note:'For reading notes'}),
  product('bookshop-reading-life','My Reading Life — Spruce Books journal','bookshop','https://bookshop.org/p/books/my-reading-life-what-i-read-how-it-felt-and-what-i-thought-a-book-journal-for-book-lovers-gifts-for-book-lovers-gifts-for-readers-spruce-books/dd8b04f54fba48ee?ean=9781632174222',1,['books'],'personal','A guided journal with room to reflect on more than 70 books.','This is the Spruce Books journal, ISBN 9781632174222. Check that the prompts suit their reading habits.',{kind:'reading-journal',note:'Guided book journal',minAge:16}),
  product('lovebook-partner','Personalized LoveBook for your partner','lovebook','https://lovebookonline.com/shopping-lovebook-anniversary-gifts',3,['cozy'],'personal','Build an illustrated book around your shared memories and the reasons you love them.','Allow time to write and proofread the book. Check the delivery estimate and selected format; membership is optional.',{kind:'custom-book',personalized:true,minAge:18,audiences:['partner'],note:'You customize the pages'}),
  product('lovebook-friend','Personalized friendship LoveBook','lovebook','https://lovebookonline.com/shopping-lovebook-best-friend-gifts',3,['cozy'],'personal','Turn your shared jokes and favorite memories into an illustrated friendship keepsake.','Proofread names and text, choose paperback or hardcover, and check the delivery estimate.',{kind:'custom-book',personalized:true,audiences:['friend'],note:'You customize the pages'}),
  product('lovebook-activity','The Big Activity Book for Couples','lovebook','https://lovebookonline.com/shop/activity-books/pab-big-activity-book',1,['cozy','boardgames'],'fun','Paper puzzles, quizzes, and games for a quiet date night together.','Choose for an adult couple who enjoys pen-and-paper activities. Check the contents and delivery date.',{kind:'activity-book',minAge:18,audiences:['partner'],note:'For a date night'}),
  product('pm-mug','Signature Style personalized coffee mug','personalizationmall','https://www.personalizationmall.com/Personalized-Coffee-Mugs-My-Name-p13697.prod',1,['drinks','cozy'],'personal','Put their name and favorite colors on an everyday mug.','Check the selected size and color. Proofread the name before ordering.',{kind:'mug',personalized:true,note:'Add their name'}),
  product('pm-blanket','Picture Perfect single-photo fleece blanket','personalizationmall','https://www.personalizationmall.com/Personalized-Fleece-Blankets-Picture-Perfect-Single-Photo-i50482.item?productid=18702',3,['cozy'],'personal','A shared trip, favorite pet, or family photo becomes a blanket for quiet evenings.','Use a sharp photo and inspect the crop. The researched version is 50 × 60 inches; other fabrics and sizes cost more.',{kind:'blanket',personalized:true,note:'Upload one photo'}),
  product('pm-puzzle','Picture Perfect 500-piece photo puzzle','personalizationmall','https://www.personalizationmall.com/Personalized-Jumbo-Photo-Puzzle-Picture-Perfect-p19983.prod',2,['art','boardgames','cozy'],'fun','Turn a favorite photo into a puzzle to put together.','Choose a clear photo with varied detail. Check the layout and the finished 20 × 16 inch size.',{kind:'puzzle',personalized:true,note:'500 pieces · custom photo'}),
  product('pm-mousepad','Picture Perfect personalized photo mouse pad','personalizationmall','https://www.personalizationmall.com/Personalized-Photo-Mouse-Pad-Picture-Perfect-p17409.prod',1,['games','tech','cozy'],'personal','Three favorite photos add a personal touch to their desk.','Check the image crops and 9.25 × 7.75 inch size. Choose this for everyday desk use.',{kind:'desk-accessory',personalized:true,note:'A compact desk gift'}),
  product('pm-recipes','Favorite Family Recipe personalized recipe box','personalizationmall','https://www.personalizationmall.com/Personalized-Recipe-Box-Favorite-Family-Recipe-p41020.prod',2,['cooking','cozy'],'personal','An engraved wooden box for family recipes. Add a few favorites before giving it.','Holds 3 × 5 inch cards. Recipe cards and dividers are sold separately, so include them in your budget.',{kind:'recipe-box',personalized:true,note:'Add family recipes'}),
  product('pm-guitar','Design Your Own guitar picks — set of 20','personalizationmall','https://www.personalizationmall.com/Design-Your-Own-Personalized-Guitar-Pick-Set-of-20-i49447.item?productid=18354',1,['music','art'],'personal','A name, short message, or band design on a set of guitar picks.','Confirm they like 0.71 mm picks in the classic 351 shape. Use artwork you have permission to print.',{kind:'guitar-picks',personalized:true,note:'20 custom picks'}),
  product('pm-frame','I Choose You personalized picture frame','personalizationmall','https://www.personalizationmall.com/I-Choose-You-Personalized-Romantic-Picture-Frame-p49630.prod',2,['cozy'],'personal','A frame with your names and a short message. Print a favorite photo to go inside.','Holds a vertical 4 × 6 inch photo. Check the crop, color, and spelling; printing the photo is a separate task.',{kind:'photo-frame',personalized:true,minAge:18,audiences:['partner'],note:'Add a photo and names'}),
  product('mm-dice','Game Plus skull resin dice — seven-piece set','miniaturemarket','https://www.miniaturemarket.com/game-plus-products-16mm-resin-dice-diamond-skull-with-silver-7-gps-sg13-6.html',1,['tabletop'],'fun','A skull-themed polyhedral dice set for their next tabletop character.','Confirm they use physical dice. This set includes the seven standard dice; color patterns can vary.',{kind:'dice-set',note:'Seven polyhedral dice'}),
  product('mm-azul','Azul Duel','miniaturemarket','https://www.miniaturemarket.com/azul-duel-nmg60160en.html',2,['boardgames','art','cozy'],'fun','A two-player tile game for people who enjoy a little competition.','Exactly two players, about 45 minutes. Check that they do not own this Duel edition and confirm shipping to their location.',{kind:'board-game',note:'2 players · about 45 min'}),
  product('mm-codenames','Codenames — second edition','miniaturemarket','https://www.miniaturemarket.com/codenames-second-edition-cge00125.html',1,['boardgames'],'fun','A word-clue game for the person who brings friends together.','The English-language group game supports 4–8 players. Check their group size and whether they own an earlier edition.',{kind:'board-game',note:'4–8 players · about 15 min'}),
  product('lovepop-flowers','Wildflower Bouquet — paper bouquet','lovepop','https://www.lovepop.com/products/wildflower-bouquet-1',1,['cozy','art'],'personal','A paper bouquet to keep on a desk or shelf, with room for your message.','Check the 12 inch display height. Mailing it yourself may require a protective mailer and extra postage.',{kind:'paper-flowers',note:'Includes a blank note'}),
  product('lovepop-gamer','Video Gamer Pop-Up Card','lovepop','https://www.lovepop.com/products/video-gamer-pop-up-card',1,['games'],'personal','A controller-shaped paper card with space for your own message.','This is a 5 × 7 inch greeting card with an envelope. Check postage if you plan to mail it.',{kind:'greeting-card',note:'A card for a gamer'})
);

const kinds={'games-1':'controller-accessory','games-2':'desk-accessory','games-3':'pin','games-4':'controller','games-5':'headset','games-6':'keyboard','books-1':'reading-light','books-2':'reading-journal','books-3':'bookmark','books-4':'novel','books-5':'collectible','books-6':'building-kit','tabletop-1':'dice-set','tabletop-2':'dice-bag','tabletop-3':'journal','tabletop-4':'dice-tray','tabletop-5':'dice-set','tabletop-6':'miniatures','cozy-2':'custom-book','cozy-3':'photo-frame','cozy-4':'blanket'};
for(const gift of gifts){
  if(kinds[gift.id])gift.kind=kinds[gift.id];
  if(gift.id==='games-4')gift.platforms=['pc','mobile'];
  if(gift.id==='games-5')gift.platforms=['pc','playstation','xbox','switch'];
  if(gift.id==='games-6')gift.platforms=['pc'];
  if(gift.id==='games-1')gift.platforms=['pc','playstation','xbox','switch'];
  if(gift.id==='cozy-2')gift.personalized=true;
}
// Owner-supplied, approved public affiliate URLs go here after enrollment.
// Preserve network URLs verbatim. Never put API keys or passwords in this file.
export const retailerLinks={};
