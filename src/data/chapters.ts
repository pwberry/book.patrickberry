import chapterIntro from "@/assets/chapter-intro.jpg";
import chapter1 from "@/assets/chapter-1.jpg";
import chapter2 from "@/assets/chapter-2.jpg";
import chapter3 from "@/assets/chapter-3.jpg";
import chapter4 from "@/assets/chapter-4.jpg";
import chapter5 from "@/assets/chapter-5.jpg";

export interface Chapter {
  id: string;
  slug: string;
  label: string;
  title: string;
  subtitle: string;
  path: string;
  image: string;
  content: string;
}

export const chapters: Chapter[] = [
  {
    id: "introduction",
    slug: "introduction",
    label: "INTRODUCTION",
    title: "Building a Life after Incarceration",
    subtitle: "How a group of people found a home.",
    path: "/introduction",
    image: chapterIntro,
    content: "Dating to the Middle Ages, the shoemaking industry in Northampton, England, some 60 miles northwest of London, owed its early success in no small part to the area's geography. Fertile land ensured the cows stayed fed, and the River Nene and surrounding oak forests supplied the necessary water and tannins for leather production. In 1401, local shoemakers formed a guild to control quality and regulate trade; by World War I, the region is said to have been responsible for two-thirds of the boots worn by the Allied forces. After the Industrial Revolution, streets named for St. Crispin, the patron saint of cobblers and leather workers, started appearing there and in neighboring towns. As the story goes, in the third century, the twin brothers Crispin and Crispinian had fled Roman persecution and settled in what is now France, where they preached Christianity and made shoes for a living. Every Oct. 25, local shoemakers still celebrate St. Crispin's Day.",
  },
  {
    id: "chapter-1",
    slug: "chapter-1",
    label: "CHAPTER 1",
    title: "The First Steps",
    subtitle: "Beginning the journey toward reintegration.",
    path: "/chapter-1",
    image: chapter1,
    content: "Today in Syracuse, the shoemaking industry in Northampton, England, some 60 miles northwest of London, owed its early success in no small part to the area's geography. Fertile land ensured the cows stayed fed, and the River Nene and surrounding oak forests supplied the necessary water and tannins for leather production. In 1401, local shoemakers formed a guild to control quality and regulate trade; by World War I, the region is said to have been responsible for two-thirds of the boots worn by the Allied forces. After the Industrial Revolution, streets named for St. Crispin, the patron saint of cobblers and leather workers, started appearing there and in neighboring towns.",
  },
  {
    id: "chapter-2",
    slug: "chapter-2",
    label: "CHAPTER 2",
    title: "Finding Community",
    subtitle: "The importance of support networks.",
    path: "/chapter-2",
    image: chapter2,
    content: "Dating to the Middle Ages, the shoemaking industry in Northampton, England, some 60 miles northwest of London, owed its early success in no small part to the area's geography. Fertile land ensured the cows stayed fed, and the River Nene and surrounding oak forests supplied the necessary water and tannins for leather production. In 1401, local shoemakers formed a guild to control quality and regulate trade; by World War I, the region is said to have been responsible for two-thirds of the boots worn by the Allied forces.",
  },
  {
    id: "chapter-3",
    slug: "chapter-3",
    label: "CHAPTER 3",
    title: "Education and Growth",
    subtitle: "Learning as a path to transformation.",
    path: "/chapter-3",
    image: chapter3,
    content: "Dating to the Middle Ages, the shoemaking industry in Northampton, England, some 60 miles northwest of London, owed its early success in no small part to the area's geography. Fertile land ensured the cows stayed fed, and the River Nene and surrounding oak forests supplied the necessary water and tannins for leather production. In 1401, local shoemakers formed a guild to control quality and regulate trade; by World War I, the region is said to have been responsible for two-thirds of the boots worn by the Allied forces.",
  },
  {
    id: "chapter-4",
    slug: "chapter-4",
    label: "CHAPTER 4",
    title: "Work and Purpose",
    subtitle: "Finding meaningful employment and identity.",
    path: "/chapter-4",
    image: chapter4,
    content: "Dating to the Middle Ages, the shoemaking industry in Northampton, England, some 60 miles northwest of London, owed its early success in no small part to the area's geography. Fertile land ensured the cows stayed fed, and the River Nene and surrounding oak forests supplied the necessary water and tannins for leather production. In 1401, local shoemakers formed a guild to control quality and regulate trade; by World War I, the region is said to have been responsible for two-thirds of the boots worn by the Allied forces.",
  },
  {
    id: "chapter-5",
    slug: "chapter-5",
    label: "CHAPTER 5",
    title: "Looking Forward",
    subtitle: "Hope and the future of reentry programs.",
    path: "/chapter-5",
    image: chapter5,
    content: "Dating to the Middle Ages, the shoemaking industry in Northampton, England, some 60 miles northwest of London, owed its early success in no small part to the area's geography. Fertile land ensured the cows stayed fed, and the River Nene and surrounding oak forests supplied the necessary water and tannins for leather production. In 1401, local shoemakers formed a guild to control quality and regulate trade; by World War I, the region is said to have been responsible for two-thirds of the boots worn by the Allied forces.",
  },
  {
    id: "works-cited",
    slug: "works-cited",
    label: "WORKS CITED",
    title: "Works Cited",
    subtitle: "Sources and references.",
    path: "/works-cited",
    image: chapter5,
    content: "Sources and references for the book.",
  },
];

// About page content for search
export const aboutPageContent = {
  slug: "about",
  title: "Rose Byrne and Sheila Heti on Parenting, A.I. and the Nature of Personality",
  subtitle: "The If I Had Legs I'd Kick You actor and the author of Alphabetical Diaries met for a wide-ranging conversation.",
  content: "Dating to the Middle Ages, the shoemaking industry in Northampton, England, some 60 miles northwest of London, owed its early success in no small part to the area's geography. Fertile land ensured the cows stayed fed, and the River Nene and surrounding oak forests supplied the necessary water and tannins for leather production. In 1401, local shoemakers formed a guild to control quality and regulate trade; by World War I, the region is said to have been responsible for two-thirds of the boots worn by the Allied forces. After the Industrial Revolution, streets named for St. Crispin, the patron saint of cobblers and leather workers, started appearing there and in neighboring towns. As the story goes, in the third century, the twin brothers Crispin and Crispinian had fled Roman persecution and settled in what is now France, where they preached Christianity and made shoes for a living. Every Oct. 25, local shoemakers still celebrate St. Crispin's Day.",
};
