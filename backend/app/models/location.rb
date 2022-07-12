# == Schema Information
#
# Table name: locations
#
#  id         :uuid             not null, primary key
#  city       :string
#  name       :string
#  state      :string
#  street     :string
#  zipcode    :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Location < ApplicationRecord
end
