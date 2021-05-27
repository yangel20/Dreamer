# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

User.destroy_all
Photo.destroy_all
Tag.destroy_all



demo = User.create!(username:"demo", password:"password", email:"demo@aa.com")

john = User.create!(username:"john", password:"password", email:"john@aa.com")

jessica = User.create!(username:"jessica", password:"password", email:"jessica@aa.com")

eric = User.create!(username:"eric", password:"password", email:"eric@aa.com")
#--------------------------------------------------------------------------------------------------------------------
demoNightmare = Photo.create!(title:"nightmare", description:"I had crazy nightmare", user_id: demo.id)
demo2 = Photo.create!(title:"Dreaming", description:"looking at my self", user_id: demo.id)
demo3 = Photo.create!(title:"Time?", description:"Does time really exist?", user_id: demo.id)
demo4 = Photo.create!(title:"serious", description:"are my dreams telling me something?", user_id: demo.id)


johnPhoto = Photo.create!(title:"my favorite photo", description:"I hope you enjoy this", user_id: john.id)
johnMountain = Photo.create!(title:"the highest peek", description:"I had a dream in which I reached the top, and it was lonely.", user_id: john.id)
johnDominicanrepublic = Photo.create!(title:"soy frutero", description:"No hay algo mas mejor que una vida tropical!!!", user_id: john.id)
johnHotAirBalloon = Photo.create!(title:"no longer scared of height", description:"it's incredible to say that I conquered my fear of height with a dream", user_id: john.id)
johnTree = Photo.create!(title:"delusional", description:"First time i saw it, I thought it was just tree. But when I dreamt of it again, it was more than a tree", user_id: john.id)

jessicaPhoto = Photo.create!(title:"this was scary", description:"I had a nightmare last night", user_id: jessica.id)
jessicaDreamCatcher = Photo.create!(title:"Dream Catcher", description:"In my dream I saw my dream catcher, I think this sign", user_id: jessica.id)
jessicaFood  = Photo.create!(title:"Cravings", description:"Day dreaming of my next meal", user_id: jessica.id)
jessicaDancing =  Photo.create!(title:"Celebration", description:"Living my best life is just more than a dream!!!!!", user_id: jessica.id)
jessicaVangogh =  Photo.create!(title:"my perfect date", description:"my perfect date was once drew by Van Gogh ", user_id: jessica.id)

ericPhoto = Photo.create!(title:"happy place", description:"I love it here", user_id: eric.id)
ericConcert = Photo.create!(title:"my ecstasy", description:"I had a trippy trip and it was fun", user_id: eric.id)
ericIcecream = Photo.create!(title:"my sweet desire", description:"I dreamt of eating my favorite ice-cream, and just the thought of it made my mouth watery", user_id: eric.id)

# #--------------------------------------------------------------------------------------------------------------------
# # seed bucket-------

# demo
demoNightmare.picture.attach(io: URI.open("https://dreamer-seed.s3.amazonaws.com/dreamer_photos/elm_street.jpg"), filename: "elm_street.jpg")
#tag
tag_1 = Tag.create!(photo_id: demoNightmare.id, name: "Nightmare")
tag_2 = Tag.create!(photo_id: demoNightmare.id, name: "Movie")
tag_3 = Tag.create!(photo_id: demoNightmare.id, name: "Scary")

demo2.picture.attach(io: URI.open("https://dreamer-seed.s3.amazonaws.com/dreamer_photos/demo_2.jpeg"), filename: "demo_2.jpeg")
#tag
tag_4 = Tag.create!(photo_id: demo2.id, name: "Dream")

demo3.picture.attach(io: URI.open("https://dreamer-seed.s3.amazonaws.com/dreamer_photos/demo_3.jpeg"), filename: "demo_3.jpeg")
#tag
tag_5 = Tag.create!(photo_id: demo3.id, name: "Dream")
tag_6 = Tag.create!(photo_id: demo3.id, name: "Time")

demo4.picture.attach(io: URI.open("https://dreamer-seed.s3.amazonaws.com/dreamer_photos/demo_4.jpeg"), filename: "demo_4.jpeg")
#tag
tag_7 = Tag.create!(photo_id: demo4.id, name: "Nightmare")
tag_8 = Tag.create!(photo_id: demo4.id, name: "Scary")


