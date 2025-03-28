import { Injectable } from '@angular/core';


interface Safari{
  
  image:string;
  title:string;
  title2:string,
  description:string;
  description2:string
}
interface SafariDay{
  day:string;
  location:string;
  description:string;
}
interface SafariItenary{
  name:string;
  title2:string
  duration:number;
  days:SafariDay[];
  notes:string;
}

interface airDay{
  day:string;
  location:string;
  description:string;
}
interface airSafari{
  name:string;
  title:string;
  duration:number;
  days:airDay[];
  notes:string;

}

@Injectable({
  providedIn: 'root'
})

export class SafariService {

  safaris:Safari[]=[
    {
      
      image:'/images/zebra.gif',
      title:'SAFARI NALA',
      title2:'2 DAYS 1 NIGHT  - TSAVO EAST', 
      description:'Explore one of the largest animal sanctuaries in the world on Kenyan safari holiday: Tsavo National Park. Visit Kenyas largest game reserve!',
      description2:'Tsavo East includes several types of habitats: it is mainly flat, with large areas of savannah crossed by the Galana River , the union of Tsavo and Athi. The main relief is the Yatta Plateau, which with its 190 km of length represents the largest lava surface in the world.Due to its exceptional biodiversity, the park is considered one of the most valuable nature reserves in the world.'
    },
    {
      
      image:'/images/elephant.gif',
      title:'SAFARI SARABI',
      title2:'3 DAYS 2 NIGHTS  - TSAVO EAST & AMBOSELI',
     
      description:'Masai Mara National Reserve is one of the most popular tourism destinations in Kenya- Africa. The reserve is located in the Great Rift Valley',
      description2:'The park is home to all the so-called Big Five (lions, leopards, elephants, rhinos and buffalo) but the main inhabitants are the wildebeest (millions of them). They migrate from the Serengeti to the Masai Mara in spring and vice versa in autumn. There are also numerous other species of antelope, in particular the Thomsons gazelle and Grants gazelle, the impala, and others. Large herds of zebras are found throughout the reserve. The plains also inhabit the Masai giraffes. The birdlife includes hundreds of species.'
    },
    {
      
      image:'/images/leo.gif',
      title:'SAFARI ZAZU',
      title2:'4 DAY 3 NIGHTS - TAITA HILLS - AMBOSELI  - TSAVO EAST' ,

      description:'These 3 parks offer some of the best opportunities to see African wildlife , plus the landscapes are at their most beautiful after the rainy season, when everything seems to...',
      description2:'Being a corridor between Tsavo East and Tsavo West, the <strong>Taita Hills</strong> are the ideal place to go on a safari different from the others. <br>They are made up of three massifs: <strong>Dabida, Sagalla</strong> in the southern part of the Voi municipality and Kasigau in the south, near the border with Tanzania. In particular, the Dabida massif is the largest and highest of the three, with an altitude of 2,228 meters.<br><br><strong>Amboseli</strong> is known to be the<strong> best place in the world</strong> to get close to wild elephants, on the other hand other attractions of the park include the opportunity to meet Maasai and visit the Maasai village. Finally the park also has a <strong>breathtaking view of Mount Kilimanjaro</strong> , the highest free-standing mountain in the world.<br><br>In conclusion,These 3 parks offer some of the best opportunities to see <strong>African wildlife</strong> , plus the landscapes are at their most beautiful after the rainy season, when everything seems to take on pink tones and the acacia trees are covered in beautiful white flowers.'
    },
    {
     
      image:'/images/bird.gif',

      title:'SAFARI RAFIKI',
      title2:'5 DAYS 4 NIGHTS  - MASAI MARA - AMBOSELI - TSAVO EAST - WATAMU',
      
      description:'Explore Tsavo West National Park holidays and discover the best time and places to visit. | Welcome to the wilderness. Tsavo is one of Kenyas larger ...',
      description2:'Tsavo is the largest natural park in the country (almost as large as the whole of Tuscany). The park, which takes its name from the river that flows through it, was opened in April 1948 and is divided into Tsavo East and Tsavo West, divided by the A109, the road that goes from Nairobi to Mombasa.<br><br><strong>Tsavo West</strong> is where, at the beginning of the last century, the <strong>legend of the man-eating lions</strong> that inspired the film “The Ghost and the Darkness” took root, “opposing” the construction of the railway that would have connected the southern coast of Kenya with Uganda. <br>Tsavo West contains several spectacular habitats: riverine forests, mountains, lakes and vast plains.<br><br><strong>Amboseli</strong> is known as the best place in the world to get up close to free-roaming elephants. Other attractions in the park include the opportunity to meet Maasai and visit the Maasai village. The park also has views of <strong>Mount Kilimanjaro</strong> , the worlds highest free-standing mountain.'
    },
    {
    
      image:'/images/wild.gif',
      title:'SAFARI SIMBA',
      title2:'6 DAYS 5 NIGHTS  - MASAI MARA - LAKE NAKURU - AMBOSELI - TSAVO EAST',
      
      description:'This incredible tour starts from Nairobi and ends in Mombasa,Malindi or Watamu.',
      description2:'This incredible tour starts from Nairobi and ends in Mombasa or Watamu.<br><br>Tsavo East is the second largest park in the country  in terms of number of animals and due to its exceptional biodiversity, the park is considered one of the <strong>most precious nature reserves</strong> in the world. <br><br>Amboseli is known as the <strong>best place in the world</strong> to get up close to free-roaming elephants. Other attractions in the park include the opportunity to meet Maasai and visit the Maasai village. The park also has views of <strong>Mount Kilimanjaro</strong> , the worlds highest free-standing mountain.<br><br><strong>The Maasai Mara</strong> borders the Serengeti Park in Tanzania with which it forms a single ecosystem. The reserve is known for its exceptional concentration of fauna and for the famous migration of wildebeest and zebras that begins in July from Serengeti to Masai Mara and then back to Serengeti in September/October. All the Big Five (lion, rhino, elephant, buffalo, leopard) are present in the park although the rhino population is in serious danger. Hippos are numerous in the Mara River and the Talek River. You can see them while you are on the veranda of the camp. <br><br>Lake <strong>Nakuru National Park</strong>  is located in the area of ​​the shallow, alkaline lake of the same name. The park also includes marshy areas, forest and low rocky reliefs where you can admire, in addition to millions of species of birds, also animals that are difficult to spot such as rhinos (both white and, although rare, the shy black rhinos).<br>Arriving from above, you can see thousands of pink dots on the water: they are flamingos! From time to time, suddenly rising in small groups in flight, they cover the sky like a pink sheet… During the dry season, the lake retreats, leaving a white and shiny crust of bicarbonate on the shores, creating a magical landscape with an almost surreal touch.'
    },
    {
      image:'/images/lion.gif',
      title:'SAFARI MUFASA',
      title2:'7 DAYS  6 NIGHTS - MASAI MARA - LAKE NAKURU -AMBOSELI - TAITA HILLS - TSAVO EAST - WATAMU',
      description:'Masai Mara National Reserve is one of the most popular tourism destinations in Kenya- Africa. The reserve is located in the Great Rift Valley in primarily open ...',
      description2:'This incredible tour starts from Nairobi and ends in Mombasa or Watamu.<br><br>Tsavo East is the second largest park in the country  in terms of number of animals and due to its exceptional biodiversity, the park is considered one of the <strong>most precious nature reserves</strong> in the world.<br><br>Tsavo West is where, at the beginning of the last century, the <strong>legend of the man-eating lions </strong> that inspired the film “The Ghost and the Darkness” took root, “opposing” the construction of the railway that would have connected the southern coast of Kenya with Uganda. Tsavo West contains several spectacular habitats: riverine forests, mountains, lakes and vast plains. <br><br>Amboseli is known as the <strong>best place in the world</strong> to get up close to free-roaming elephants. Other attractions in the park include the opportunity to meet Maasai and visit the Maasai village. The park also has views of <strong>Mount Kilimanjaro</strong> , the worlds highest free-standing mountain.<br><br><strong>The Maasai Mara</strong> borders the Serengeti Park in Tanzania with which it forms a single ecosystem. The reserve is known for its exceptional concentration of fauna and for the famous migration of wildebeest and zebras that begins in July from Serengeti to Masai Mara and then back to Serengeti in September/October. All the Big Five (lion, rhino, elephant, buffalo, leopard) are present in the park although the rhino population is in serious danger. Hippos are numerous in the Mara River and the Talek River. You can see them while you are on the veranda of the camp. <br><br>Lake <strong>Nakuru National Park</strong>  is located in the area of ​​the shallow, alkaline lake of the same name. The park also includes marshy areas, forest and low rocky reliefs where you can admire, in addition to millions of species of birds, also animals that are difficult to spot such as rhinos (both white and, although rare, the shy black rhinos).<br>Arriving from above, you can see thousands of pink dots on the water: they are flamingos! From time to time, suddenly rising in small groups in flight, they cover the sky like a pink sheet… During the dry season, the lake retreats, leaving a white and shiny crust of bicarbonate on the shores, creating a magical landscape with an almost surreal touch.'
    }



  ]

