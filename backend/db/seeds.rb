# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

location = Location.create(
  name: 'Location 1',
  city: 'City',
  street: 'Street',
  state: 'ST',
  zipcode: '12345'
)

vehicle = Vehicle.create(
  vin: 'ABCDEFGHIJ1234567',
  stock: 'T12345',
  status: :available,
  kind: :new,
  make: 'Make',
  model: 'Model',
  trim: 'Trim',
  year: 2022,
  price: 20_000,
  msrp: 22_500,
  location: location
)

