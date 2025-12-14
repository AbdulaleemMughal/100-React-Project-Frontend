import { Accordion } from "@/components/Accordion";
import { Card } from "@/components/Card";
import { ListGroup } from "@/components/ListGroup";

export const components = [
  {
    id: 1,
    name: "Accordion",
    path: "/components/accordion",
    title: "Accordion",
    desc: "Build vertically collapsing accordions in combination by using the useState hook.",
    component: Accordion,
    howToUse:
      "You can simply copy the code and paste it in your project and it will start working. You can also add more Accordion by simply adding the details in the array. The array in the component consists of all the Accordion in the form of object. Each Object contain the deatil of the Accordion like id, title, and description of the Accordion. You can use the array method => map to show all the Accordion.",
  },
  {
    id: 2,
    name: "Card",
    path: "/components/card",
    title: "Card",
    desc: "Bootstrap’s cards provide a flexible and extensible content container with multiple variants and options.",
    component: Card,
    howToUse:
      "You can simply copy the code and paste it in your project and it will start working. You can change the image according to your choice. You can also change the card titler and the description of the card. You can also add the Link Tag or the onClick attribute to the button to perform any operation by clicking on the button.",
  },
  {
    id: 3,
    name: "ListGroup",
    path: "/components/listgroup",
    title: "List Group",
    desc: "List groups are a flexible and powerful component for displaying a series of content. Modify and extend them to support just about any content within.",
    component: ListGroup,
    howToUse:
      "You can simply copy the code and paste it in your project and it will start working. You can also add the Item by adding it into the array. If you want that by clicking on the Items, it will go to another page, so you can simply add the path into the array.",
  },
];