  safariItenaries:SafariItenary[]=[
    {
      name:'SAFARI NALA',
      title2:'2 DAYS 1 NIGHT SAFARI - TSAVO EAST',
      duration:2,
      days:[
        {
          day:'Day 1',
          location:'Tsavo East',
          description:'Departure is at 6.30am outside the hotel / private house. We go to have breakfast at the restaurant (the snack). At 7.00am we leave and take 2 and a half hours by car to Tsavo which is 120km. Before arriving at the entrance we stop for those who want to go to the bathroom or smoke cigarettes, we also go to the orphan school trophy to divide pencil, penalty, flour and beans then we leave. At about 9.30 we arrive at the gate, we get out in the car to go to the bathroom then we go to see the crocodiles in the Galana river. At 10.00am we enter the park to discover Tsavo East, while the safari we have cold water inside the jeep, we do the game drive and look for the beasts until lunch time, at 1.00pm we go to the camp/lodge, we check in and we go to leave the suitcase in the rooms then we go to lunch which is a buffet, drinks at the table are paid separately, after lunch there is 2 hours of rest (happy hour) because since midday it is too hot so the animals hide. At 4.00pm we leave again for the afternoon game drive to look for the animals that we have not seen this morning until sunset then we return to the lodge, we go to take a shower then at 8.00pm dinner begins, after dinner who wants to go use WiFi or chat then we go to sleep',
        },
        {
          day:'Day 2',
          location:'Tsavo East',
          description:'The second day we wake up at 5.00am then at 6.00am we have breakfast and at 6.30am we take our suitcase and leave for the morning game and look for animals that we are not seen until 10.00am then we leave the park because the ticket lasts 24 hours. We take 2 hours of road that at 1.00pm we return to the hotel / private house. You are very welcome in our country of watamu Kenya 🇰🇪. In Kenya with Beach Bay'
        }
      ],
      notes:'<strong>SELECTED LODGE OR CAMP(SUBJECT TO AVAILABILITY)</strong><br><strong>Tsavo East</strong> <br>Sentrim Tari Camp <br> Voi Safari Lodge <br>Voi Wildlife Lodge <br>Manyatta Luxury Camp'

    },
   
    {
      name:'SAFARI SARABI',
      title2:'3 DAYS 2 NIGHTS SAFARI - TSAVO EAST & AMBOSELI',
      duration:3,
      days:[
        {
          day:'Day 1',
          location:'Tsavo East',
          description:'Departure is at 6.30am outside the hotel / private house. We go to have breakfast at the restaurant (the snack). At 7.00am we leave and take 2 and a half hours by car to Tsavo which is 120km. Before arriving at the entrance we stop for those who want to go to the bathroom or smoke cigarettes, we also go to the orphan school trophy to divide pencil, penalty, flour and beans then we leave. At about 9.30 we arrive at the gate, we get out in the car to go to the bathroom then we go to see the crocodiles in the Galana river. At 10.00am we enter the park to discover Tsavo East, while the safari we have cold water inside the jeep, we do the game drive and look for the beasts until lunch time, at 1.00pm we go to the camp/lodge, we check in and we go to leave the suitcase in the rooms then we go to lunch which is a buffet, drinks at the table are paid separately, after lunch there is 2 hours of rest (happy hour) because since midday it is too hot so the animals hide. At 4.00pm we leave again for the afternoon game drive to look for the animals that we have not seen this morning until sunset then we return to the lodge, we go to take a shower then at 8.00pm dinner begins, after dinner who wants to go use WiFi or chat then we go to sleep.'
        },
        {
          day:'Day 2',
          location:'Amboseli',
          description:'Wake up at 5.00am and at 6.00am go to have breakfast, after breakfast we take our suitcase and leave for the morning game drive until 8.30am then we go out of the Tsavo East park, take the road to Amboseli and at around 1.00pm we arrive at the lodge / camp, check in then go to leave the suitcase in the room then go to eat lunch, after lunch we rest until 3.30pm then we leave for the afternoon game drive, we look for animals, we see the Kilimanjaro mountain until 6.00pm then we return to the lodge, we go to take a shower then at 8.00pm dinner starts, after dinner who wants to go to rest, use WiFi or chat then after we go to sleep.'
        },
        {
          day:'Day 3',
          location:'Amboseli',
          description:'Wake up at 5.00am, takes a shower, then at 6.00am breakfast begins, after breakfast we take our suitcase and leave, we do another morning tour inside the park until 9.00am then we go out, take the road to return to Watamu, at 1.00pm we stop in a restaurant to eat lunch, after lunch we leave for Watamu and at 4.30pm we return to the hotel / private house (villa).'
        }
      ],
      notes:'<strong>SELECTED LODGE OR CAMP(SUBJECT TO AVAILABILITY)</strong> <br><strong>Tsavo East </strong> <br>- Sentrim Tari Camp <br>- Manyatta Luxury Camp <br>- Voi Safari Lodge <br>- Voi Wildlife Lodge <br><br><strong>Amboseli</strong> <br>- Sentrim Tari Camp <br>- AA lodge <br> - Kilima Camp'
    },
    {
      name:'SAFARI ZAZU',
      title2:'4 DAY 3 NIGHTS SAFARI TAITA HILLS - AMBOSELI  - TSAVO EAST ',
      duration:4,
      days:[
        {
          day:'Day 1',
          location:'Amboseli',
          description:'Departure from Nairobi airport, I come with the jeep to the airport, we leave and take the road to Amboseli, about 5 hours of safari to get to the lodge, half the way we stop to go to the bathroom then we leave, around 1.00pm we arrive at the lodge, we check in and take the room, after dropping off the suitcase we go straight to lunch, eating is buffet, drinks at the table are paid separately, after eating there is 2 hours of rest (happy hour), because from midday it is too hot so the animals go under the tree for shade. At 3.30pm we leave for the afternoon game drive and look for the animals, we look at the famous mountain Kilimanjaro, while the safari we have cold water for you, then at 6.00pm we return to the lodge, we go to take a shower then at 8.00pm dinner begins, after dinner who wants to go to rest, use WiFi or chat then after we go to sleep.'

        },
        {
          day:'Day 2',
          location:'Amboseli – Taita Hills',
          description:'He wakes up at 5.00am, takes a shower, then at 6.00am breakfast begins, after breakfast we take our suitcase and leave for the morning game drive, we look for animals that we havent seen until 9.00am, then we leave and take the road to Taita Hills, at 12.30pm we arrive at the lodge, first we go to eat lunch, then we move and go to the stilt house, at the stilt house we rest until 4.00pm, then we leave for the afternoon game drive, we look for animals until sunset, we go to take a shower, after the shower, dinner begins and then we go to rest.'

        },
        {
          day:'Day 3',
          location:'Taita Hills - Tsavo East',
          description:'We wake up at 5.00am then at 6.00am we go to have breakfast, after breakfast we take our suitcase and leave for the game drive in the morning, we look for animals until 10.00am then we go out, take the road to Tsavo, we do a game drive first then we go to the lodge, we check in then we go straight to eat lunch, after lunch we rest until 4.00pm and we do another game drive until sunset, we go back to the lodge, we go to have a shower and then we go for dinner, after dinner we go to rest.'
        },
        {
          day:'Day 4',
          location:'Tsavo East - Watamu',
          description:'We wake up at 5am and at 5.30am we have breakfast, after breakfast we check out, we go around in the morning until 10.00am and we go out, we take the road to Watamu and at 1pm we return to the village or private house (villa).'

        }
      ],
      notes:'<strong>SELECTED LODGE OR CAMP(SUBJECT TO AVAILABILITY)</strong> <br><strong>Amboseli</strong> <br>- Sentrim Tari Camp <br>- AA lodge <br> - Kilima Camp<br><strong>Tsavo East </strong> <br>- Sentrim Tari Camp <br>- Manyatta Luxury Camp <br>- Voi Safari Lodge <br>- Voi Wildlife Lodge <br> <strong>Taita Hills</strong> <br>- Sarova Salt Lick Game Lodge'
    },
    {
      name:'SAFARI RAFIKI',
      title2:'5 DAYS 4 NIGHTS SAFARI - MASAI MARA - AMBOSELI - TSAVO EAST - WATAMU',
      duration:5,
      days:[
        {
          day:'Day 1',
          location:'MASAI MARA',
          description:'Departure from Nairobi from the airport or hotel, we leave at 6.00am in the morning and take the road to Masai Mara which is 6 hours, along the way we have cold water for you, we arrive at Rift Valley which is a small stop for those who want to go to the bathroom, after the bathroom we leave and go straight to Masai Mara, at around 1.00pm we arrive at the lodge which is Sentrim Mara, we check in then we go to drop off the suitcase and then we go to lunch, eating is buffet, drinks are paid separately at the table, after lunch there is 2 hours of rest (happy hour) at 3.30pm we leave for the afternoon game drive, we look for the beasts until 6.00pm we return to the lodge, we go to take a shower then at 8.00pm dinner starts, after dinner who wants to go use WiFi or chat and then we go to sleep.'

        },
        {
          day:'Day 2',
          location:'MASAI MARA',
          description:'The second day we wake up at 5.00am and at 6.00am we go to have breakfast, after breakfast we leave for the whole day half the savannah because we also take lunch in our BOX, we do the game drive in the morning while we go to the Mara river, we look for a nice place to eat lunch, after eating we leave for game drive until 4.00pm then we go to visit Masai village and see Masai culture (Masai village is paid separately) until 6.00pm and we return to the lodge, we go to take a shower and at 8.00pm we go to dinner, after dinner who wants to go use WiFi or rest or chat then after we go to sleep.'
        },
        {
          day:'Day 3',
          location:'MASAI MARA – AMBOSELI',
          description:'We wake up at 5.00am and then we go to have breakfast, at 6.30am we leave for Amboseli, we take the road to Amboseli which is 6 hours, half the road we stop for those who want to go to the bathroom, after the bathroom we go straight to the camp which is Sentrim Amboseli lodge, we check in then we go to the room to put the suitcase down then we go for lunch, after lunch we go to rest until 3.30pm when we leave for the afternoon game drive, we look for animals and see the Kilimanjaro mountains until 6.00pm then we go back to the lodge, we go to have a shower then we go to have dinner, after dinner whoever wants to use WiFi or chat then we go to sleep.'
        },
        {
          day:'Day 4',
          location:'AMBOSELI - TSAVO EAST',
          description:'Wake up at 5.00am go take a shower then go have breakfast, after breakfast we leave for the morning game drive until 9.00am then we go out and take the road to Tsavo East, we take 5 hours of road, at about 1.00pm we arrive at the lodge, Sentrim Tari lodge, we check in then take the room then we go to eat lunch, after lunch there is 2 hours of rest (happy hour). At 4.00pm we leave for the afternoon game drive and we look for animals until sunset then we return to the lodge, we go take a shower then we eat dinner, after dinner who wants to use WiFi or chat then we go to sleep.'
        },
        {
          day:'Day 5',
          location:'TSAVO EAST - WATAMU',
          description:'We wake up at 5.00am, go to take a shower, then go to have breakfast, after breakfast we leave for the game drive in the morning, we look for animals until 10.30am, then we leave the park, take the road to Watamu, at 1.00pm we return to the hotel / villa (private house).'
        }
        
        
      ],
      notes:'<strong>SELECTED LODGE OR CAMP(SUBJECT TO AVAILABILITY)</strong> <br><strong>Masai Mara</strong> <br>- AA Lodge <br>- Sentrim Mara <br>- Fig Tree<strong><br>Amboseli</strong> <br>- Sentrim Tari Camp <br>- AA lodge <br> - Kilima Camp<br><strong>Tsavo East </strong> <br>- Sentrim Tari Camp <br>- Manyatta Luxury Camp <br>- Voi Safari Lodge <br>- Voi Wildlife Lodge'


    },
    {
      name:'SAFARI SIMBA',
      title2:'6 DAYS 5 NIGHTS SAFARI - MASAI MARA - LAKE NAKURU - AMBOSELI - TSAVO EAST',
      duration:6,
      days:[
        {
          day:'Day 1',
          location:'MASAI MARA',
          description:'Departure from Nairobi from the airport or hotel, we leave at 6.00am in the morning and take the road to Masai Mara which is 6 hours, along the way we have cold water for you, we arrive at Rift Valley which is a small stop for those who want to go to the bathroom, after the bathroom we leave and go straight to Masai Mara, at around 1.00pm we arrive at the lodge which is Sentrim Mara, we check in then we go to drop off the suitcase and then we go to lunch, eating is buffet, drinks are paid separately at the table, after lunch there is 2 hours of rest (happy hour) at 3.30pm we leave for the afternoon game drive, we look for the beasts until 6.00pm we return to the lodge, we go to take a shower then at 8.00pm dinner starts, after dinner who wants to go use WiFi or chat and then we go to sleep.'
        },
        {
          day:'Day 2',
          location:'MASAI MARA',
          description:'The second day we wake up at 5.00am and at 6.00am we go to have breakfast, after breakfast we leave for the whole day half the savannah because we also take lunch in our BOX, we do the game drive in the morning while we go to the Mara river, we look for a nice place to eat lunch, after eating we leave for game drive until 4.00pm then we go to visit Masai village and see Masai culture (Masai village is paid separately) until 6.00pm and we return to the lodge, we go to take a shower and at 8.00pm we go to dinner, after dinner who wants to go use WiFi or rest or chat then after we go to sleep.'
        },
        {
          day:'Day 3',
          location:'MASAI MARA - LAKE NAKURU',
          description:'Wake up at 5.00am and at 6.00am we go to have breakfast, at 7.00am we leave Masai Mara and leave for Lake Nakuru, we take the road to Nakuru which is 5 hours by car and we arrive at midday, we arrive at the Sentrim Elementaita lodge, we check in and go to drop off suitcase then we go to eat lunch, after lunch who wants to go to the pool or go to rest. At 3.00pm we leave for Lake Nakuru, we arrive at the gate first take ticket then we enter the park, we go around the park and look for animals until 6.00pm, we leave the park and return to the lodge, we go to take a shower and then we go for dinner we go to rest or chat then we go to sleep.'
        },
        {
          day:'Day 4',
          location:'LAKE NAKURU - AMBOSELI',
          description:'We wake up at 5.00am and then we go to have breakfast, at 6.30am we leave for Amboseli, we take the road to Amboseli which is 7 hours, half the road we stop for those who want to go to the bathroom, after the bathroom we go straight to the camp which is Sentrim Amboseli lodge, we check in then we go to the room to put the suitcase down then we go for lunch, after lunch we go to rest until 3.30pm when we leave for the afternoon game drive, we look for animals and see the Kilimanjaro mountains until 6.00pm then we go back to the lodge, we go to have a shower then we go to have dinner, after dinner whoever wants to use WiFi or chat then we go to sleep.'
        },
        {
          day:'Day 5',
          location:'AMBOSELI - TSAVO EAST',
          description:'Wake up at 5.00am go take a shower then go have breakfast, after breakfast we leave for the morning game drive until 9.00am then we go out and take the road to Tsavo East, we take 5 hours of road, at about 1.00pm we arrive at the lodge, Sentrim Tari lodge, we check in then take the room then we go to eat lunch, after lunch there is 2 hours of rest (happy hour). At 4.00pm we leave for the afternoon game drive and we look for animals until sunset then we return to the lodge, we go take a shower then we eat dinner, after dinner who wants to use WiFi or chat then we go to sleep.'
        },
        {
          day:'Day 6',
          location:'TSAVO EAST - WATAMU',
          description:'We wake up at 5.00am, go to take a shower, then go to have breakfast, after breakfast we leave for the game drive in the morning, we look for animals until 10.30am, then we leave the park, take the road to Watamu, at 1.00pm we return to the hotel / villa (private house).'

        }
      ],
       notes:'<strong>SELECTED LODGE OR CAMP(SUBJECT TO AVAILABILITY)</strong> <br><strong>Masai Mara</strong> <br>- AA Lodge <br>- Sentrim Mara <br>- Fig Tree <br><strong>Lake Nakuru</strong> <br> Lake Nakuru Lodge <br><strong>Amboseli</strong> <br>- Sentrim Tari Camp <br>- AA lodge <br> - Kilima Camp<br><strong>Tsavo East </strong> <br>- Sentrim Tari Camp <br>- Manyatta Luxury Camp <br>- Voi Safari Lodge <br>- Voi Wildlife Lodge'
    },
    {
      name:'SAFARI MUFASA',
      title2:'7 DAYS SAFARI 6 NIGHTS - MASAI MARA - LAKE NAKURU -AMBOSELI -TAITA HILLS - TSAVO EAST - WATAMU',
      duration:7,
      days:[
        {
          day:'Day 1',
          location:'MASAI MARA',
          description:'Departure from Nairobi from the airport or hotel, we leave at 6.00am in the morning and take the road to Masai Mara which is 6 hours, along the way we have cold water for you, we arrive at Rift Valley which is a small stop for those who want to go to the bathroom, after the bathroom we leave and go straight to Masai Mara, at around 1.00pm we arrive at the lodge which is Sentrim Mara, we check in then we go to drop off the suitcase and then we go to lunch, eating is buffet, drinks are paid separately at the table, after lunch there is 2 hours of rest (happy hour) at 3.30pm we leave for the afternoon game drive, we look for the beasts until 6.00pm we return to the lodge, we go to take a shower then at 8.00pm dinner starts, after dinner who wants to go use WiFi or chat and then we go to sleep.'
        },
        {
          day:'Day 2',
          location:'MASAI MARA',
          description:'The second day we wake up at 5.00am and at 6.00am we go to have breakfast, after breakfast we leave for the whole day half the savannah because we also take lunch in our BOX, we do the game drive in the morning while we go to the Mara river, we look for a nice place to eat lunch, after eating we leave for game drive until 4.00pm then we go to visit Masai village and see Masai culture (Masai village is paid separately) until 6.00pm and we return to the lodge, we go to take a shower and at 8.00pm we go to dinner, after dinner who wants to go use WiFi or rest or chat then after we go to sleep.'
        },
        {
          day:'Day 3',
          location:'MASAI MARA - LAKE NAKURU',
          description:'Wake up at 5.00am and at 6.00am we go to have breakfast, at 7.00am we leave Masai Mara and leave for Lake Nakuru, we take the road to Nakuru which is 5 hours by car and we arrive at midday, we arrive at the Sentrim Elementaita lodge, we check in and go to drop off suitcase then we go to eat lunch, after lunch who wants to go to the pool or go to rest. At 3.00pm we leave for Lake Nakuru, we arrive at the gate first take ticket then we enter the park, we go around the park and look for animals until 6.00pm, we leave the park and return to the lodge, we go to take a shower and then we go for dinner, after dinner we go to rest or chat then we go to sleep.'
        },
        {
          day:'Day 4',
          location:'LAKE NAKURU - AMBOSELI',
          description:'We wake up at 5.00am and then we go to have breakfast, at 6.30am we leave for Amboseli, we take the road to Amboseli which is 7 hours, half the road we stop for those who want to go to the bathroom, after the bathroom we go straight to the camp which is Sentrim Amboseli lodge, we check in then we go to the room to put the suitcases down then we go for lunch, after lunch we go to rest until 3.30pm when we leave for the afternoon game drive, we look for animals and we see the Kilimanjaro mountains until 6.00pm then we go back to the lodge, we go to have a shower then we go for dinner, after dinner whoever wants to use WiFi or chat then we go to sleep.'
        },
        {
          day:'Day 5',
          location:'AMBOSELI - TAITA HILLS',
          description:'Wake up at 5.00am, go take a shower, then go have breakfast, after breakfast we leave for the morning game drive until 9.00am then we go out and take the road to Taita Hills, we take 4 hours of road, around 1.00pm we arrive at the lodge, we check in then take the room, then we go to eat lunch, after lunch there is 2 hours of rest (happy hour). At 4.00pm we leave for the afternoon game drive and we look for animals until sunset then we return to the lodge, we go take a shower then we eat dinner, after dinner (night safari but not included) who wants to use WiFi or chat after we go to sleep.'

        },
        {
          day:'Day 6',
          location:'TAITA HILLS - TSAVO EAST',
          description:'Wake up at 5.00am and go take a shower, at 6.00am we leave for a morning game drive until 9.00am then we return to the lodge for breakfast, after breakfast we check out, take the road to Tsavo East, around midday we arrive at the lodge, you wildlife lodge, we check in then for lunch, after lunch we rest until 4.00pm when we leave for a game drive in the afternoon until sunset then we return to the lodge, take a shower, at 8.00pm dinner begins, then we rest.'
        },
        {
          day:'Day 7',
          location:'TSAVO EAST - WATAMU',
          description:'We wake up at 5.00am, go to take a shower, then go to have breakfast, after breakfast we leave for the game drive in the morning, we look for animals until 10.30am, then we leave the park, take the road to Watamu, at 1.00pm we return to the hotel / villa (private house).'
        }
      ],
      notes:'<strong>SELECTED LODGE OR CAMP(SUBJECT TO AVAILABILITY)</strong> <br><strong>Masai Mara</strong> <br>- AA Lodge <br>- Sentrim Mara <br>- Fig Tree <br> <strong>Lake Nakuru</strong> <br> Lake Nakuru Lodge <br><strong>Amboseli</strong> <br>- Sentrim Tari Camp <br>- AA lodge <br> - Kilima Camp<br><strong>Tsavo East </strong> <br>- Sentrim Tari Camp <br>- Manyatta Luxury Camp <br>- Voi Safari Lodge <br>- Voi Wildlife Lodge'

    }
  ]
 airSafaris:airSafari[]=[
  {
    name:'SAFARI BY AIR',
    title:'2DAYS 1 NIGHT',
    duration:2,
    days:[{
      day:'Day 1',
      location:'MASAI MARA',
      description:'Departure is at 6.30am outside the hotel / private house. We go to have breakfast at the restaurant (the snack). At 8.00am we arrive at airport . 8:30am is the departure time at the airport The flight passes the lovely Mount Kilimanjaro‚ and lasts approximately 3 hours‚ 10 minutes. Our driver/guide will drive you to the booked hotel for check-in with a game drive en-route then have lunch. After lunch you will relax until 4:30p you will go and enjoy an afternoon game drive in a 4 X 4 jeep vehicle until 6:00pm. you go to take a shower then at 8.00pm dinner begins, after dinner who wants to go use WiFi or chat then you can go to sleep.'

    },
    {
      day:'Day 2',
      location:'MASAI MARA',
      description:'you wake up at 6.00am then at 6.30am you have breakfast and at 7:00am you take your suitcase and leave for the  Early morning game drive in a  4 x 4 jeep vehicle enroute to the airstrip utill 11:00am, by 11:30am you will depart from mara airstrip , 1:00pm you will arrive at the airport and 1:15pm you will be transferred to your hotel/ private house.'
    }
  ],
  notes:'<strong>What`s included</strong> <br>-Accommodation as specified in the itinerary on Full board basis in the lodge.<br>-Return Flights Malindi - Masai Mara - Malindi including all taxes.<br>-Safari Game drives in Masai Mara<br>-Airstrip transfers in Masai Mara<br>-24 hour Back Up support if required <br><br> <strong>Not included</strong> are drinks‚ tips and laundry.'
  },
  {
    name:'SAFARI BY AIR 2',
    title:'3DAYS 2 NIGHTS',
    duration:3,
    days:[
      {
      day:'Day 1',
      location:'MASAI MARA',
      description:'Departure is at 6.30am outside the hotel / private house. We go to have breakfast at the restaurant (the snack). At 8.00am we arrive at airport . 8:30am is the departure time at the airport The flight passes the lovely Mount Kilimanjaro‚ and lasts approximately 3 hours‚ 10 minutes. Our driver/guide will drive you to the booked hotel for check-in with a game drive en-route then have lunch. After lunch you will relax until 4:30p you will go and enjoy an afternoon game drive in a 4 X 4 jeep vehicle until 6:00pm. you go to take a shower then at 8.00pm dinner begins, after dinner who wants to go use WiFi or chat then you can go to sleep.'
      },
      {
        day:'Day 2',
        location:'MASAI MARA',
        description:'you wake up at 6.00am then at 6.30am you have breakfast at the hotel and at 7:00am you start full day game drive in a 4 X 4 jeep vehicle with  packed lunch. Or a balloon ride (Extra cost) until 6:00pm. you go to take a shower then at 8.00pm dinner begins, after dinner who wants to go use WiFi or chat then you can go to sleep'
      },
      {
        day:'Day 3',
        location:'MASAI MARA',
        description:'you wake up at 6.00am then at 6.30am you have breakfast and at 7:00am you take your suitcase and leave for the  Early morning game drive in a  4 x 4 jeep vehicle enroute to the airstrip utill 11:00am, by 11:30am you will depart from mara airstrip , 1:00pm you will arrive at the airport and 1:15pm you will be transferred to your hotel/ private house.'

      }
],
notes:'<strong>What`s included</strong> <br>-Accommodation as specified in the itinerary on Full board basis in the lodge.<br>-Return Flights Malindi - Masai Mara - Malindi including all taxes.<br>-Safari Game drives in Masai Mara<br>-Airstrip transfers in Masai Mara<br>-24 hour Back Up support if required <br><br> <strong>Not included</strong> are drinks‚ tips and laundry.'
}
 ]


 

  getSafaris(){
    return this.safaris;
  }

  getAllSafarisItenaries(): SafariItenary[] {
    return this.safariItenaries;
  }

  getAllAirSafaris():airSafari[]{
    return this.airSafaris
  }
  
}