# john
johnPhoto.picture.attach(io: URI.open("https://dreamer-seed.s3.amazonaws.com/dreamer_photos/johnfav.jpg"), filename: "johnfav.jpg")
#tag
tag_9 = Tag.create!(photo_id: johnPhoto.id, name: "Beach")
tag_10 = Tag.create!(photo_id: johnPhoto.id, name: "Relaxing")
tag_11 = Tag.create!(photo_id: johnPhoto.id, name: "Dream")

johnMountain.picture.attach(io: URI.open("https://dreamer-seed.s3.amazonaws.com/dreamer_photos/john_mountain.jpg"), filename: "john_mountain.jpg")
#tag
tag_12 = Tag.create!(photo_id: johnMountain.id, name: "Relaxing")
tag_13 = Tag.create!(photo_id: johnMountain.id, name: "Heights")
tag_14 = Tag.create!(photo_id: johnMountain.id, name: "Dream")


johnDominicanrepublic.picture.attach(io: URI.open("https://dreamer-seed.s3.amazonaws.com/dreamer_photos/john_dominican_republic.jpg"), filename: "john_dominican_republic.jpg")
#tag
tag_15 = Tag.create!(photo_id: johnDominicanrepublic.id, name: "Caribbean")
tag_16 = Tag.create!(photo_id: johnDominicanrepublic.id, name: "Fruits")

johnHotAirBalloon.picture.attach(io: URI.open("https://dreamer-seed.s3.amazonaws.com/dreamer_photos/john_hot_air_balloon.jpg"), filename: "john_hot_air_balloon.jpg")
#tag
tag_17 = Tag.create!(photo_id: johnHotAirBalloon.id, name: "Heights")
tag_18 = Tag.create!(photo_id: johnHotAirBalloon.id, name: "Views")

johnTree.picture.attach(io: URI.open("https://dreamer-seed.s3.amazonaws.com/dreamer_photos/john_tree.jpg"), filename: "john_tree.jpg")
#tag
tag_19 = Tag.create!(photo_id: johnTree.id, name: "Tree")
tag_20 = Tag.create!(photo_id: johnTree.id, name: "Abstract")
tag_21 = Tag.create!(photo_id: johnTree.id, name: "MoMa")

#jessica
jessicaPhoto.picture.attach(io: URI.open("https://dreamer-seed.s3.amazonaws.com/dreamer_photos/jessica_Nightmare.jpg"), filename: "jessica_Nightmare.jpg")
#tag
tag_22 = Tag.create!(photo_id: jessicaPhoto.id, name: "Nightmare")
tag_23 = Tag.create!(photo_id: jessicaPhoto.id, name: "Scary")
tag_24 = Tag.create!(photo_id: jessicaPhoto.id, name: "Movie")

jessicaDreamCatcher.picture.attach(io: URI.open("https://dreamer-seed.s3.amazonaws.com/dreamer_photos/jessica_dream_catcher.jpeg"), filename: "jessica_dream_catcher.jpeg")
#tag
tag_25 = Tag.create!(photo_id: jessicaDreamCatcher.id, name: "Dream")

jessicaFood.picture.attach(io: URI.open("https://dreamer-seed.s3.amazonaws.com/dreamer_photos/jessica_food.jpg"), filename: "jessica_food.jpg")
#tag
tag_26 = Tag.create!(photo_id: jessicaFood.id, name: "Food")
tag_27 = Tag.create!(photo_id: jessicaFood.id, name: "Yumm")

jessicaDancing.picture.attach(io: URI.open("https://dreamer-seed.s3.amazonaws.com/dreamer_photos/jessica_dancing.jpg"), filename: "jessica_dancing.jpg")
#tag
tag_28 = Tag.create!(photo_id: jessicaDancing.id, name: "Dancing")
tag_29 = Tag.create!(photo_id: jessicaDancing.id, name: "Fun")

