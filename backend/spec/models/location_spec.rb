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
require 'rails_helper'

RSpec.describe Location, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
