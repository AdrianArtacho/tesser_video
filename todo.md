# Tesser_video

This devide does video and image operations, has parameters accessible via midi, and paths and other configurations via clip names.

---

> ## [INSTRUCTIONS (PUBLIC)](public/README.md)

---

### Issue with CC90

| ---             | 0 (video) | 1 (slide1) | 2 (slide2) |
| --------------- |:---------:|:----------:|:----------:|
| `A` **0 0**     | OK        | OK         | OK         |
| `B`  **0 127**  | oook      | OK...      | OK         |
| `C` **127 0**   | oook      | OK         | OK...      |
| `D` **127 127** |           | OK         | OK         |

~~~~

This is

> debug1: 1 A
> debug2: 1A
> debug3: 1 0
> debug1: 1 A
> debug2: 1A
> debug3: 1 0
> debug0: 0 0
> debug0: 1 0
> debug0: 2 0
> debug0: 3 0
> ...
> debug0: 126 0

---

## Log~

###### 2023-11-08

> Fix `jit.window` name to something neutral
> 
> sliders to zero on [thispatcher]
> 
> Load video via Clip name using simply "video"
> 
> Play without end boundary...
> 
> do not necessarily play a few frames when loaded!
> 
> load AND play/stop in one clip
> 
> video {name} start 2000 {"path/to/file"} does not go to the frame
> 
> Smooth sound edges when using *frame*? 
> 
> video {name} stop {frame} does not stop
> 
> the command `frame {start frame}` does stop at some point when I do not provide a second {end frame} value
> 
> stop video play when the set stops?
> 
> video repeat mode in a CC?
> 
> show slider values for debugging
> 
> remove ezdc

master fade `CC90` that fades in/out smartly.

> - switching between slide1 and slide2
> 
> - nach 1D stehen sliders nicht auf 0

---

## To-Do

- Prettyfy interface

- It would be ideal to accept relative paths, so the sets can be moved to a different computer wityhout too much hassle.

- add the length of the frame instead of milliseconds, relative to the set tempo (bar, beat, etc.) which then get converted to milliseconds

- Why does it play a second upon starting a set?

- rename `herschel_jit_movie` message to something neutral

- remove inherited `[frame_delay]` instances from herschel

- what is the issue with `tesser_videoloop`?

- ISSUE WITH SMART SLIDES!!

###### 2024-03-09

> Issue with the timing: the seconds don't seem right
> 
> > [jit.movie] duration spits out 196689 for a video that is 328 seconds long.
> > 
> > --> I should use _milliseconds_ instead.
> 
> Do slides with transparent background work?
> 
> > yes! (Slide 1 stays over slide 2)

###### 2024-03-10

> I did some OSC tests, and everything seems fine :)
> 
> There are some minor issues to fix, namely:
> 
> - useless [print] objects: *jitextra*, *sdvsdv*, *averaver*, *debug1*, *debug2*, *debug3*
> 
> - Re-program keyboard shortcuts:
> 
> > shortcuts ON: -9
> > 
> > shortcuts OFF: -10
> > 
> > previous cue: -11
> > 
> > repeat current cue: -12
> > 
> > back to beginning: -5
> 
> - Video commands and frames... i don't understant it yet
> 
> - ONLY FILES WITH NO SPACES (eventually I should fix it so that this is never a problem)
> 
> - Text loading different images (it should be fine though) and document the right command for that in the *sheet*.
> 
> ...

---

### ToDo

- Dimensions of the image? Probably not, unless it is enforced by my patch!
- Rotate image?
- Manipulate video image: colors, water-fx distortion, bw, caleidoscope... etc.
- Send a working version to that Woman from MPUP?