jessicaVangogh.picture.attach(io: URI.open("https://dreamer-seed.s3.amazonaws.com/dreamer_photos/jessica_van_gogh.jpg"), filename: "jessica_van_gogh.jpg")
#tag
tag_30 = Tag.create!(photo_id: jessicaVangogh.id, name: "Abstract")
tag_31 = Tag.create!(photo_id: jessicaVangogh.id, name: "MoMA")

#eric
ericPhoto.picture.attach(io: URI.open("https://dreamer-seed.s3.amazonaws.com/dreamer_photos/eric_happy_place.jpg"), filename: "eric_happy_place.jpg")
#tag
tag_32 = Tag.create!(photo_id: ericPhoto.id, name: "Dream")

ericConcert.picture.attach(io: URI.open("https://dreamer-seed.s3.amazonaws.com/dreamer_photos/eric_concert.jpg"), filename: "eric_concert.jpg")
#tag
tag_33 = Tag.create!(photo_id: ericConcert.id, name: "Party")
tag_34 = Tag.create!(photo_id: ericConcert.id, name: "Fun")

ericIcecream.picture.attach(io: URI.open("https://dreamer-seed.s3.amazonaws.com/dreamer_photos/eric_icecream.jpg"), filename: "eric_icecream.jpg")
tag_35 = Tag.create!(photo_id: ericIcecream.id, name: "Food")
tag_36 = Tag.create!(photo_id: ericIcecream.id, name: "Yumm")






#production bucket-----
# # #john

# johnPhoto.picture.attach(io: open("https://dreamer-pro.s3.amazonaws.com/johnfav.jpg"), filename: "johnfav.jpg")
# johnMountain.picture.attach(io: open("https://dreamer-seed.s3.amazonaws.com/dreamer_photos/john_mountain.jpg"), filename: "john_mountain.jpg")
# johnDominicanrepublic.picture.attach(io: open("https://dreamer-seed.s3.amazonaws.com/dreamer_photos/john_dominican_republic.jpg"), filename: "john_dominican_republic.jpg")
# johnHotAirBalloon.picture.attach(io: open("https://dreamer-seed.s3.amazonaws.com/dreamer_photos/john_hot_air_balloon.jpg"), filename: "john_hot_air_balloon.jpg")
# johnTree.picture.attach(io: open("https://dreamer-seed.s3.amazonaws.com/dreamer_photos/john_tree.jpg"), filename: "john_tree.jpg")

# #jessica
# jessicaPhoto.picture.attach(io: open("https://dreamer-seed.s3.amazonaws.com/dreamer_photos/jessica_Nightmare.jpg"), filename: "jessica_Nightmare.jpg")
# jessicaDreamCatcher.picture.attach(io: open("https://dreamer-seed.s3.amazonaws.com/dreamer_photos/jessica_dream_catcher.jpeg"), filename: "jessica_dream_catcher.jpeg")
# jessicaFood.picture.attach(io: open("https://dreamer-seed.s3.amazonaws.com/dreamer_photos/jessica_food.jpg"), filename: "jessica_food.jpg")
# jessicaDancing.picture.attach(io: open("https://dreamer-seed.s3.amazonaws.com/dreamer_photos/jessica_dancing.jpg"), filename: "jessica_dancing.jpg")
# jessicaVangogh.picture.attach(io: open("https://dreamer-seed.s3.amazonaws.com/dreamer_photos/jessica_van_gogh.jpg"), filename: "jessica_van_gogh.jpg")

# #eric
# ericPhoto.picture.attach(io: open("https://dreamer-seed.s3.amazonaws.com/dreamer_photos/eric_happy_place.jpg"), filename: "eric_happy_place.jpg")
# ericConcert.picture.attach(io: open("https://dreamer-seed.s3.amazonaws.com/dreamer_photos/eric_concert.jpg"), filename: "eric_concert.jpg")
# ericIcecream.picture.attach(io: open("https://dreamer-seed.s3.amazonaws.com/dreamer_photos/eric_icecream.jpg"), filename: "eric_icecream.jpg")



# demo_user = User.create(username: "Andy", email: "andy@email.com", password: "password")

# file = open('https://<your_bucket>.<your_region>.amazonaws.com/<optional_folder_name>/<some_file>.jpg')

# demo_user.avatar.attach(io: file, filename: 'some_file.jpg')