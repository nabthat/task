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
require 'rails_helper'

RSpec.describe Vehicle, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
