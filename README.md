Hi!

Here's my stab at the programming test.

I decided that, rather than writing a simple Python script (or a Java app), I'd go a bit outside of my confort zone, have a bit of fun, use JavaScript and create my first "real" React app - well, a Next.js app, really. It might sound weird to hear that I chose a language I haven't used in years and a framework that I'm completely unfamiliar with, but I hope that shows curiosity and adaptability (putting a positive spin here!).

Why Next.js? Well, it's been a while since I've done any real front-end work and I've been reading a lot about React and Next, so... Sounded like a good opportunity to give it a try and learn something new.

Also, I know you use JavaScript and Node, so I thought that it would be closer to the kind of code you are used to seeing.

Now, the UI is not great... With more time I'd improve the styles, make sure that the graph sizes are a bit better (I know, setting the height manually is a bit of a hack) and that everything looks more "together". But I also wanted to restrict myself to the 2-3 hours limit (I actually ended up spending a bit more than that, almost 4 hours) and at least it works :D

ALthough I know that Next.js can export static html/js/css, I wasn't able to get that bit to work (complete Next.js newbie here!), so the easiest way to see this working is to treat it as a node app:

- Open a console and go to the root path of the project.
- Run `npm install` to install the necessary modules.
- Run `npm run dev `.
- This should get the app running in [localhost:3000](http://localhost:3000/)
- In the web page, click on the `Click to load` button.
- After a few seconds, you should see the results.

Now, a few technical details:
- The main part of the code is `pages/index.js`. It sets the data loading functions and renders the container of all the other UI components.
- Loading the data is broken in two steps:
  - The calls to the APIs are run in parallel in `lib/data.js`.
  - Then the data goes to `lib/clean_data.js` that parses the results and returns an array with only the information we are going to use.
  - The API calls are extremely basic and don't consider cases like network errors, retries, timeouts or anything like that... Something to be improved there, definitely.
- All the components are in the `components` folder:
  - `selector.js` contains the button that will fire the data loading process.
  - `summary.js` will add up the consumption and CO2 generation for the month
  - `pie.js` will display a pie chart with fuel mix percentage. You can hover over the sources to see the actual percentage.
  - `bar.js` builds up the line chart. This was not asked for in the exercise, but I thought it would be useful to see the usage vs the intensity of generated CO2 (interesting how there's a log more CO2 generated in the second half of the month)
- In the beginning I did *a lot* of tests and I didn't want to hammer the APIs, so I build a `static_data` module to read data directly from the disk. I've left that module (and the data) just in case.

I think that's about it... Please don't hesitate to ping me if you have any questions or comments.

Thanks for reading!

Kind regards,
Miguel