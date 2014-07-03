require 'spec_helper'

describe User do
  it "is created with required attributes" do
    FactoryGirl.create(:user).should be_valid
  end

  it "must have an email" do
    FactoryGirl.build(:user, email: nil).should_not be_valid
  end

  it "must have a password" do
    FactoryGirl.build(:user, password: "").should_not be_valid
    FactoryGirl.build(:user, password: nil).should_not be_valid
  end
end