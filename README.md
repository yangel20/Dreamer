# Dreamer

## [Live site](http://dreamer-heroku.herokuapp.com/#/)

## Overview
Dreamer is a clone of the photo-sharing platform Flickr. where a user can view other user's photos, comment on any photo.
Users can also attach tags to their own photos and make albums. so they can share there experience via photos and comments.

## Technologies Used
### Frontend
* React
* Redux
* Javascript
### Backend
* Ruby on Rails
* RESTful Api
### Database
* PostgreSQL
* AWS
### Hosted
* Heroku

## Unique Feature
<dl>
  <dt>Select/Deselect<dt/>
  <dd> This is a cool feature that allows you to click on a photo with the option to delete the selected thumbnail before uploading it to the site. When the thumbnail is first clicked on it finds the element with a event handler, then adds some CSS to display what photo is selected. When selecting another thumbnail it deselected the previously selected thumbnail.<dd/>
</dl>


![Yangel's styles screen shot](https://res.cloudinary.com/dijm9qoxa/image/upload/v1622743218/Screen_Recording_2021-06-03_at_1.43.15_PM_nltusc.gif)

```javascript
    select(id) {
        return (e) => {
            e.preventDefault();
            e.stopPropagation();
            const image = document.getElementsByClassName(`thumbnail-${id}`);
            this.deselect(e);
            image[0].classList.add("selected-thumbnail");
            this.setState({ selected: id });
        };
    }

    deselect(e) {
        e.preventDefault();
        e.stopPropagation();
        const selectedImages = document.getElementsByClassName("selected-thumbnail");
        Array.from(selectedImages).map(image => {
            return image.classList.remove("selected-thumbnail");
        });
        this.setState({ selected: null });
    }
    
    deleteThumbnail(){
        const ns = Object.assign({}, this.state);
        const index = this.state.selected;
        delete ns.files[index];
        delete ns.titles[index];
        delete ns.descriptions[index];
        ns.selected = null;
        this.setState(ns);
    }
```

<dl>
  <dt>Splash Backround<dt/>
  <dd> This is another cool feature that transitions between the background images using CSS animation and Keyframes<dd/>
</dl>


<img src="app/assets/images/splash-gif.gif"/>


For a deeper breakdown of the project's MVP, Routes and Schema; visit the [Wiki Page](https://github.com/yangel20/Dreamer/wiki)

