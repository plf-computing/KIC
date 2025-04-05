import { Injectable } from '@angular/core';


interface Excursion{

  image: string;
  title: string;
  
  
}
interface Itenary{
  name:string;
  description:string;

}

@Injectable({
  providedIn: 'root'
})
export class ExcursionsService {

  excursions:Excursion[]= [
    {
      
      image:'/images/sardegna2.jpeg',
      title:'Sardinia 2',
    
    },
    {
      
      image:'/images/kayaking.jpg',
      title:'Blue Safari/Mangroves',
     
    },
    {
      
      image:'/images/marafa.jpeg',
      title:'Marafa/Devil`s Kitchen',
     
    }
  
   
  
   
  
    
 

  
  
  
   
    
  ]
  

excursionItenary:Itenary[]=[
  {
    name:'Sardinia 2',
    description:'Departure around 08:00 from your resort. You will board a glass-bottom boat equipped with a wooden roof where you can sunbathe during the trip, masks and fins and life jackets. First stop at the Watamu marine park, a protected nature reserve where you can snorkel in search of the thousands of tropical fish that inhabit the coral reef. Trying to spot dolphins, we head towards Sardinia 2.<br> <br>Once you arrive in this heavenly atoll, visible only at low tide, with crystal clear water with a thousand shades from transparent to blue, you can relax, walk, sunbathe and look for starfish while, in the middle of the sea, the grill will be prepared to cook lunch, which will be served to you comfortably on the boat: coconut rice, octopus sauce, lobsters, freshly grilled fish and shrimp, fruit and drinks. On request, there is the possibility of a meat-based or vegetarian lunch. After lunch, more relaxation, you will return to your resort in the late afternoon'
  },
  {
    name:'Blue Safari/Mangroves',
    description:'Departure in the morning at around 08:00 from your resort. You will board a boat equipped with a wooden roof for sunbathing, masks and fins, life jackets and a glass bottom. You will arrive at the Watamu Marine Park, where you can snorkel in the reef. <br><br>After leaving the marine park, we head towards Mida Creek, a nature reserve with mangrove trees and Tibetan bridges. You will often encounter storks, herons and flamingos. Lunch will be served on Waka Waka Island, in the centre of Mida Creek, consisting of lobster, grilled fish, prawns, coconut rice with octopus sauce, fruit and drinks. On request, it is possible to have a meat or vegetarian lunch.<br><br> After lunch and relaxation, the Giriama tribe will perform a show of typical local dances. Return to your resort in the late afternoon.'
  },
  {
    
    name:'Marafa/Devil`s Kitchen',
    description:'Departure from your resort in the early afternoon, arrival at Marafa Canyon, also known as the Grand Canyon or Devils Kitchen.<br><br> Here we will have an additional guide specialized in the history of the site, who will accompany us on a tour inside the gorges, in search of the particular baboons that populate this place and telling the story that has marked it. Slowly we return to the top, where we will wait for the sunset and have time to take beautiful photos.<br><br> Return to your resort around 19:15.'
  }
  


]

getExcursions() {
  return this.excursions;
}

getItenaries():Itenary[]{
  return this.excursionItenary;
}
}
