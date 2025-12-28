# TESSER:VIDEO

This device does video and image operations, has parameters accessible via midi, and paths and other configurations via clip names. 

![interface](https://bitbucket.org/AdrianArtacho/public_tesser_video/raw/HEAD/images/interface.png)

---

## Download

Place the device directly on the Live set. The settings will be stored within the set.

- [tesser_video.amxd (.zip)](https://drive.google.com/file/d/1Fd0TIGcsD6Z0BdPvMPyj5HLdPeSt5_aN/view?usp=drive_link)

---

## Credits

Developed by [Adrián Artacho](https://www.artacho.at/tesservideo/) ([source repository](https://bitbucket.org/AdrianArtacho/tesser_video)) for the performance [*Mit Pauken und Paläste*]([Mit Pauken und Palästen | Konzert im Humboldt Forum](https://www.humboldtforum.org/de/programm/termin/konzert/mit-pauken-und-palaesten-122077/)) in the context of the research project [Atlas of Smooth Spaces in the Audiocorporeal Arts](https://the-smooth.space/blog/).

> 

---

## Loading slides

Use the clip name. There are 2 slots for slides (`slide1` & `slide2`), each with a transparency slider that can be controlled via midi as well. 

```
slide1 {name} {"path/to/image.png}
```

The following example loads an image to the slot 1:

> `slide1 NAME "Macintosh HD:/Users/artacho/Desktop/slide_a.png"`

The next one will load an image onto the second slot:

> `slide2 NAME "Macintosh HD:/Users/artacho/Desktop/slide_b.png"`

The transparency can be controlled using CC. The specific CC numbers can be stored with the set (see `[storage]` button), but default ones are `CC88` for *slide1* and `CC89` for *slide2*.

---

## Load Video

Loading of media is also possible using the clip name in the device track:

```
video {NAME} {command} {frameNumber} {"path/to/video.mov"}
```

Example:

> `video TESTVIDEO start 500 "path/to/video.mov"`

The `command` + `frameNum` combinations can be:

> `start 10`: Starts to play in the given frame
> 
> `stop 200`: goes to a given frame and stops playing
> 
> `frame 500`: moves the playhead to a given frame

---

### Paths to files

The backward slashes (`\"`) might be necessary to escape the quotation mark when there are spaces in the `PATH`. Examples:

> `video mem1 start 3000 \"EXTERN:/Some Folder/Subfolder/Video file.mp4\"`
> 
> ---
> 
> `video mem0 stop 6000 "EXTERN:/Some Folder/Subfolder/Video file.mp4"`
> 
> ---
> 
> `slide1 VISIBILITA "EXTERN:/SomeFolder/Subfolder/Video file.mp4"`
> 
> ---
> 
> `slide2 COERENZA "EXTERN:/SomeFolder/Subfolder/Video file.mp4"`

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

### Looping

Instructions on looping commands:

> `loop 500` loop from the current frame 500 ms
> 
> ---
> 
> `loop beginning` set the current frame as the beginning of the loop
> 
> ---
> 
> `loop end` set the current loop as the loop end
> 
> ---
> 
> `loop 4000 5000` loop between frames 4000 and 5000
> 
> ---
> 
> `loop current 5000` loop between current frame and 5000
> 
> ---
> 
> `loop 4000 current` loop between frame 4000 and current one
> 
> ---
> 
> `loop mode 1` sets the loop mode

---

### Inverting axes

Examples:

> `invert x {value}` Value 1 inverts x axis. Default is 0.
> 
> ---
> 
> `invert y {value}` Value 1 inverts x axis. Default is 0.

---

### Using a remote `.csv` file to code commands

Using the [download-sheet](https://bitbucket.org/AdrianArtacho/download-sheet) object, you can codify specific commands as a (publicly accesible) google spreadsheet and trigger them with midinotes.

---

**COMMAND ID**

>  The first word (e.g. `RAP4`) in the string is a human-readable 'name' for reference

**COMMANDS (Pseudocode)**

> `slide1`
> 
> Loads a specific file onto the first slider. E.g.:
> 
> ```
> RAP1 slide1 "EXTERN:/Max PROJECTS/tesserakt/tesser_video/test_media/Slides_test1.png"
> ```
> 
> ---
> 
> `slide2`
> 
> Same, but for the second slider.
> 
> ---
> 
> `video`
> 
> It loads the video. It needs to be entered in combination with frame/start/stop.
> 
> ```
> {ID} video {frame/start/stop} {position} {filepath}
> ```
> 
> ---
> 
> `frame`
> 
> Here are some of the pseudocode possibilities...
> 
> ![](https://bitbucket.org/AdrianArtacho/public_tesser_video/raw/HEAD/images/frame-examples.png)
> 
> ...
> 
> ---
> 
> `range`
> 
> Sets the range that the 'scrub' will be restricted to. E.g.:
> 
> ```
> {ID} range 513 581
> ```
> 
> ---
> 
> `loop`
> 
> The loop also requires two values, but these are the frames. E.g.:
> 
> ```
> {ID} loop 16935 19195
> ```
> 
> ![](https://bitbucket.org/AdrianArtacho/public_tesser_video/raw/HEAD/images/loop-logic.png)
> 
> ---
> 
> `invert`
> 
> Inverts the video image by the *x* or the *y* axes. This needs to be turned on/of numerically. E.g.:
> 
> ```
> {ID} invert x 1
> {ID} invert x 0
> ```
> 
>  ---
> 
> `var`
> 
> Sets the gap for the 'drunk' mode. E.g.:
> 
> ```
> {ID} var drunkgap 200
> ```
> 
> ...

The messages can be put together with the help of commas:

```
16935 19195, frame 512 start, range 513 581
```

---

### CC input

The paramters can be set in using midi CC. The following are the default CC numbers for each parameter. You may change using the `storage/settings` button in the device.

| CC number | param            |                                                                                                                                                                                          |
| --------- | ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `88`      | `slide1`         | Control the opacity of the slide #1                                                                                                                                                      |
| `89`      | `slide2`         | Control the opacity of the slide #2                                                                                                                                                      |
| `90`      | "smart fade"     | Controls the opacity of slides 1 & 2, depending on the current state, and what we want to fade in (video, slide1, or slide2)                                                             |
| `91`      | loop mode        | ?                                                                                                                                                                                        |
| `92`      | "scrubbing dial" | Use to "scrub" with a given range (this is set using the command `range <frame start> <frame end>`)                                                                                      |
| `93`      | rate dial        | This controls the dial (0 <> 127) which itself controls the playback rate. Default (64) equals a 1.x rate. The min. and max. values are a logarithmic function of the `max. rate` value. |
| `94`      | max. rate        | This controls the maximum playback rate that can be set through the `rate dial` value. For values < 64 in the `rate dial`, the reduces logarithmically according to the same value.      |

---

## Smart fades

Smart fades changes behaviour depending on the current position of the slide fades. Here are some examples:

> `smart cross {ms} {imageName} {"Path/to/image.png"}`
> 
> ---
> 
> `smart cross 200 TEST "path/to/image.png"`

---

## RELATIVE PATHS

By using the string `_PATH_` in the path of the media you want to use, you can have the device substitute that string with the local path. That way you can use the same set in different machines, with different relative paths.

---

## USE AS STANDALONE

You may use the maxpatch as a standalone as well. For this case scenario, you can control it remotely sending OSC data to the device (IP/port on the right hand side of the device). 

![standalone](https://bitbucket.org/AdrianArtacho/public_tesser_video/raw/HEAD/images/standalone.png)

Midinotes 1<>127 will launch the commands stored in the `.csv`.

---

## [To-Do](todo.md)
