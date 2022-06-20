import React, { createContext, useState } from 'react'
export const myname=createContext()
const Api = (props) => {

    const [data,setData]=useState([
    {
      "Title" : " Deepika Padukone, Sonam Kapoor, Urfi Javed and more: Divas who nailed the side boob trend like a PRO",
      "CategoryName"  : "Bollywood",
      "PublishedDate" : "Januaury 15 2022",
      "ImageAsset"    : "https://st1.bollywoodlife.com/wp-content/uploads/2022/06/DEEPIKAS-1.png",
      "BlogContent"   : "Tejasswi Prakash beat popular actresses such as Shehnaaz Gill, Katrina Kaif, Deepika Padukone and others to achieve a rare Instagram feat. Check out what is it all about below..."
  },
  {
    "Title" : " Bobby Deol's son Aryaman has turned 21 today and the doting father took to Instagram to share an adorable picture to wish him on his special day. Netizens are blown away by Aryaman's handsome looks and couldn't stop gushing about him.'",
    "CategoryName"  : "Bollywood",
    "PublishedDate" : "Januaury 14 2022",
    "ImageAsset"    : "https://st1.bollywoodlife.com/wp-content/uploads/2022/06/iambobbydeol_287946881_689669088795078_6144923125803546652_n.jpg",
    "BlogContent"   : "Bobby Deol's son Aryaman has turned 21 today and the doting father took to Instagram to share an adorable picture to wish him on his special day. Netizens are blown away by Aryaman's handsome looks and couldn't stop gushing about him.."
},
{
  "Title" : " After Shakti Arora in Kundali Bhagya, fans are eagerly waiting for a comeback of these hit TV stars",
  "CategoryName"  : "Bollywood",
  "PublishedDate" : "Januaury 14 2022",
  "ImageAsset"    : "https://st1.bollywoodlife.com/wp-content/uploads/2022/06/Aashiesh-comeback.jpg",
  "BlogContent"   : "Shakti Arora is all set to make his comeback with Kundali Bhayga and here's a list of other actors fans would love to see on TV again..."
},
{
  "Title" : " Sonam Kapoor's hubby Anand Ahuja is right now a darling to her and during this phase one needs all the extra love and attention, especially from her hubby and the girl is getting that.",
  "CategoryName"  : "Bollywood",
  "PublishedDate" : "Januaury 14 2022",
  "ImageAsset"    : "https://st1.bollywoodlife.com/wp-content/uploads/2022/06/MicrosoftTeams-image-4-10.jpg",
  "BlogContent"   : "Sonam Kapoor's hubby Anand Ahuja is right now a darling to her and during this phase one needs all the extra love and attention, especially from her hubby and the girl is getting that.."
},
{
  "Title" : " Trending TV News Today: Top actress' tantrums on Khatron Ke Khiladi 12; Kundali Bhagya's Shraddha Arya on Dheeraj Dhoopar's exit and more",
  "CategoryName"  : "Bollywood",
  "PublishedDate" : "Januaury 14 2022",
  "ImageAsset"    : "https://st1.bollywoodlife.com/wp-content/uploads/2022/06/Dheeraj-5.png",
  "BlogContent"   : "Trending TV News Today: Top actress' tantrums on Khatron Ke Khiladi 12; Kundali Bhagya's Shraddha Arya on Dheeraj Dhoopar's exit and more"
},
{
  "Title" : " Tiger Shroff, Nawazuddin Siddiqui and Tara Sutaria starrer Heropanti 2 to begin streaming on Amazon Prime Video on May 27, 2022",
  "CategoryName"  : "Bollywood",
  "PublishedDate" : "Januaury 14 2022",
  "ImageAsset"    : "https://media2.bollywoodhungama.in/wp-content/uploads/2022/05/Tiger-Shroff-Nawazuddin-Siddiqui-and-Tara-Sutaria-starrer-Heropanti-to-begin-streaming-on-Amazon-Prime-Video-on-May-27-2022-1-600x450.jpg",
  "BlogContent"   : "Tiger Shroff, Nawazuddin Siddiqui and Tara Sutaria starrer Heropanti 2 to begin streaming on Amazon Prime Video on May 27, 2022"
},
{
  "Title" : " Jackie Shroff, Sanjay Dutt, Mithun Chakraborty, Sunny Deol announce new film",
  "CategoryName"  : "Bollywood",
  "PublishedDate" : "Januaury 14 2022",
  "ImageAsset"    : "https://images.hindustantimes.com/img/2022/06/16/550x309/sunny_1655391968913_1655391969100.jpg",

},
{
  "Title" : " Karan Johar hires renowned Marut Sikka and Harsha Kilachand to make food and desserts for his 50th birthday bash",
  "CategoryName"  : "Bollywood",
  "PublishedDate" : "Januaury 14 2022",
  "ImageAsset"    : "https://stat1.bollywoodhungama.in/wp-content/uploads/2022/05/Karan-Johar-hires-renowned-Marut-Sikka-and-Harsha-Kilachand-to-make-food-and-desserts-for-his-50th-birthday-bash--346x260.jpg",
  "BlogContent"   : "The Hindi remake of Tamil blockbuster movie ‘Kaithi’ starring Ajay Devg"
},
{
  "Title" : " KAamir Khan to host IPL 2022 finale ahead of Laal Singh Chaddha trailer release on May 29",
  "CategoryName"  : "Bollywood",
  "PublishedDate" : "Januaury 14 2022",
  "ImageAsset"    : "https://media2.bollywoodhungama.in/wp-content/uploads/2022/05/Aamir-Khan-to-host-IPL-2022-finale-ahead-of-Laal-Singh-Chaddha-trailer-release-on-May-29-1-346x260.jpg",
  "BlogContent"   : "The Hindi remake of Tamil blockbuster movie ‘Kaithi’ starring Ajay Devg"
}

    ])
  return (
    <div>
      <myname.Provider value={[data,setData]}>
        {props.children }
      </myname.Provider>
    </div>
  )
}

export default Api
