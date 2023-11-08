# Tesser_video

This devide does video and image operations, has parameters accessible via midi, and paths and other configurations via clip names.

---

## Loading slides

Use the clip name. There are 2 slots for slides, each with a transparency slider that can be controlled via midi as well. 

```
slide1 {name} {"path/to/image.png}
```

The following example loads an image to the slot 1:

> `slide1 NAME "Macintosh HD:/Users/artacho/Desktop/Herschel Project/slides/Herschel - TITLE.png"`

The next one will load an image onto the second slot:

> `slide2 NAME "Macintosh HD:/Users/artacho/Desktop/Herschel Project/slides/planeten11.png"`

The transparency can be controlled using CC. The specific CC numbers can be stored with the set (see `storage` button), but default ones are `CC88` for *slide1* and `CC89` for *slide2*.

---

## Load Video

Also witha clip name:

```
video {name} {command} {frame number} {"path/to/image.png}
```

> `video {name} {command} {frame number} {"absolute/path/to/video"}`

The commands can be:

> `start 10` Starts to play in the given frame
> 
> `stop 200` goes to a given frame and stops playing
> 
> `frame 500` moves the playhead to a given frame

---

### Frame commands

#### Play section of the video (frame)

You may play a section of a loaded video (say 5 seconds starting on frame 2980) by entering the following clip name:

> ```
> frame {starting frame} {milliseconds}
> ```
> 
> `e.g. frame 2980 5000`

#### Play/Stop from a given frame (no end boundary)

> ```
> frame {starting frame} {command}
> ```
> 
> `frame 2000 start`
> 
> `frame 2000 stop`
> 
> `frame 2000` (it will go on playing if it was already)

---

## To-Do

Fix `jit.window` name to something neutral

sliders to zero on [thispatcher]

Load video via Clip name using simply "video"

- Prettyfy interface

play without end boundary...

do not necessarily play a few frames when loaded!

load AND play/stop in one clip

- It would be ideal to accept relative paths, so the sets can be moved to a different computer wityhout too much hassle.

video {name} start 2000 {"path/to/file"} does not go to the frame

Smooth sound edges when using *frame*? 

video {name} stop {frame} does not stop

the command `frame {start frame}` does stop at some point when I do not provide a second {end frame} value

stop video play when the set stops?

master fade `CC90` that fades in/out smartly.

> - 1A | 1C hin und her
> 
> - nach 1D stehen sliders nicht auf 0

video repeat mode in a CC?

- add the length of the frame instead of milliseconds, relative to the set tempo (bar, beat, etc.) which then get converted to milliseconds

- Why does it play a second upon starting a set?

- rename `herschel_jit_movie` message to something neutral

- remove inherited `[frame_delay]` instances from herschel

- what is the issue with `tesser_videoloop`? 

- show slider values for debugging

- remove ezdac