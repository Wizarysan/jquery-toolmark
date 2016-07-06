# jquery-toolmark
Minimalistic (less than 1kb uglified) jquery plugin for map marks and text tooltips.

This jquery plugin can handle two frequent tasks: 
**placing annotation marks anywhere - for example on map or another image:**

```
$(".some-image-container").toolMark({
    mode: "mark",
    xpos: 100,
    ypos: 100,
    mark: "Hover me",
    content: "This is annotation text"
});
```
This, for example, will place mark at top: 100px, left: 100px of your div.

**placing tooltips in some part of text:**
```
$(".some-span").toolMark({
    mode: "tooltip",
    content: "This is tooltip text"
});
```
This will place a tooltip right on your span.

#####Options
mode: mark or tooltip - if tooltip option is selected, no mark will be added to wrapper.
xpos: horizontal position.
ypos: vertical position - btw, you can position tooltip too, place it under the text, for example.
mark: visible text, that will show content on hover.
width: of content.
content: annotation or tooltip text itself

There are no unnecessary styles and no animations, you can style .tm-wrap, .tm-wrap__mark and .tm-wrap__content any way you want.
