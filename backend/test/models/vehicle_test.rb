# == Schema Information
#
# Table name: vehicles
#
#  id          :uuid             not null, primary key
#  make        :string
#  model       :string
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
require "test_helper"

class VehicleTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
