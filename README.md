# Tesser_video

This devide does video and image operations, has parameters accessible via midi, and paths and other configurations via clip names.

---

## Loading slides

Use the clip name. There are 2 slots for slides, each with a transparency slider that can be controlled via midi as well. The following example loads an image to the slot 1:

> `slide1 "Macintosh HD:/Users/artacho/Desktop/Herschel Project/slides/Herschel - TITLE.png"`

The next one will load an image onto the second slot:

> `slide2 "Macintosh HD:/Users/artacho/Desktop/Herschel Project/slides/planeten11.png"`

The transparency can be controlled using CC. The specific CC numbers can be stored with the set (see `storage` button).

---

### Play section fo the video (frame)

You may play a section of a loaded video (say between frames 2980 and 5000) by entering the following clip name:

> `frame 2980 5000`

---

### To-Do

- Prettyfy interface

- Load video via Clip name as well

- play without end boundary...

- Change the `jit.window` name to something neutral