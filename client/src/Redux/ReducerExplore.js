import { createSlice } from "@reduxjs/toolkit";
import golshifteh1 from "../Assets/images/golshifteh1.png";
import golshifteh2 from "../Assets/images/golshifteh2.png";
import mehranModiri from "../Assets/images/mehranModiri.jpg";
import newPost from "../Assets/images/newPost.jpg";
import navid from "../Assets/images/navid.png";
import golshifteh from "../Assets/images/golshifteh.jpg";
import saberAbar from "../Assets/images/saberAbar.jpg";
export const Explore = createSlice({
  name: "explore",
  initialState: {
    data: [
      { img: golshifteh1 },
      { img: golshifteh2 },
      { img: mehranModiri },
      { img: newPost },
      { img: navid },
      { img: golshifteh },
      { img: saberAbar },
      { img: golshifteh1 },
      { img: golshifteh2 },
      { img: mehranModiri },
      { img: newPost },
      { img: navid },
      { img: golshifteh },
      { img: saberAbar },
      { img: golshifteh1 },
      { img: golshifteh2 },
      { img: mehranModiri },
      { img: newPost },
      { img: navid },
      { img: golshifteh },
      { img: saberAbar },
      { img: golshifteh1 },
      { img: golshifteh2 },
      { img: mehranModiri },
      { img: newPost },
      { img: navid },
      { img: golshifteh },
      { img: saberAbar },
    ],
  },

  reducers: {},
});

// Action creators are generated for each case reducer function
export const { } = Explore.actions;
export default Explore.reducer;
