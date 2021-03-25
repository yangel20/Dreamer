# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


demo = User.create!(username:"demo", password:"password176", email:"demo@aa.com")

john = User.create!(username:"john", password:"password17", email:"john@aa.com")

jessica = User.create!(username:"jessica", password:"password17", email:"jessica@aa.com")

eric = User.create!(username:"eric", password:"password17", email:"eric@aa.com")
#--------------------------------------------------------------------------------------------------------------------
demoNightmare = Photo.create!(title:"nightmare", description:"I had crazy nightmare", user_id: 1)

johnPhoto = Photo.create!(title:"my favorite photo", description:"I hope you enjoy this", user_id: 2)
johnMountain = Photo.create!(title:"the highest peek", description:"I had a dream in which I reached the top, and it was lonely.", user_id: 2)
johnDominicanrepublic = Photo.create!(title:"soy frutero", description:"No hay algo mas mejor que una vida tropical!!!", user_id: 2)
johnHotAirBalloon = Photo.create!(title:"no longer scared of height", description:"it's incredible to say that I conquered my fear of height with a dream", user_id: 2)
johnTree = Photo.create!(title:"delusional", description:"First time i saw it, I thought it was just tree. But when I dreamt of it again, it was more than a tree", user_id: 2)

jessicaPhoto = Photo.create!(title:"this was scary", description:"I had a nightmare last night", user_id: 3)
jessicaDreamCatcher = Photo.create!(title:"Dream Catcher", description:"In my dream I saw my dream catcher, I think this sign", user_id: 3)
jessicaFood  = Photo.create!(title:"Cravings", description:"Day dreaming of my next meal", user_id: 3)
jessicaDancing =  Photo.create!(title:"Celebration", description:"Living my best life is just more than a dream!!!!!", user_id: 3)
jessicaVangogh =  Photo.create!(title:"my perfect date", description:"my perfect date was once drew by Van Gogh ", user_id: 3)

ericPhoto = Photo.create!(title:"happy place", description:"I love it here", user_id: 4)
ericConcert = Photo.create!(title:"my ecstasy", description:"I had a trippy trip and it was fun", user_id: 4)
ericIcecream = Photo.create!(title:"my sweet desire", description:"I dreamt of eating my favorite ice-cream, and just the thought of it made my mouth watery", user_id: 4)

#--------------------------------------------------------------------------------------------------------------------
require 'open-uri'
#demo
demoNightmare.picture.attach(io: File.open("/Users/yangel/Pictures/dreamer_photos/elm_street.jpg"), filename: "elm_street.jpg")


#john
johnPhoto.picture.attach(io: File.open("/Users/yangel/Pictures/dreamer_photos/johnfav.jpg"), filename: "johnfav.jpg")
johnMountain.picture.attach(io: File.open("/Users/yangel/Pictures/dreamer_photos/john_mountain.jpg"), filename: "john_mountain.jpg")
johnDominicanrepublic.picture.attach(io: File.open("/Users/yangel/Pictures/dreamer_photos/john_dominican_republic.jpg"), filename: "john_dominican_republic.jpg")
johnHotAirBalloon.picture.attach(io: File.open("/Users/yangel/Pictures/dreamer_photos/john_hot_air_balloon.jpg"), filename: "john_hot_air_balloon.jpg")
johnTree.picture.attach(io: File.open("/Users/yangel/Pictures/dreamer_photos/john_tree.jpg"), filename: "john_tree.jpg")

#jessica
jessicaPhoto.picture.attach(io: File.open("/Users/yangel/Pictures/dreamer_photos/jessica_Nightmare.jpg"), filename: "jessica_Nightmare.jpg")
jessicaDreamCatcher.picture.attach(io: File.open("/Users/yangel/Pictures/dreamer_photos/jessica_dream_catcher.jpeg"), filename: "jessica_dream_catcher.jpeg")
jessicaFood.picture.attach(io: File.open("/Users/yangel/Pictures/dreamer_photos/jessica_food.jpg"), filename: "jessica_food.jpg")
jessicaDancing.picture.attach(io: File.open("/Users/yangel/Pictures/dreamer_photos/jessica_dancing.jpg"), filename: "jessica_dancing.jpg")
jessicaVangogh.picture.attach(io: File.open("/Users/yangel/Pictures/dreamer_photos/jessica_van_gogh.jpg"), filename: "jessica_van_gogh.jpg")

#eric
ericPhoto.picture.attach(io: File.open("/Users/yangel/Pictures/dreamer_photos/eric_happy_place.jpg"), filename: "eric_happy_place.jpg")
ericConcert.picture.attach(io: File.open("/Users/yangel/Pictures/dreamer_photos/eric_concert.jpg"), filename: "eric_concert.jpg")
ericIcecream.picture.attach(io: File.open("/Users/yangel/Pictures/dreamer_photos/eric_icecream.jpg"), filename: "eric_icecream.jpg")



# demo_user = User.create(username: "Andy", email: "andy@email.com", password: "password")

# file = open('https://<your_bucket>.<your_region>.amazonaws.com/<optional_folder_name>/<some_file>.jpg')

# demo_user.avatar.attach(io: file, filename: 'some_file.jpg')