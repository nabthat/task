# == Schema Information
#
# Table name: vehicles
#
#  id          :uuid             not null, primary key
#  kind        :integer          default("new"), not null
#  make        :string
#  model       :string
#  msrp        :integer
#  price       :integer
#  status      :integer          default("in_transit"), not null
#  stock       :string
#  trim        :string
#  vin         :string
#  year        :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  location_id :uuid
#
FactoryBot.define do
  factory :vehicle do
    
  end
end
