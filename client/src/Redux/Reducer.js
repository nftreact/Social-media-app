import { createSlice } from "@reduxjs/toolkit";
import golshifteh from "../Assets/images/golshifteh.jpg";
import newPost from "../Assets/images/newPost.jpg";
import saberAbar from "../Assets/images/saberAbar.jpg";
import navid from "../Assets/images/navid.png";
import mehranModiri from "../Assets/images/mehranModiri.jpg";
export const database = createSlice({
  name: "data",
  initialState: {
    database: {
      user: {
        name: "golshifteh farahani",
        img: golshifteh,
        username: "golshifteh__farahani",
        email: "@farahaniNft.com",
        post: 0,
        followers: 0,
        following: 0,
      },
      message: [
        {
          id: 1,
          img: mehranModiri,
          username: "mehranModiri",
          caption: "thanks for yoy",
          email: "mehranModiri@gmail.com",
          time: "12 : 00 AM ",
          message: [
            {
              id: 45454,
              title:
                "Hi Veera. I was in the neighborhood, so I thought I'd drop by.",
            },
          ],
        },
        {
          id: 2,
          img: mehranModiri,
          username: "mehranModiri",
          caption: "thanks for yoy",
          email: "mehranModiri@gmail.com",
          time: "12 : 00 AM ",
          message: [
            {
              id: 55444554,
              title:
                "Hi Veera. I was in the neighborhood, so I thought I'd drop by.",
            },
          ],
        },
        {
          id: 3,
          img: mehranModiri,
          username: "mehranModiri",
          caption: "thanks for yoy",
          email: "mehranModiri@gmail.com",
          time: "12 : 00 AM ",
          message: [
            {
              id: 8855888,
              title:
                "Hi Veera. I was in the neighborhood, so I thought I'd drop by.",
            },
          ],
        },
        {
          id: 4,
          img: mehranModiri,
          username: "mehranModiri",
          caption: "thanks for yoy",
          email: "mehranModiri@gmail.com",
          time: "12 : 00 AM ",
          message: [
            {
              id: 9823588,
              title:
                "Hi Veera. I was in the neighborhood, so I thought I'd drop by.",
            },
          ],
        },
      ],
      postData: [
        {
          id: 1258478,
          user: {
            img: golshifteh,
            username: "golshifteh farahani",
            email: "@farahaniNft.com",
          },
          img: newPost,
          caption:
            "Farahani is not new to action, having starred in the likes of Ridley Scott’s “Body of Lies” and the Chris Hemsworth vehicle “Extraction.” But she has built her global reputation on more auteur type fare, including films by the Iranian master Asghar Farhadi (“About Elly”) and Jim Jarmusch (“Paterson,” in which she played Adam Driver’s happily eccentric wife).",
          like: "178659",
          showMore: false,
          NumberOfComments: "3",
          coment: [
            {
              img: saberAbar,
              username: "saberAbar",
              caption: "thanks for yoy",
              email: "asberAbar@gmail.com",
            },
            {
              img: navid,
              username: "navidMohamadzadeh",
              caption: "خیلی عالی بود.",
              email: "foniex@yahoo.com",
            },
            {
              img: mehranModiri,
              username: "mehranModiri",
              caption: "thanks for yoy",
              email: "mehranModiri@gmail.com",
            },
          ],
        },
        {
          id: 2548656545,
          user: {
            img: golshifteh,
            username: "golshifteh farahani",
            email: "@farahaniNft.com",
          },
          img: newPost,
          caption:
            "Farahani is not new to action, having starred in the likes of Ridley Scott’s “Body of Lies” and the Chris Hemsworth vehicle “Extraction.” But she has built her global reputation on more auteur type fare, including films by the Iranian master Asghar Farhadi (“About Elly”) and Jim Jarmusch (“Paterson,” in which she played Adam Driver’s happily eccentric wife).",
          like: "178659",
          NumberOfComments: "3",
          showMore: false,
          coment: [
            {
              img: saberAbar,
              username: "saberAbar",
              caption: "thanks for yoy",
              email: "asberAbar@gmail.com",
            },
            {
              img: navid,
              username: "navidMohamadzadeh",
              caption: "خیلی عالی بود.",
              email: "foniex@yahoo.com",
            },
            {
              img: mehranModiri,
              username: "mehranModiri",
              caption: "thanks for yoy",
              email: "mehranModiri@gmail.com",
            },
          ],
        },
        {
          id: 254865465465656545,
          user: {
            img: golshifteh,
            username: "golshifteh farahani",
            email: "@farahaniNft.com",
          },
          img: newPost,
          caption:
            "Farahani is not new to action, having starred in the likes of Ridley Scott’s “Body of Lies” and the Chris Hemsworth vehicle “Extraction.” But she has built her global reputation on more auteur type fare, including films by the Iranian master Asghar Farhadi (“About Elly”) and Jim Jarmusch (“Paterson,” in which she played Adam Driver’s happily eccentric wife).",
          like: "178659",
          showMore: false,
          NumberOfComments: "3",
          coment: [
            {
              img: saberAbar,
              username: "saberAbar",
              caption: "thanks for yoy",
              email: "asberAbar@gmail.com",
            },
            {
              img: navid,
              username: "navidMohamadzadeh",
              caption: "خیلی عالی بود.",
              email: "foniex@yahoo.com",
            },
            {
              img: mehranModiri,
              username: "mehranModiri",
              caption: "thanks for yoy",
              email: "mehranModiri@gmail.com",
            },
          ],
        },
      ],
    },
  },

  reducers: {
    updateMessage: (state, action) => {
      const index = state.database.message.findIndex(
        (i) => i.id === action.payload.id
      );
      const message = {
        id: Math.floor(Math.random() * 100000000),
        title: action.payload.title,
      };
      state.database.message[index].message.push(message);
    },
    addComent: (state, action) => {
      const index = state.database.postData.findIndex(
        (i) => i.id === action.payload.id
      );
      const coment = {
        img: saberAbar,
        username: "aliHasani",
        caption: action.payload.caption,
        email: "asberAbar@gmail.com",
        id: Math.floor(Math.random() * 100000000),
      };
      state.database.postData[index].coment.push(coment);
    },
    updateShowMore: (state, action) => {
      const index = state.database.postData.findIndex(
        (i) => i.id === action.payload.id
      );
      state.database.postData[index].showMore = action.payload.showMore;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateMessage, addComent, updateShowMore } = database.actions;
export default database.reducer;
