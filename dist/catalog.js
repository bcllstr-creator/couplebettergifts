// Fixed editorial catalog. No AI service generates recommendations.
// Budget tiers are planning estimates, not live Amazon prices.
export const categories={games:{name:'Video games',group:'nerdy'},books:{name:'Fantasy & reading',group:'nerdy'},tabletop:{name:'Dungeons & Dragons',group:'nerdy'},outdoors:{name:'Hiking & camping',group:'outside'},hunting:{name:'Hunting & fishing',group:'outside'},art:{name:'Art & making things',group:'creative'},music:{name:'Music',group:'creative'},cooking:{name:'Cooking & baking',group:'food'},drinks:{name:'Coffee & tea',group:'food'},fitness:{name:'Fitness & sports',group:'active'},tech:{name:'Tech & gadgets',group:'active'},cozy:{name:'Cozy & personal',group:'everyday'}};
// name | budget tier | style | description | buying check | Amazon search terms
const rows={
games:[
['Controller thumb grips',1,'practical','A small comfort upgrade for long play sessions.','Match the grip shape to the controller model.','gaming controller thumb grips'],
['Gaming desk mat',1,'practical','A large mat for their keyboard and mouse.','Measure the desk and look for a washable surface.','large gaming desk mat'],
['Game-themed enamel pin',1,'personal','A little nod to the game they talk about most.','Choose a franchise they play and an authorized design.','licensed video game enamel pin'],
['Gaming controller',2,'practical','For playing games with a controller on their PC or console.','Confirm PC or console compatibility and wired versus wireless.','gaming controller'],
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
['Fill-in appreciation book',1,'personal','A gift made thoughtful by your own words.','Set aside time to fill it in before giving.','fill in what I love about you book'],
['Photo frame',1,'personal','A simple home for a memory you share.','Print a photo and match its dimensions to the frame.','photo frame tabletop'],
['Soft throw blanket',2,'practical','For movie nights, reading, and getting comfortable.','Check dimensions and wash instructions.','soft throw blanket'],
['Building-block flower bouquet',3,'fun','A colorful gift and a project to make together.','Check pieces, assembly time, and display space.','building block flower bouquet'],
['Digital photo frame',4,'wow','Keeps favorite people and memories close.','Check upload method, Wi-Fi needs, and subscription costs.','digital photo frame']]
};
export const gifts=Object.entries(rows).flatMap(([category,items])=>items.map(([name,budget,style,description,check,query],index)=>({id:`${category}-${index+1}`,category,name,budget,style,description,check,query,url:'',minAge:13})));
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
