# `<podcast-player>`

I have strong opinions on what makes for a Good Podcast Player:tm:, so I built a Web Component to add all the features I want around a native `<audio>` element.

```html
<podcast-player>
	<audio src="path/to/my.mp3" controls></audio>
</podcast-player>

<script type="module" src="path/to/podcast-player.js"></script>
```

## What's happening behind the scenes

![A web inspector view of the Shadow Root tree](/images/podcast-player.png)

## Demo

<iframe height="300" style="width: 100%;" scrolling="no" title="Untitled" src="https://codepen.io/davatron5000/embed/LYerBQw/98e4bba1ef93eb88686924eb1c746bfc?default-tab=html%2Cresult&theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/davatron5000/pen/LYerBQw/98e4bba1ef93eb88686924eb1c746bfc">
  Untitled</a> by Dave Rupert (<a href="https://codepen.io/davatron5000">@davatron5000</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>
