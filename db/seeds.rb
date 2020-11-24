# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


demo = User.create!(username:"demo", password:"password17", email:"demo@aa.com")

john = User.create!(username:"john", password:"password17", email:"john@aa.com")

jessica = User.create!(username:"jessica", password:"password17", email:"jessica@aa.com")

eric = User.create!(username:"eric", password:"password17", email:"eric@aa.com")

test = Photo.create!(title:"test1", description:"this is a test", user_id: 1)

johnPhoto = Photo.create!(title:"my favorite photo", description:"i hope you enjoy this", user_id: 2)

jessicaPhoto = Photo.create!(title:"this was scary", description:"i had a nightmare last night", user_id: 3)

ericPhoto = Photo.create!(title:"happy place", description:"i love it here", user_id: 4)

require 'open-uri'

test.picture.attach(io: File.open("/Users/yangel/Pictures/dreamer_photos/elm_street.jpg"), filename: "elm_street.jpg")
johnPhoto.picture.attach(io: File.open("/Users/yangel/Pictures/dreamer_photos/johnfav.jpg"), filename: "johnfav.jpg")
jessicaPhoto.picture.attach(io: File.open("/Users/yangel/Pictures/dreamer_photos/jessica_Nightmare.jpg"), filename: "jessica_Nightmare.jpg")
ericPhoto.picture.attach(io: File.open("/Users/yangel/Pictures/dreamer_photos/eric_happy_place.jpg"), filename: "eric_happy_place.jpg")



# demo_user = User.create(username: "Andy", email: "andy@email.com", password: "password")

# file = open('https://<your_bucket>.<your_region>.amazonaws.com/<optional_folder_name>/<some_file>.jpg')

# demo_user.avatar.attach(io: file, filename: 'some_file.jpg')