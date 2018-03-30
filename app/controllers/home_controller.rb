class HomeController < ApplicationController

  def index
    @home_props = { home: {users: User.all.map{ |u| {name: u.full_name, id: u.id} }} }
  end
end